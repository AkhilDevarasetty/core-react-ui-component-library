// Changed from .js to .cjs for compatibility with "type": "module"
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
