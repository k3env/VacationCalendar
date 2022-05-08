module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    // extend: {
    //   // colors: {
    //   //   brand: "#84CC16",
    //   //   dark: "#27272A",
    //   //   mid: "#52525B",
    //   //   light: "#F5F5F5",
    //   // },
    // },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FCA311",
          secondary: "#0D9488",
          accent: "#FACC15",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#84cc16",
          warning: "#f97316",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  // corePlugins: {
  //   preflight: false,
  // },
};
