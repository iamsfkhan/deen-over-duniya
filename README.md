# Deen Over Duniya

<div align="center">

**بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ**

*Strengthening Iman, One Step at a Time*

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](docs/contributing.md)

An open-source Islamic knowledge platform featuring authentic Hadiths, inspiring stories of the Sahaba, essential Sunnats, and beautiful Duas to help young Muslims strengthen their faith.

[**View Live Site**](#) • [**Contribute**](docs/contributing.md) • [**Report Issue**](https://github.com/yourusername/deen-over-duniya/issues)

</div>

---

## 📖 About This Project

**Deen Over Duniya** is a modern, static website built to help the Muslim Ummah, especially young Muslims, stay connected to their faith in a world full of distractions. This project aims to make authentic Islamic knowledge easily accessible, searchable, and beautifully presented.

### ✨ Features

- 📚 **Authentic Hadiths** - Carefully curated from Sahih Bukhari, Sahih Muslim, and other reliable collections
- 🌟 **Stories of Sahaba** - Inspiring narratives of the Companions of Prophet Muhammad ﷺ
- 🕌 **Practical Sunnats** - Daily and occasional Sunnats to implement in your life
- 🤲 **Essential Duas** - Morning, evening, and situational supplications from Quran and Sunnah
- 📖 **Islamic Knowledge** - Foundational concepts including the Pillars of Islam and Iman
- 🔍 **Powerful Search** - Find what you're looking for quickly and easily
- 🌙 **Dark Mode** - Easy on the eyes for reading at any time
- 📱 **Responsive Design** - Works beautifully on all devices
- 🌐 **Arabic Support** - Proper RTL support for Arabic text with beautiful typography
- 🎨 **Modern UI** - Peaceful green and white theme representing Islamic aesthetics

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** (comes with Node.js)
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/deen-over-duniya.git
cd deen-over-duniya

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000` 🎉

### Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run serve
```

The build files will be in the `build/` directory.

---

## 🏗️ Project Structure

```
deen-over-duniya/
├── docs/                       # All markdown content
│   ├── intro.md               # Welcome page
│   ├── hadiths/               # Hadith collections
│   │   ├── _category_.json
│   │   ├── sahih-bukhari.md
│   │   └── sahih-muslim.md
│   ├── sahaba-stories/        # Stories of Companions
│   │   ├── _category_.json
│   │   ├── abu-bakr-as-siddiq.md
│   │   └── umar-ibn-khattab.md
│   ├── sunnats/               # Prophetic practices
│   │   ├── _category_.json
│   │   └── daily-sunnats.md
│   ├── duas/                  # Supplications
│   │   ├── _category_.json
│   │   └── morning-evening.md
│   ├── islamic-knowledge/     # Foundational concepts
│   │   ├── _category_.json
│   │   └── pillars-of-islam.md
│   └── contributing.md        # Contribution guidelines
├── src/
│   ├── components/            # React components
│   │   ├── ArabicText.jsx    # Arabic RTL component
│   │   └── DailyWisdom.jsx   # Daily wisdom widget
│   ├── css/
│   │   └── custom.css        # Custom styling
│   └── pages/
│       ├── index.jsx         # Landing page
│       └── index.module.css
├── static/
│   └── img/                  # Images and assets
├── .github/
│   └── workflows/
│       └── deploy-to-s3.yml  # CI/CD pipeline
├── scripts/
│   └── deploy-s3.sh          # Deployment script
├── docusaurus.config.js      # Site configuration
├── sidebars.js               # Sidebar structure
├── package.json
└── README.md
```

---

## 🎨 Theme & Design

The site uses a **peaceful green and white color scheme** that represents:
- 🌿 **Green** - Growth, Islam, and nature
- ⚪ **White** - Purity, peace, and simplicity
- 🌙 **Dark Mode** - Deep green theme for comfortable night reading

### Typography
- **Arabic Text**: Amiri and Scheherazade fonts for beautiful Arabic typography
- **English Text**: Inter font for clean, modern readability
- **RTL Support**: Proper right-to-left layout for Arabic content

---

## 📝 Content Guidelines

### Adding New Content

1. **Fork the repository**
2. **Create a new branch** for your changes
3. **Add your content** in the appropriate category
4. **Follow the templates** in the [Contributing Guide](docs/contributing.md)
5. **Submit a pull request**

### Content Standards

✅ **We Accept:**
- Authentic Hadiths from Sahih collections
- Verified stories with reliable sources
- Content based on Quran and Sunnah
- Scholarly consensus

❌ **We Don't Accept:**
- Weak or fabricated Hadiths (unless clearly labeled)
- Unverified stories
- Sectarian or divisive content
- Personal opinions without scholarly backing

See our [Contributing Guide](docs/contributing.md) for detailed instructions.

---

## 🚢 Deployment

### Deploying to AWS S3

#### Option 1: Using GitHub Actions (Recommended)

1. **Set up GitHub Secrets** in your repository settings:
   ```
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
   AWS_REGION (optional, defaults to us-east-1)
   S3_BUCKET_NAME
   CLOUDFRONT_DISTRIBUTION_ID (optional)
   ```

2. **Push to main branch** - The site will automatically deploy!

The GitHub Actions workflow (`.github/workflows/deploy-to-s3.yml`) will:
- Install dependencies
- Build the site
- Deploy to S3
- Invalidate CloudFront cache (if configured)

#### Option 2: Manual Deployment

```bash
# Set environment variables
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_REGION=us-east-1
export S3_BUCKET_NAME=your-bucket-name
export CLOUDFRONT_DISTRIBUTION_ID=your_distribution_id  # Optional

# Run deployment script
./scripts/deploy-s3.sh
```

### S3 Bucket Configuration

Create an S3 bucket with:
- **Static website hosting** enabled
- **Public read access** (or use CloudFront)
- **Bucket policy** allowing public access to objects

Example bucket policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### Optional: CloudFront CDN

For better performance and HTTPS:
1. Create a CloudFront distribution pointing to your S3 bucket
2. Add the distribution ID to your GitHub secrets
3. The deployment will automatically invalidate the cache

---

## 🛠️ Tech Stack

- **[Docusaurus 3.8](https://docusaurus.io/)** - Static site generator
- **[React 19](https://react.dev/)** - UI library
- **[Mermaid](https://mermaid.js.org/)** - Diagram support
- **[@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)** - Local search
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD for testing and optional deployment
- **[AWS S3](https://aws.amazon.com/s3/)** - Static hosting (optional, for maintainers)
- **[AWS CloudFront](https://aws.amazon.com/cloudfront/)** - Optional CDN

### Alternative Hosting Options

You can deploy this site to various platforms:
- **Netlify** - Free tier available, automatic deploys
- **Vercel** - Excellent for React apps, free tier
- **GitHub Pages** - Free hosting with GitHub
- **AWS S3** - Included deployment scripts
- **Any static hosting** - Just upload the `build/` folder

---

## 🤝 Contributing

We welcome contributions from everyone! Whether you're adding content, fixing bugs, or suggesting improvements, your help is appreciated.

### Ways to Contribute

- 📚 Add new Hadiths, stories, or Duas
- ✍️ Improve existing content
- 🐛 Report bugs or issues
- 💡 Suggest new features
- 🌍 Help with translations
- 📖 Improve documentation

### Getting Started

1. Read our [Contributing Guide](docs/contributing.md)
2. Check [open issues](https://github.com/yourusername/deen-over-duniya/issues)
3. Fork the repo and make your changes
4. Submit a pull request

### Code of Conduct

- Be respectful and kind
- Focus on authentic, beneficial content
- Avoid sectarian or divisive language
- Accept corrections gracefully
- Work for Allah's pleasure

---

## 📊 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `./scripts/deploy-s3.sh` | Deploy to AWS S3 |

---

## 🌟 Recognition

This project is built with the contributions of many brothers and sisters. May Allah reward everyone who has contributed to making Islamic knowledge more accessible.

### Contributors

See our [Contributors](https://github.com/yourusername/deen-over-duniya/graphs/contributors) page.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### Content License

All Islamic content (Hadiths, Duas, etc.) is from authentic Islamic sources and is shared for the benefit of the Ummah. Please verify all content with scholars and authentic sources.

---

## 🤲 Dua

<div align="center">

**اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا وَعَلِّمْنَا مَا يَنْفَعُنَا**

*O Allah, benefit us with what You have taught us, and teach us that which will benefit us*

---

**رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ**

*Our Lord, accept this from us. Indeed, You are the All-Hearing, the All-Knowing*

</div>

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/deen-over-duniya/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/deen-over-duniya/discussions)

---

## 🔗 Links

- **Live Website**: [Coming Soon](#)
- **Contributing**: [Contributing Guide](docs/contributing.md)

---

<div align="center">

**Made with ❤️ for the Ummah**

*May Allah accept this effort and make it a source of continuous reward (Sadaqah Jariyah) for all contributors*

**⭐ Star this repo if you find it beneficial!**

**🔄 Share with others to spread the knowledge**

</div>

---

## 📚 Hadith About Knowledge

<div align="center">

*"Whoever follows a path in pursuit of knowledge, Allah will make easy for them a path to Paradise."*

**— Prophet Muhammad ﷺ (Sahih Muslim)**

</div>

