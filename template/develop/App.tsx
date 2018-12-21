import React from 'react'
import { hot } from 'react-hot-loader'
import {HelloWorld} from '../src'
declare const module: any

const App = hot(module)(() => {
  return <HelloWorld/>
})

export default App
