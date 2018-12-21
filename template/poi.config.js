module.exports = {
  entry: './develop/index',
  <%_ if (useSass) { -%>
  configureWebpack: {
    resolve: {
      extensions: ['.scss']
    }
  }
  <%_ } -%>
}
