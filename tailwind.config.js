module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "12rem",
        "2xl": "18rem",
      },
    },
    letterSpacing: {
      custom: "0.3em",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        Primary: {
          DesaturatedRed: "hsl(0, 36%, 70%)",
          SoftRed: "hsl(0, 93%, 68%)",
        },
        Neutral: {
          DarkGrayishRed: "hsl(0, 6%, 24%)",
        },
        gradients: {
          lightPinkFrom: "hsl(0, 0%, 100%)",
          lightPinkTo: "hsl(0, 100%, 98%)",
          darkPinkFrom: "hsl(0, 80%, 86%)",
          darkPinkTo: "hsl(0, 74%, 74%)",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/img/bg-pattern-desktop.svg')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 25px 25px rgba(0, 0, 0, 0.25)',
            '0 25px 25px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
  },
  plugins: [],
};
