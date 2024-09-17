import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'ChitChat\'s Emoji Picker',

  tagline: 'An open-source emoji picker UI toolkit for Angular, designed to integrate effortlessly into any project, with full support for mobile and web.',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://ngx-chitchat.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ChitChat', // Usually your GitHub org/user name.
  projectName: 'ngx-emoji-picker', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',



  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KevinBelien/ngx-emoji-picker-docs/tree/master/',
        },
  
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'emoji, picker, emojipicker, emoji-picker, angular, chitchat, chat' },
      { name: 'author', content: 'Kevin Beliën' },
      { name: "google-site-verification", content: "RCXOMQj90jFIg1r3PijiMnUG4suFXyTeslm-nO3kHs0" }
      
    ],
    // Replace with your project's social card
    navbar: {
      title: 'ChitChat',
      logo: {
        alt: 'ChitChat Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },

        {
          type: 'search',
          position: 'right',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://github.com/KevinBelien/ngx-emoji-picker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ChitChat.`,
    },
    colorMode: {
      defaultMode: 'dark', // Set dark mode as default
      disableSwitch: false, // Allow users to toggle between dark and light mode
      respectPrefersColorScheme: true, // Disable respecting the system's color scheme
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
