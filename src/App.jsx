import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState([
    {key : 1, label : " ", active : false},
    {key : 2, label : " ", active : false},
    {key : 3, label : " ", active : false},
    {key : 4, label : " ", active : false},
    {key : 5, label : " ", active : false},
    {key : 6, label : " ", active : false},
    {key : 7, label : " ", active : false},
    {key : 8, label : " ", active : false},
    {key : 9, label : " ", active : false}
  ])
  const [play, setPlay] = useState(true)
  const [box, setBox] = useState(false)
  const number = 9
  const [input, setInput] = useState("X")

  function checkWinner(){
    if(play){
      if(val[0].label === val[1].label && val[1].label === val[2].label && val[2].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[3].label === val[4].label && val[4].label === val[5].label && val[5].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[6].label === val[7].label && val[7].label === val[8].label && val[8].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[0].label === val[3].label && val[3].label === val[6].label && val[6].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[1].label === val[4].label && val[4].label === val[7].label && val[7].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[2].label === val[5].label && val[5].label === val[8].label && val[8].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[0].label === val[4].label && val[4].label === val[8].label && val[8].label != " "){
        console.log("i think")
        setPlay(false)
      }
      else if(val[2].label === val[4].label && val[4].label === val[6].label && val[6].label != " "){
        console.log("i think")
        setPlay(false)
      }
    }
  }

  function click(key){
    let temp = [...val]
    temp[key-1].label === " " ? temp[key-1].label = input : null
    input === "X" ? setInput("O") : setInput("X")
    setVal(temp)
    checkWinner()
  }
  return (<>
    <h1>Tic Tac Toe</h1>
    {play ? (
    <div id='container' >
      {val.map((e) => {
        return <button disabled={play? false : true} key={e.key} onClick={() => click(e.key)} className='btn'>{e.label}</button>
      })}
    </div>
    ):(
      <div>
        <h1>Some one Won</h1>
      </div>
    )
    }
  </>
  )
}

export default App
