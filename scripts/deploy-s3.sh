#!/bin/bash

###############################################################################
# Deen Over Duniya - S3 Deployment Script
# 
# This script builds the Docusaurus site and deploys it to AWS S3
# with optional CloudFront invalidation
#
# Usage:
#   ./scripts/deploy-s3.sh
#
# Required Environment Variables:
#   AWS_ACCESS_KEY_ID - Your AWS access key
#   AWS_SECRET_ACCESS_KEY - Your AWS secret key
#   S3_BUCKET_NAME - Your S3 bucket name
#   AWS_REGION - AWS region (default: us-east-1)
#   CLOUDFRONT_DISTRIBUTION_ID - (Optional) CloudFront distribution ID
###############################################################################

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check if required environment variables are set
check_env_vars() {
    print_info "Checking environment variables..."
    
    if [ -z "$S3_BUCKET_NAME" ]; then
        print_error "S3_BUCKET_NAME environment variable is not set"
        exit 1
    fi
    
    if [ -z "$AWS_ACCESS_KEY_ID" ]; then
        print_error "AWS_ACCESS_KEY_ID environment variable is not set"
        exit 1
    fi
    
    if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
        print_error "AWS_SECRET_ACCESS_KEY environment variable is not set"
        exit 1
    fi
    
    # Set default region if not provided
    if [ -z "$AWS_REGION" ]; then
        export AWS_REGION="us-east-1"
        print_warning "AWS_REGION not set, using default: us-east-1"
    fi
    
    print_success "Environment variables verified"
}

# Check if AWS CLI is installed
check_aws_cli() {
    print_info "Checking AWS CLI installation..."
    
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed"
        print_info "Install it from: https://aws.amazon.com/cli/"
        exit 1
    fi
    
    print_success "AWS CLI is installed"
}

# Check if Node.js is installed
check_nodejs() {
    print_info "Checking Node.js installation..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        print_info "Install it from: https://nodejs.org/"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_success "Node.js is installed: $NODE_VERSION"
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    npm ci
    print_success "Dependencies installed"
}

# Build the site
build_site() {
    print_info "Building Docusaurus site..."
    npm run build
    print_success "Site built successfully"
}

# Deploy to S3
deploy_to_s3() {
    print_info "Deploying to S3 bucket: $S3_BUCKET_NAME"
    
    # Sync static assets with long cache
    print_info "Uploading static assets (CSS, JS, images)..."
    aws s3 sync build/ s3://$S3_BUCKET_NAME \
        --delete \
        --cache-control "public, max-age=31536000, immutable" \
        --exclude "*.html" \
        --exclude "sitemap.xml" \
        --exclude "robots.txt" \
        --region $AWS_REGION
    
    # Sync HTML files with no-cache
    print_info "Uploading HTML files..."
    aws s3 sync build/ s3://$S3_BUCKET_NAME \
        --delete \
        --cache-control "public, max-age=0, must-revalidate" \
        --exclude "*" \
        --include "*.html" \
        --include "sitemap.xml" \
        --include "robots.txt" \
        --content-type "text/html; charset=utf-8" \
        --region $AWS_REGION
    
    print_success "Files uploaded to S3"
}

# Configure S3 bucket for website hosting
configure_s3_website() {
    print_info "Configuring S3 bucket for static website hosting..."
    
    # Create website configuration
    aws s3 website s3://$S3_BUCKET_NAME \
        --index-document index.html \
        --error-document 404.html \
        --region $AWS_REGION
    
    print_success "S3 bucket configured for website hosting"
}

# Invalidate CloudFront cache (if configured)
invalidate_cloudfront() {
    if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
        print_info "Invalidating CloudFront cache..."
        
        INVALIDATION_ID=$(aws cloudfront create-invalidation \
            --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
            --paths "/*" \
            --query 'Invalidation.Id' \
            --output text)
        
        print_success "CloudFront invalidation created: $INVALIDATION_ID"
        print_info "It may take a few minutes for changes to propagate"
    else
        print_warning "CLOUDFRONT_DISTRIBUTION_ID not set, skipping CloudFront invalidation"
    fi
}

# Print deployment summary
print_summary() {
    echo ""
    echo "=========================================="
    print_success "DEPLOYMENT COMPLETE!"
    echo "=========================================="
    echo ""
    print_info "S3 Bucket: $S3_BUCKET_NAME"
    print_info "Region: $AWS_REGION"
    print_info "Website URL: http://$S3_BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"
    
    if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
        print_info "CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
    fi
    
    echo ""
    print_info "May Allah accept this effort and make it beneficial! 🤲"
    echo ""
}

# Main deployment flow
main() {
    echo "=========================================="
    echo "   Deen Over Duniya - S3 Deployment"
    echo "=========================================="
    echo ""
    
    check_env_vars
    check_aws_cli
    check_nodejs
    install_dependencies
    build_site
    deploy_to_s3
    configure_s3_website
    invalidate_cloudfront
    print_summary
}

# Run main function
main

