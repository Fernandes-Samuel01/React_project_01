import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 5;

  function increaseVal() {
    // if (counter >= 0 && counter < 20) {
    //   setCounter(counter + 1);
    // }

    setCounter(counter + 1);
  }

  function decreaseVal() {
    // if (counter > 0 && counter <= 20) {
    //   setCounter(counter - 1);
    // }
    
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Samuel Sanjeev Fernandes | React with Vite</h1>
      <h3>Counter value is : {counter}</h3>
      <button onClick={increaseVal} disabled={counter >= 20}>Increase</button>
      <button onClick={decreaseVal} disabled={counter <= 0}>Decrease</button>
    </>
  )
}

export default App
