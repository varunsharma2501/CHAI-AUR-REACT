import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function checkTimes(){
//   console.log("checkTimes called as many times we made some change");
// }
function App() {
  
  /*1.This will give error since useStates are to be executed in the same order in which they are written in all renders so we cant apply conditionals or for loops which will change the numnber and order of calls
  if(true){
    useState();
  }
  useState();
  useState();
  */

  
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
//  const [counter, setCounter] = useState(checkTimes());
//  const [counter, setCounter] = useState(5)
 
//  better way to initialize so that initialized state isnt called again is

// we could have changed multiple parameters
// const[state,setState]=useState({count:4,color:"blue"});
// const count=state.count;
// const color=state.color;
// const addValueTheme=()=>{
//   setState({count:count-1,color:"blue"});
//   console.log(counter);
// }

const [counter, setCounter] = useState(()=>{
  console.log("initialized")
  return 5;
})


  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    console.log(counter);
  }

  const addValueby3=()=>{
    if(counter<20){
      for(let i=0;i<3;i++){
        setCounter(prevCounter=>prevCounter+1);
      }
    }
    console.log(counter);
  }

  const reduceValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    console.log(counter);
  }
  const reduceValueby3=()=>{
    if(counter>0){
      for(let i=0;i<3;i++){
        setCounter(prevCounter=>prevCounter-1);
      }
    }
    console.log(counter);
  }
  return (
    <>
     <h1>Counter By Varun</h1>
      <p>Counter value :{counter}</p>
      <button onClick={addValue}>Add value</button>
      <button onClick={addValueby3}>Add value by 3</button>
      <br />
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
      <button onClick={reduceValueby3}>Reduce Value by 3</button>
      <br />
      <br />

      <div>Understanding the react hook-useEffect</div>
    </>
  )
}

export default App
