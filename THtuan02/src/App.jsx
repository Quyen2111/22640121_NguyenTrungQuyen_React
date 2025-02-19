import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[name,SetName] = useState('')
  const[result,SetResult] = useState('')

  function handelChangeName(e){
    SetName(e.target.value)
  }
  function handelChangeClick(){
    SetResult('hello:'+name)
  }


  return (
    <>
    <div>
      <h1>Bai 1</h1>
      <input type="text" onChange={handelChangeName} placeholder='Nhap ten' />
      <br />
      <button onClick={handelChangeClick}>Click</button>
      <br />
      <span>{result}</span>
    </div>
      
    </>
  )
}

export default App
