import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: "https://wiki.glaucuslinux.org/",
  integrations: [
    starlight({
      title: 'glaucus',
      description: 'A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox',
      favicon: '/src/assets/glaucus-logo.svg',
      logo: {
        src: '/src/assets/glaucus-logo.svg',
      },
      social: {
        codeberg: 'https://codeberg.org/glaucuslinux/glaucus',
        discord: 'https://discord.gg/nDKNmNc',
        github: 'https://github.com/glaucuslinux/glaucus',
        reddit: 'https://reddit.com/r/glaucus',
        telegram: 'https://t.me/glaucuslinux',
        x-twitter: 'https://x.com/glaucuslinux',
        youtube: 'https://youtube.com/@glaucuslinux',
      },
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
          label: "Nomenclature",
          link: "/nomenclature",
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
