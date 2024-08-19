/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FF7979",
        "custom-green": "#38CC8B",
        "custom-purple": "#5E54A4",
        "custom-black": "#3D3B48",
      },
      width: {
        "form-w-desk": "540px",
        "input-w-desk": "460px",
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
        "md-custom": "839px",
      },
    },
  },
  plugins: [],
};
