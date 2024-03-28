import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  /*
  so if we do update the value like this the value in UI will not get updated with changes in value so we will need to fetch element using document.getElement type selector and then update value everytime so here comes use of hooks
  
  let counter=15;
  const addValue=()=>{
    counter=counter+1;
    console.log(counter);
  }
  
  const reduceValue=()=>{
    counter=counter-1;
    console.log(counter);
  }
  */
 
//  so here we used hooks useState which will automatically update ui everywhere counter variable is used
// add functionality so that range remains from 0 to 20 only 
 const [counter, setCounter] = useState(5)
 
  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    console.log(counter);
  }

  const reduceValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    console.log(counter);
  }
  return (
    <>
     <h1>Counter By Varun</h1>
      <p>Counter value :{counter}</p>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
