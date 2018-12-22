<%_ if (useSass) { -%>
import { css } from 'docz-plugin-css'
<%_ } -%>
export default {
  base: '/<%= name %>/',
  title: '<%= name %>',
  description: '<%= description %>',
  dest: 'website',
  typescript: true,
  // src: './doc',
  protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
  themeConfig: {
    mode: 'light'
  },
  hashRouter: true,
  <%_ if (useSass) { -%>
  plugins: [
    css({
      preprocessor: 'sass'
    })
  ],
  <%_ } -%>
  codeSandbox: false
}
