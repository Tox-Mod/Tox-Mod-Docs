module.exports = {
  title: 'Tox Mod',
  tagline: 'Documentation for the Discord Bot with a little bit of Attitude!.',
  url: 'https://help.toxmod.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/584C6B70-CA2C-48DE-B737-107F58FDC322.png',
  organizationName: 'Tox-Mod', // Usually your GitHub org/user name.
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
        src: 'img/E795CF4F-43F3-4FBE-A183-6B85EBA4C20E.gif',
      },
      items: [
        {
          label: 'Beta',
          position: 'left',
          href: 'https://beta.toxmod.xyz'
        },
        {
          to: 'blog/',
          activeBaseRegex: 'blog/$',
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBaseRegex: 'docs/$',
          label: 'Docs',
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
              label: 'Website',
              href: 'https://toxmod.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Tox-Mod',
            },
            {
              label: 'Dashboard',
              href: 'https://toxmod.xyz/dashboard',
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
              label: 'Terms',
              href: 'https://toxmod.xyz/terms',
            },
            {
              label: 'Privacy',
              href: 'https://toxmod.xyz/privacy',
            }
          ],
        },
      ],
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://toxicdev.me">Toxic Dev</a>`
    },

    // Extra settings
    colorMode: {
      defaultMode: 'dark',
      switchConfig: {
        darkIcon: "🌛",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },
    announcementBar: {
      id: 'notice',
      content:
        '🎉 If you like Tox Mod, give us a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tox-Mod/ToxModBot">GitHub</a>',
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
        blog: {
          showReadingTime: true,
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
