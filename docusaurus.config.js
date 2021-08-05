module.exports = {
  title: 'Tox Mod',
  tagline: 'The Discord Bot with a little bit of Attitude!.',
  url: 'https://docs.toxmod.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/CordX-Logo.png',
  organizationName: 'TheRealToxicDev', // Usually your GitHub org/user name.
  projectName: 'Tox-Mod-Docs', // Usually your repo name.
  customFields: {
    metaDescription: 'Documentation for the Discord Bot with a little bit of Attitude.',
  },
  themeConfig: {
    // Vanilla settings
    navbar: {
      title: 'Tox Mod Docs',
      logo: {
        alt: 'Tox Mod Logo',
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
      { name: 'og:title', content: 'Tox Mod Documentation' },
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
