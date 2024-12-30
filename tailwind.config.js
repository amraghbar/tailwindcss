/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        '2md': '960px',
      },
      colors: {
        primary: '#7E3AF2',
        secondaryText: '#6B7280', // Fixed typo: 'secandaryText' to 'secondaryText'
        mainText: '#111928',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
