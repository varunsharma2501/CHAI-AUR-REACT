import { useState } from 'react'
import './App.css'
import Card from '/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind Css Tutorial</h1>
      <Card userName="Varun Sharma" imageLink="https://images.pexels.com/photos/20780453/pexels-photo-20780453/free-photo-of-a-close-up-of-a-pink-cherry-blossom-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Card userName="Akshansh Vaishnav" imageLink="https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </>
  )
}

export default App
