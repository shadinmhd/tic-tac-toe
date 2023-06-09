import React, { useState } from 'react'
import '../App.css'

function Game(prop) {
    const [val, setVal] = useState([
        {key : 1, label : " "},
        {key : 2, label : " "},
        {key : 3, label : " "},
        {key : 4, label : " "},
        {key : 5, label : " "},
        {key : 6, label : " "},
        {key : 7, label : " "},
        {key : 8, label : " "},
        {key : 9, label : " "}
      ])
      const [input, setInput] = useState("X")
    
      function checkWinner(){
        if(prop.play){
          if(val[0].label === val[1].label && val[1].label === val[2].label && val[2].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[3].label === val[4].label && val[4].label === val[5].label && val[5].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[6].label === val[7].label && val[7].label === val[8].label && val[8].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[0].label === val[3].label && val[3].label === val[6].label && val[6].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[1].label === val[4].label && val[4].label === val[7].label && val[7].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[2].label === val[5].label && val[5].label === val[8].label && val[8].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[0].label === val[4].label && val[4].label === val[8].label && val[8].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
          else if(val[2].label === val[4].label && val[4].label === val[6].label && val[6].label != " "){
            console.log("i think")
            prop.setplay(false)
          }
        }
      }
    
      function click(key){
        let temp = [...val]
        if(temp[key-1].label === " ") {
          temp[key-1].label = input
          input === "X" ? setInput("O") : setInput("X")
        }
        setVal(temp)
        checkWinner()
      }
      return (<>
        <div id='container' >
          {val.map((e) => {
            return <button disabled={prop.play? false : true} key={e.key} onClick={() => click(e.key)} className='btn'>{e.label}</button>
          })}
        </div>
      </>
      )
}

export default Game