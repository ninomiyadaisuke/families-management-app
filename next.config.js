const path = require('path')
const withLinaria = require('next-linaria');

module.exports = withLinaria({
  reactStrictMode: true,
  distDir: '../.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  linaria:{
    cacheDirectory:'./.next/cache/.linaria-cache',
  }
})