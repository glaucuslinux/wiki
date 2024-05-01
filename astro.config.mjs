import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'glaucus Wiki',
			logo: {
        src: './src/assets/glaucus-logo.svg',
      },
			description: 'A simple and lightweight Linux® distribution based on musl libc and toybox',
			social: {
				discord: 'https://discord.gg/nDKNmNc',
				reddit: 'https://www.reddit.com/r/glaucus',
				telegram: 'https://t.me/glaucuslinux',
				twitter: 'https://twitter.com/glaucuslinux',
				youtube: 'https://www.youtube.com/@glaucuslinux',
			},
			favicon: '/favicon.ico',
		}),
	],
});
