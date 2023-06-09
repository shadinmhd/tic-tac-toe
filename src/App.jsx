import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Taskbar from './components/Taskbar'

function App() {
  const [play, setplay] = useState(true)
  const [input, setInput] = useState("X")
  return( <>
  { play? (<>
    <h1>Tic Tac Toe</h1>
    <Game play={play} setplay={setplay} input={input} setInput={setInput} />
  </>
  ) : (
    <h1>Some one Won</h1>
  )}
  </>)
}

export default App
