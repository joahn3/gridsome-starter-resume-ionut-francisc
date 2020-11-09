module.exports = {
  siteName: 'Ionut Francisc resume',
  siteDescription: '',
  siteUrl: 'https://ionut-francisc.wesecureweb.dev',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ''
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}