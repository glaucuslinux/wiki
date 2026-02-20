import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: "https://wiki.glaucuslinux.org/",
  integrations: [
    starlight({
      title: 'glaucus',
      description: 'An opinionated Linux® distribution based on musl libc and toybox',
      favicon: '/src/assets/glaucus-logo.svg',
      logo: {
        src: '/src/assets/glaucus-logo.svg',
      },
      social: [
        { icon: 'codeberg', label: 'Codeberg', href: 'https://codeberg.org/glaucuslinux/glaucus' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/glaucuslinux/glaucus' },
        { icon: 'reddit', label: 'Reddit', href: 'https://reddit.com/r/glaucus' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/glaucuslinux' },
        { icon: 'twitter', label: 'X', href: 'https://x.com/glaucuslinux' },
        { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@glaucuslinux' },
      ],
      editLink: {
        baseUrl: 'https://github.com/glaucuslinux/wiki/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Bootstrap",
          link: "/bootstrap",
        },
        {
          label: "Build Notes",
          collapsed: true,
          autogenerate: { directory: "build-notes" },
        },
        {
          label: "Filesystem",
          link: "/filesystem",
        },
        {
          label: "Flags",
          link: "/flags",
        },
        {
          label: "History",
          link: "/history",
        },
        {
          label: "Install",
          link: "/install",
        },
        {
          label: "Media Coverage",
          link: "/online/media-coverage",
        },
        {
          label: "Package Management",
          link: "/package-management",
        },
        {
          label: "RFCs",
          collapsed: true,
          autogenerate: { directory: "rfcs" },
        },
        {
          label: "Security",
          link: "/security",
        },
        {
          label: "Software",
          link: "/software",
        },
        {
          label: "Upstream Contributions",
          link: "/online/upstream-contributions",
        },
      ],
    }),
  ],
});
