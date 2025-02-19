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

  // Bai 3 : cong tru nhan chia
  const[result2,SetResult2] = useState('')
  const[operator,SetOperator] = useState('')

  function handelChangeradio(e){
    SetOperator(e.target.value)
  }
  function handelClickBai03() {
    const numA = parseFloat(A);
    const numB = parseFloat(B);

    if (isNaN(numA) || isNaN(numB)) {
      SetResult2("Please enter valid numbers");
      return;
    }

    let result;
    switch (operator) {
      case '+':
        result = numA + numB;
        break;
      case '-':
        result = numA - numB;
        break;
      case '*':
        result = numA * numB;
        break;
      case '/':
        if (numB === 0) {
          result = "Cannot divide by zero";
        } else {
          result = numA / numB;
        }
        break;
      default:
        result = "Please select an operator";
        break;
    }

    SetResult2(result);
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

    <div>
      <h1>Bai 3</h1>
      <input type="text" onChange={handelChangeA} placeholder='Nhap so A' />
      <input type="text" onChange={handelChangeB} placeholder='Nhap so B' />
      <br />
      <input type="radio" name="group" onChange={handelChangeradio} value='+'/> <span>+</span>
      <input type="radio" name="group" onChange={handelChangeradio} value='-'/> <span>-</span>
      <input type="radio" name="group" onChange={handelChangeradio} value='*'/> <span>*</span>
      <input type="radio" name="group" onChange={handelChangeradio} value='/'/> <span>/</span>
      <br />
      <br />
      <button onClick={handelClickBai03}>Click</button>
      <br />
      <span>{result2}</span>
    </div>
      
    </>
  )
}

export default App
