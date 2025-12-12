import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DailyWisdom, { QuickLinks } from '@site/src/components/DailyWisdom';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.bismillah}>
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              marginRight: '1rem',
              marginBottom: '1rem'
            }}>
            Start Learning 📖
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/hadiths/sahih-bukhari"
            style={{
              marginBottom: '1rem'
            }}>
            Explore Hadiths 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Authentic Content',
      icon: '✅',
      description: 'All content sourced from authentic Islamic texts including Sahih Bukhari, Sahih Muslim, and reliable historical accounts.'
    },
    {
      title: 'Easy to Navigate',
      icon: '🧭',
      description: 'Well-organized categories and powerful search functionality make it easy to find what you need.'
    },
    {
      title: 'Regular Updates',
      icon: '🔄',
      description: 'Continuously adding new Hadiths, stories, Sunnats, and Duas to keep content fresh and comprehensive.'
    },
    {
      title: 'Open Source',
      icon: '💚',
      description: 'Community-driven project where everyone can contribute and help spread beneficial Islamic knowledge.'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Why Deen Over Duniya?
        </h2>
        <p className={styles.sectionSubtitle}>
          A modern platform designed to help young Muslims strengthen their faith
        </p>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={`card ${styles.featureCard}`}>
              <div className={styles.categoryIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.categoryTitle}>
                {feature.title}
              </h3>
              <p className={styles.categoryDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DailyWisdomSection() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--ifm-background-surface-color)'
    }}>
      <div className="container">
        <DailyWisdom
          title="Hadith of the Day"
          arabic="قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»"
          translation="The Messenger of Allah ﷺ said: Actions are judged by intentions, and everyone will get what they intended."
          source="Sahih Bukhari 1"
        />
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className={styles.quickLinksSection}>
      <div className="container">
        <h2 className={styles.quickLinksTitle}>
          Explore Content
        </h2>
        <QuickLinks />
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <h2 className={styles.ctaTitle}>
          Join Our Mission
        </h2>
        <p className={styles.ctaDescription}>
          Help us spread authentic Islamic knowledge. Contribute content, report issues, or share with others.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/contributing">
            Start Contributing 🤝
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn More 📚
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Deen Over Duniya - Strengthening Iman through authentic Islamic knowledge, Hadiths, Stories of Sahaba, Sunnats, and Duas">
      <HomepageHeader />
      <main>
        <DailyWisdomSection />
        <QuickLinksSection />
        <FeaturesSection />
        <CallToAction />
      </main>
    </Layout>
  );
}

