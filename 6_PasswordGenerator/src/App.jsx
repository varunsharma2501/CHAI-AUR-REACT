import { useState,useCallback, useEffect,useRef } from 'react'
// import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  // useRef hook
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$^&*()";

    for(let i=0;i<length;i++){
      let ind=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(ind)
      setPassword(pass)
    }
  } ,[length,numberAllowed,charAllowed,setPassword]);

  const copyPasswordToClip=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden px-5 py-2'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='Password' readOnly ref={passwordRef} / >
          <button onClick={copyPasswordToClip} className='ou tline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-4 px-5'>

            <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={numberAllowed}
                      id="numberInput"
                      onChange={() => {
                          setNumberAllowed((prev) => !prev);
                      }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="characterInput"
                      onChange={() => {
                          setCharAllowed((prev) => !prev )
                      }}
                  />
                  <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
    </div>   
    </>
  )
}

export default App
