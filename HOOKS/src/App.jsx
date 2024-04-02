import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [resource, setResource] = useState("posts")
  console.log("render")

  // this useEffect will be triggered only when the resource is changed
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => console.log(json))
    console.log("Onmount")
  },[resource])
  return (
    <>
    <div>
    <button onClick={()=>{setResource("posts")}}>Posts</button>
    <button onClick={()=>{setResource("users")}}>Users</button>
    <button onClick={()=>{setResource("comments")}}>Comments</button>
    <br />
    <h1>{resource}</h1>
    </div>
    </>
  )
}

export default App
