/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: "#00D67D",
        secondary: "#0A0A0A",
        background: "#0A0A0A",
        // Surface colors
        surface: "#1A1A1A",
        "surface-high": "#2A2A2A",
        // Text colors
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0A0A0",
        "text-muted": "#666666",
        // Semantic colors
        success: "#00D67D",
        warning: "#FFB800",
        error: "#FF4444",
        info: "#0095FF",
      },
      fontFamily: {
        "space-grotesk": ["SpaceGrotesk_400Regular"],
        "space-grotesk-medium": ["SpaceGrotesk_500Medium"],
        "space-grotesk-semibold": ["SpaceGrotesk_600SemiBold"],
        "space-grotesk-bold": ["SpaceGrotesk_700Bold"],
        inter: ["Inter_400Regular"],
        "inter-medium": ["Inter_500Medium"],
        "inter-semibold": ["Inter_600SemiBold"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
};
