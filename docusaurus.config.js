// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Deen Over Duniya",
  tagline: "Strengthening Iman, One Step at a Time",
  favicon: "img/logo.png",

  // Future flags for better compatibility
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://deen-over-duniya.com",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization - can be extended for Arabic later
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/yourusername/deen-over-duniya/tree/main/",
        },
        blog: false, // Disabled blog for now
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

  markdown: {
    mermaid: true,
  },

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    // SEO metadata
    metadata: [
      {
        name: "keywords",
        content:
          "Islam, Hadith, Quran, Sahaba, Sunnah, Dua, Islamic knowledge, Iman",
      },
      {
        name: "description",
        content:
          "Deen Over Duniya - A comprehensive Islamic resource featuring authentic Hadiths, inspiring stories of the Sahaba, essential Sunnats, and beautiful Duas to strengthen your Iman.",
      },
    ],

    // Social card for sharing
    image: "img/social-card.png",

    navbar: {
      title: "Deen Over Duniya",
    //   logo: {
    //     alt: "Deen Over Duniya Logo",
    //     src: "img/logo.png",
    //   },
      hideOnScroll: false,
      items: [
        {
          to: "/docs/intro",
          label: "Knowledge",
          position: "left",
        },
        {
          to: "/docs/hadiths/sahih-bukhari",
          label: "Hadiths",
          position: "left",
        },
        {
          to: "/docs/sahaba-stories/abu-bakr-as-siddiq",
          label: "Sahaba",
          position: "left",
        },
        {
          to: "/docs/duas/morning-evening",
          label: "Duas",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://github.com/yourusername/deen-over-duniya",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "light",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Hadiths",
              to: "/docs/hadiths/sahih-bukhari",
            },
            {
              label: "Stories of Sahaba",
              to: "/docs/sahaba-stories/abu-bakr-as-siddiq",
            },
            {
              label: "Sunnats",
              to: "/docs/sunnats/daily-sunnats",
            },
            {
              label: "Duas",
              to: "/docs/duas/morning-evening",
            },
          ],
        },
        {
          title: "Learn",
          items: [
            {
              label: "Islamic Knowledge",
              to: "/docs/islamic-knowledge/pillars-of-islam",
            },
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Contribute",
              to: "/docs/contributing",
            },
            {
              label: "GitHub",
              href: "https://github.com/yourusername/deen-over-duniya",
            },
          ],
        },
      ],
      copyright: `Built with ❤️ by Safwan Khan for the Ummah. May Allah accept this effort. © ${new Date().getFullYear()}`,
    },

    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 100,
        docsDir: "./docs",
        indexPages: true,
        docsRouteBasePath: "docs",
      },
    ],
  ],
};

module.exports = config;

