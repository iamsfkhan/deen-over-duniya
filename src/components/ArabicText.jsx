import React from 'react';

/**
 * ArabicText Component
 * Displays Arabic text with proper RTL direction and styling
 * 
 * @param {Object} props
 * @param {string} props.children - The Arabic text to display
 * @param {boolean} props.large - Whether to use large text styling
 * @param {string} props.className - Additional CSS classes
 */
export default function ArabicText({ children, large = false, className = '' }) {
  const baseClass = large ? 'arabic-text-large' : 'arabic-text';
  
  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}

/**
 * HadithBox Component
 * Displays a hadith with Arabic text, translation, and reference
 * 
 * @param {Object} props
 * @param {string} props.arabic - Arabic text of the hadith
 * @param {string} props.translation - English translation
 * @param {string} props.reference - Source reference (e.g., "Sahih Bukhari 1234")
 */
export function HadithBox({ arabic, translation, reference }) {
  return (
    <div className="hadith-box">
      {arabic && (
        <div className="hadith-arabic">
          {arabic}
        </div>
      )}
      {translation && (
        <div className="hadith-translation">
          {translation}
        </div>
      )}
      {reference && (
        <div className="hadith-reference">
          — {reference}
        </div>
      )}
    </div>
  );
}

/**
 * Bismillah Component
 * Displays the Bismillah in Arabic
 */
export function Bismillah() {
  return (
    <div className="bismillah">
      بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
    </div>
  );
}

/**
 * CategoryBadge Component
 * Displays a category badge/tag
 * 
 * @param {Object} props
 * @param {string} props.children - Badge text
 */
export function CategoryBadge({ children }) {
  return (
    <span className="category-badge">
      {children}
    </span>
  );
}

