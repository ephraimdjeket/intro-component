/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js, png}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop": "url('/public/images/bg-intro-desktop.png')",
        "mobile": "url('/public/images/bg-intro-mobile.png')",
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
        "form-h-mob": "452px",
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
