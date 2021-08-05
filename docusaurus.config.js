module.exports = {
  title: 'CordX',
  tagline: 'Documentation for the CordX Website, API and Discord Bot.',
  url: 'https://docs.cordx.lol',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/CordX-Logo.png',
  organizationName: 'TheRealToxicDev', // Usually your GitHub org/user name.
  projectName: 'docs.cordx.wtf', // Usually your repo name.
  customFields: {
    metaDescription: 'Documentation for the CordX Project.',
  },
  themeConfig: {
    // Vanilla settings
    navbar: {
      title: 'CordX Docs',
      logo: {
        alt: 'CordX Logo',
        src: 'img/CordX-Logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBaseRegex: 'docs/$',
          label: 'Getting Started',
          position: 'left',
        },
        {
          label: 'Discord',
          position: 'left',
          href: 'https://cordx.wtf/discord'
        },
        {
          label: 'Status',
          position: 'left',
          href: 'https://stats.uptimerobot.com/PJMqKc4RD4'
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Main Website',
              href: 'https://cordx.wtf',
            },
            {
              label: 'Upload Server',
              href: 'https://cdn.cordx.wtf',
            }
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Discord',
              href: 'https://cordx.wtf/discord',
            },
            {
              label: 'Terms of Service',
              href: 'https://cordx.wtf/terms',
            },
            {
              label: 'Privacy Policy',
              href: 'https://cordx.wtf/privacy',
            }
          ],
        },
      ],
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CordX`
    },

    // Extra settings
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'https://cordx.wtf/images/CordX-Logo.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:title', content: 'CordX Documentation' },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1932a73877.js',
      crossorigin: 'anonymous',
    },
  ],
};
