import { css } from 'docz-plugin-css'
export default {
  base: '/<%= name %>/',
  title: '/<%= name %>/',
  description: '<%= description %>',
  dest: 'website',
  typescript: true,
  // src: './doc',
  protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
  themeConfig: {
    mode: 'light'
  },
  hashRouter: true,
  codeSandbox: false,
  plugins: [
    css({
      preprocessor: 'sass'
    })
  ]
}
