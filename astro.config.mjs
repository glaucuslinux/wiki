import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'glaucus',
      description: 'A simple and lightweight Linux® distribution based on musl libc and toybox',
      favicon: '/src/assets/glaucus-logo.svg',
      logo: {
        src: '/src/assets/glaucus-logo.svg',
      },
      social: {
        codeberg: 'https://codeberg.org/glaucuslinux/glaucus',
        discord: 'https://discord.gg/nDKNmNc',
        github: 'https://github.com/glaucuslinux/glaucus',
        gitlab: 'https://gitlab.com/glaucuslinux/glaucus',
        reddit: 'https://www.reddit.com/r/glaucus',
        telegram: 'https://t.me/glaucuslinux',
        twitter: 'https://twitter.com/glaucuslinux',
        youtube: 'https://www.youtube.com/@glaucuslinux',
      },
      editLink: {
        baseUrl: 'https://github.com/glaucuslinux/wiki/tree/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Bootstrap",
          link: "/bootstrap",
        },
        {
          label: "cerata",
          collapsed: true,
          autogenerate: { directory: "cerata" },
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
          label: "Naming Convention",
          link: "/naming-convention",
        },
        {
          label: "Package Management",
          link: "/package-management",
        },
        {
          label: "RFCs",
          collapsed: true,
          autogenerate: { directory: "RFCs" },
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
          label: "TODO",
          link: "/todo",
        },
      ],
    }),
  ],
});
