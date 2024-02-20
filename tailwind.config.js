/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
    },
    extend: {
      fontWeight: {
        masterbold: "700",
        w400: "400",
        w500: "500",
      },
      borderRadius: {
        navradius: "100px",
        btnradius: "16px",
        tileradius: "24px",
      },
      padding: {
        btnpadding: "12px 20px 12px 20px",
        navpadding: "16px 32px 16px 32px",
        navspacing: "30px",
      },
      fontSize: {
        footerfont: "14px",
        navfontsize: "16px",
        primary: "30px",
        secondary: "60px",
        f20: "20px",
        f24: "24px",
        f48: "48px",
        f90: "90px",
      },
    },
  },
  plugins: [],
}
