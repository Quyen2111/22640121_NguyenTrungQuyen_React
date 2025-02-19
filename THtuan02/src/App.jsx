import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Bai 1
  const[name,SetName] = useState('')
  const[result,SetResult] = useState('')

  function handelChangeName(e){
    SetName(e.target.value)
  }
  function handelChangeClick(){
    SetResult('hello:'+name)
  }

  // Bai 2
  const[A,SetA] = useState('')
  const[B,SetB] = useState('')
  const[result1,SetResult1] = useState('')
  function handelChangeA(e){
    SetA(e.target.value)
  }
  function handelChangeB(e){
    SetB(e.target.value)
  }
  function handelChangeClickBai2(){
    SetResult1((parseInt(A)+parseInt(B)))
  }

  return (
    <>
    <div>
      <h1>Bai 1</h1>
      <input type="text" onChange={handelChangeName} placeholder='Nhap ten' />
      <br />
      <br />
      <button onClick={handelChangeClick}>Click</button>
      <br />
      <span>{result}</span>
    </div>

    <div>
      <h1>Bai 2</h1>
      <input type="text" onChange={handelChangeA} placeholder='Nhap so A' />
      <input type="text" onChange={handelChangeB} placeholder='Nhap so B' />
      <br />
      <button onClick={handelChangeClickBai2}>Click</button>
      <br />
      <span>{result1}</span>
    </div>
      
    </>
  )
}

export default App
