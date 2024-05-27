/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        seconMobile: "500px",
        tablet: "768px",
        desktop: "1024px",
        bigDesktop: "1315px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        Primary: "#5A5881",
        secondary: "#15134B",
        ClrA3AB: "#A3ABBD",
        Clr563B: "#563BFF",
        ClrFF70: "#FF7049",
        Clr20C9: "#20C997",
        Clr4E4E: "#4E4E4E",
        Clr3437: "#3734A9",
        ClrC7C7: "#C7C7D2",
        ClrF2F3: "#f2f3f9",
        ClrF6F8: "#F6F8Fa",
        ClrEBF2: "#EBF2FF",
        ClrFEFE: "#FEFEFE",
        ClrFFF3: "#FFF3F0",
        DarkSecondary: "#0F172A",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        colMain: "90px, 1fr",
      },
      boxShadow: {
        overviewCardShadow: "0px 20px 45px 0px #F0EDF6",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};

export default config;
