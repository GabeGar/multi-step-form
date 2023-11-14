import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindFormsPlugin from '@tailwindcss/forms';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                sideBarMobile: "url('/bg-sidebar-mobile.svg')",
                sideBarDesktop: "url('/bg-sidebar-desktop.svg')",
            },
            colors: {
                'primary-marine-blue':
                    'hsl(var(--Marine-blue) / <alpha-value>)',
                'primary-purplish-blue':
                    'hsl(var(--Purplish-blue) / <alpha-value>)',
                'primary-pastel-blue':
                    'hsl(var(--Pastel-blue) / <alpha-value>)',
                'primary-light-blue': 'hsl(var(--Light-blue) / <alpha-value>)',
                'primary-strawberry-red':
                    'hsl(var(--Strawberry-red) / <alpha-value>)',

                'neutral-cool-gray': 'hsl(var(--Cool-gray) / <alpha-value>)',
                'neutral-light-gray': 'hsl(var(--Light-gray) / <alpha-value>)',
                'neutral-magnolia': 'hsl(var(--Magnolia) / <alpha-value>)',
                'neutral-alabaster': 'hsl(var(--Alabaster) / <alpha-value>)',
                'neutral-white': 'hsl(var(--White) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                desktopGrid: '1fr 2.5fr',
            },
        },
    },
    plugins: [
        tailwindFormsPlugin({
            strategy: 'class',
        }),
    ],
} satisfies Config;
