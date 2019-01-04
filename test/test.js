import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock({ generator })
  t.snapshot(stream.fileList, 'Generated files')
})

test('test useSass', async t => {
  const stream = await sao.mock({ generator }, {
    useSass: true,
    name: 'test project',
    description: 'test desc'
  })
  const { readFile, fileList, api } = stream
  t.true(fileList.filter(each => each === 'postcss.config.js').length === 1)
  // console.log(fileList);
  let pkg = await readFile('package.json')
  pkg = JSON.parse(pkg)
  const {devDependencies} = pkg
  t.true('node-sass' in devDependencies)
  t.true('rollup-plugin-postcss' in devDependencies)
  t.true('docz-plugin-css' in devDependencies)
  t.true('autoprefixer' in devDependencies)
  const doczrc = await readFile('doczrc.js')
  t.snapshot(doczrc, 'doczrc with sass')
  const rollup = await readFile('rollup.config.js')
  t.snapshot(rollup, 'rollup with sass')
  const poi = await readFile('poi.config.js')
  t.snapshot(poi, 'poi with sass')
  // t.true()
})
