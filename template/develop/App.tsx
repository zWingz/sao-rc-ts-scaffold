import React from 'react'
import { hot } from 'react-hot-loader'
import './style'

declare const module: any

const App = hot(module)(() => {
  return <div/>
})

export default App
