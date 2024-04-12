import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "../context";
import { TodoForm, TodoItem } from "./components";


function App() {
  const [todos, setTodos] = useState([]);
  // spread operator
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  // takes id to track the required todo and a todo object to replace previous todo
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)));
  }
  // takes id as argument and then remove from todo array using filter
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  // again we traverse the whole array of todos and for the required id we will just change the property completed
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  /**Empty Dependency Array: The empty dependency array ([]) passed as the second argument to useEffect indicates that this effect should only run once, when the component mounts. This is important because you only want to fetch the todos from localStorage when the component is initially rendered, not on subsequent re-renders. */
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
          <TodoForm/>
          </div>
          
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

/*In React, when you render a list of elements using .map(), React requires a unique key prop for each item in the list. The key prop helps React identify which items have changed, are added, or are removed. This is crucial for React's reconciliation algorithm to efficiently update the user interface.

Yes, that's correct! When you delete an object from the todos array, React will re-render the component containing the map() function. React performs a process called reconciliation to determine what changes need to be made to the DOM in response to state or props changes.*/
export default App;
