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
                'card-primary': '0 12px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)',
                'card-secondary': '0 4px 10px rgba(0,0,0,0.03), 0 0 2px rgba(0,0,0,0.02)',
                'pill': '0 2px 4px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)',
                'search': '0 2px 6px rgba(0,0,0,0.04), inset 0 1px 2px rgba(0,0,0,0.02)',
                'avatar-pill': '0 2px 8px rgba(0,0,0,0.08)',
                'active-red': '0 6px 20px rgba(244,63,94,0.25)',
                'button-elevated': '0 4px 12px rgba(0,0,0,0.08)',
            },
            colors: {
                'border-subtle': 'rgba(0,0,0,0.03)',
            }
        },
    },
    plugins: [],
}
