module.exports = {
  entry: './develop/index',
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {}
    }
  ],
  <%_ if (useSass) { -%>
  configureWebpack: {
    resolve: {
      extensions: ['.scss']
    }
  }
  <%_ } -%>
}
