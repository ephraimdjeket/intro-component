/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "js/**.js"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop": "url('../images/bg-intro-desktop.png')",
        "mobile": "url('../images/bg-intro-mobile.png')",
      },
      colors: {
        "custom-pink": "#FF7979",
        "custom-green": "#38CC8B",
        "custom-purple": "#5E54A4",
        "custom-black": "#3D3B48",
      },
      width: {
        "form-w-desk": "540px",
        "form-w-mob": "327px",
      },
      height: {
        "form-h-mob": "482px",
        "form-h-desk": "524px",
      },
      fontFamily: {
        "Poppins": "Poppins, sans-serif",
      },
      screens: {
        "md-custom": "1231px",
      },
    },
  },
  plugins: [],
};
