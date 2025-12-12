import React from 'react';

/**
 * DailyWisdom Component
 * Displays a featured daily hadith or wisdom quote
 * Can be used on the homepage or as a widget
 */
export default function DailyWisdom({ title = "Daily Wisdom", arabic, translation, source }) {
  return (
    <div className="card" style={{
      padding: '2rem',
      margin: '2rem 0',
      border: '1px solid rgba(46, 125, 50, 0.15)'
    }}>
      <h3 style={{
        color: 'var(--ifm-color-primary)',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        {title}
      </h3>
      
      {arabic && (
        <div style={{
          fontFamily: 'Amiri, serif',
          fontSize: '1.6em',
          lineHeight: '2',
          direction: 'rtl',
          textAlign: 'center',
          color: 'var(--ifm-color-primary-dark)',
          marginBottom: '1.5rem',
          fontWeight: '400'
        }}>
          {arabic}
        </div>
      )}
      
      {translation && (
        <div style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          textAlign: 'center',
          color: 'var(--ifm-font-color-base)',
          fontStyle: 'italic',
          marginBottom: '1rem'
        }}>
          "{translation}"
        </div>
      )}
      
      {source && (
        <div style={{
          textAlign: 'center',
          color: 'var(--ifm-color-primary)',
          fontWeight: '600',
          fontSize: '0.95em'
        }}>
          — {source}
        </div>
      )}
    </div>
  );
}

/**
 * QuickLinks Component
 * Displays quick navigation links to main categories
 */
export function QuickLinks() {
  const categories = [
    {
      title: 'Hadiths',
      emoji: '📚',
      description: 'Authentic sayings of Prophet Muhammad ﷺ',
      link: '/docs/hadiths/sahih-bukhari'
    },
    {
      title: 'Stories of Sahaba',
      emoji: '🌟',
      description: 'Inspiring lives of the Companions',
      link: '/docs/sahaba-stories/abu-bakr-as-siddiq'
    },
    {
      title: 'Sunnats',
      emoji: '🕌',
      description: 'Daily practices of the Prophet ﷺ',
      link: '/docs/sunnats/daily-sunnats'
    },
    {
      title: 'Duas',
      emoji: '🤲',
      description: 'Supplications for all occasions',
      link: '/docs/duas/morning-evening'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
      gap: '1.5rem',
      margin: '2rem 0'
    }}>
      {categories.map((category, index) => (
        <a
          key={index}
          href={category.link}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div className="card" style={{
            height: '100%',
            textAlign: 'center',
            padding: '2rem 1.5rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {category.emoji}
            </div>
            <h3 style={{
              color: 'var(--ifm-color-primary)',
              marginBottom: '0.5rem'
            }}>
              {category.title}
            </h3>
            <p style={{
              color: 'var(--ifm-font-color-secondary)',
              fontSize: '0.95rem'
            }}>
              {category.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

