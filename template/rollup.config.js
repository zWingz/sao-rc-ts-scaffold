import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
<%_ if (useSass) { -%>
import postcss from 'rollup-plugin-postcss'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
<%_ } -%>
import pkg from './package.json'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    <%_ if (useSass) { -%>
    postcss({
      preprocessor: (content, id) => new Promise(res => {
        const result = sass.renderSync({ file: id })
        res({ code: result.css.toString() })
      }),
      plugins: [autoprefixer],
      minimize: {
        zindex: false
      },
      extensions: ['.scss', '.css']
    }),
    <%_ } -%>
    typescript(),
    resolve({
      extensions: ['.ts', '.tsx', '.json']
    }),
    commonjs()
  ]
}
