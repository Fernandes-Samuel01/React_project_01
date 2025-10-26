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

    // // So looking at this we may think that the counter is increemented 5 times as it is coded but in reality all the 5 lines of code are doing the same one job that is increementing the counter by 1 so it is a bunch that does only one work and it is increemented by only one 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // // So to fix this, when we want to increement it by 5 times we make use of arrow function because setCounter takes a callBack so we give it a callBack as previous value of counter to increement it by 5, so in this every time it increement the previous value of counter by 5  
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
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
