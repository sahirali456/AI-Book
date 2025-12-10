import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AI Humanoid Robotics",
  tagline: "Documentation for the AI Humanoid Robot Project",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // Aapki portfolio site ko base URL bana diya
  url: "https://sahirali.vercel.app", 
  baseUrl: "/",

  // GitHub User info update kar di
  organizationName: "sahirali456", 
  projectName: "AI-Book", 

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "AI Humanoid Robot",
      logo: {
        alt: "AI book",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // --- ADDED: Portfolio Link in Navbar ---
        {
          href: "https://sahirali.vercel.app",
          label: "Portfolio",
          position: "left",
        },
        // --- ADDED: GitHub Link in Navbar ---
        {
          href: "https://github.com/sahirali456",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/content/introduction",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            // --- ADDED: LinkedIn Link ---
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sahir-ali-65380a33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            // --- ADDED: GitHub Link ---
            {
              label: "GitHub Profile",
              href: "https://github.com/sahirali456",
            },
          ],
        },
        {
          title: "Contact & More",
          items: [
            // --- ADDED: Email Link ---
            {
              label: "Email Me",
              href: "mailto:syedsahirali639@gmail.com",
            },
            // --- ADDED: Portfolio Website ---
            {
              label: "My Website",
              href: "https://sahirali.vercel.app",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Humanoid Robotics. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
