import { useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
  const [play, setplay] = useState(true)
  return( <>
  { play? (
    <Game play={play} setplay={setplay} />
  ) : (
    <h1>Some one Won</h1>
  )}
  </>)
}

export default App
