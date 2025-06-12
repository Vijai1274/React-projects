export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // or Roboto, Inter, etc.
      },
    },
    
  },
  plugins: [],
}