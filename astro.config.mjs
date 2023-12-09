import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'glaucus Wiki',
			description: 'A simple and lightweight Linux® distribution based on musl libc and toybox',
			social: {
				github: 'https://github.com/glaucuslinux/glaucus',
				twitter: 'https://twitter.com/glaucuslinux',
				youtube: 'https://www.youtube.com/@glaucuslinux',
				discord: 'https://discord.gg/nDKNmNc',
			},
			favicon: '/favicon.ico',
			sidebar: [
				{ label: 'Naming Convention', link: '/naming_convention/' },
			],
		}),
	],
});
