/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            boxShadow: {
                'card-primary': '0 2px 4px rgba(0,0,0,0.06), 0 14px 30px rgba(0,0,0,0.12)',
                'card-secondary': '0 1px 2px rgba(0,0,0,0.04), 0 8px 18px rgba(0,0,0,0.08)',
                'pill': 'inset 0 1px 2px rgba(0,0,0,0.08)',
                'search': 'inset 0 1px 2px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.05)',
                'avatar-pill': '0 2px 8px rgba(0,0,0,0.08)',
                'active-red': '0 6px 20px rgba(244,63,94,0.25)',
                'button-elevated': '0 2px 6px rgba(0,0,0,0.08)',
            },
            colors: {
                'border-subtle': 'rgba(0,0,0,0.03)',
            }
        },
    },
    plugins: [],
}
