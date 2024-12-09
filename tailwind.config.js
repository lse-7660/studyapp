/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto-Bold'],
            },

            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                gray: {
                    1: '#f7f7f7',
                    2: '#f0f0f0',
                    3: '#e0e0e0',
                    7: '#707070',
                    10: '#252525',
                },
            },
        },
    },
    plugins: [],
};
