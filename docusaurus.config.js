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
          href: 'https://toxmod.xyz/discord'
        },
        {
          label: 'Status',
          position: 'left',
          href: 'https://toxmod.instatus.com'
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
              href: 'https://toxmod.xyz/discord',
            },
            {
              label: 'Terms of Service',
              href: 'https://toxmod.xyz/terms',
            },
            {
              label: 'Privacy Policy',
              href: 'https://toxmod.xyz/privacy',
            }
          ],
        },
      ],
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Toxic Dev`
    },

    // Extra settings
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'https://toxmod.xyz/images/ToxModLogo.gif',
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
