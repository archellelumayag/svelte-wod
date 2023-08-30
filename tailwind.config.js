import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	
	theme: {
		extend: {},
		screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { max: '767px' },
            // => @media (max-width: 767px) { ... }

            // sm: { max: '639px' },
            'sm': { max: '576px' },
            // => @media (max-width: 639px) { ... }
        },
	},
	plugins: [
		skeleton({
      themes: {
        // Register each theme within this array:
        preset: [ "skeleton" ] 
      }
    }),
    forms
	]
};
