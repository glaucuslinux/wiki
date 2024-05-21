import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'glaucus',
			description: 'A simple and lightweight Linux® distribution based on musl libc and toybox',
			favicon: '/src/assets/glaucus-logo.svg',
			logo: {
        src: './src/assets/glaucus-logo.svg',
      },
			social: {
				discord: 'https://discord.gg/nDKNmNc',
				reddit: 'https://www.reddit.com/r/glaucus',
				telegram: 'https://t.me/glaucuslinux',
				twitter: 'https://twitter.com/glaucuslinux',
				youtube: 'https://www.youtube.com/@glaucuslinux',
			},
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
          label: "TODO",
          link: "/todo",
        },
      ],
		}),
	],
});
