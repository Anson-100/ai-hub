/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // CONTROL PANEL STUFF
        "box-bg": "#3f3f46",
        "box-hover": "#e4e4e7",

        "text-blue": "#38bdf8",

        "text-nav": "#f4f4f5",
        icon: "#9ca3af",
        "icon-hover": "#d1d5db",

        "text-header": "#f3f4f6",
        "text-content": "#e5e7eb",
        "text-hover": "#fafafa",

        "text-supporting": "#d1d5db", // zinc-500 for supplementary text

        // TEXT COLORS
        "text-primary": "#18181b", // zinc-900 for main headings and body text
        "text-secondary": "#3f3f46", // zinc-700 for less important text

        //BG COLORS
        "bg-primary": "#fafafa", // neutral-50 (lightest)
        "bg-secondary": "#f5f5f5", // neutral-100
        "bg-supporting": "#f0f0f0", // neutral-200
        "bg-dark": "#71717a", // neutral-300

        // BORDER COLORS

        "border-primary": "#e5e5e5", // neutral-300
        "border-secondary": "#d4d4d4", // neutral-400
        "border-supporting": "#a3a3a3", // neutral-500

        borderGrayButton: "#D4D4D8", // zinc-400
        borderGraySection: "#A1A1AA", // zinc-500
        bgGrayButton: "#E4E4E7", // zinc-300
        bgGraySection: "#71717A", // zinc-600
        bgGray: "#d4d4d8",
        bgGrayNav: "#09090b", // zinc-600
        borderGrayNav: "#fafafa", // zinc-500

        gradientColorStops: {
          // Emerald Gradient
          emerald: {
            light: "#D1FAE5", // emerald-100
            DEFAULT: "#10B981", // emerald-500
            dark: "#065F46", // emerald-700
          },
          // Teal Gradient
          teal: {
            light: "#99F6E4", // teal-200
            DEFAULT: "#14B8A6", // teal-500
            dark: "#0F766E", // teal-700
          },
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: theme => ({
        "gradient-gray": "linear-gradient(rgb(75 85 99), rgb(31 41 55))",
        "gradient-gray-2": "linear-gradient(rgb(107 114 128), rgb(55 65 81))",
        "gradient-brand": "linear-gradient(to right, #3B82F6, #2dd4bf)",
        "gradient-brand-gray": "linear-gradient(to right, #9ca3af, #d1d5db)",
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        quest: ["Questrial", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "380px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1260px",
      xl: "1600px",
      se: { raw: "(max-width: 376px) and (max-height: 700px)" },
      "short-screen": { raw: "(max-height: 620px)" },
      "landscape-mobile": {
        raw: "(max-height: 440px) and (orientation: landscape)",
      },
      "se-mobile": {
        raw: "(max-height: 376px) and (orientation: landscape)",
      },
    },
  },
  plugins: [],
}
