import { createSlice,nanoid } from "@reduxjs/toolkit";

// the initial state of our store
const initialState={
    todos:[
        {id:1,text:"hello world"}
    ]
}

// slice is a bigger version of reducer where reducers are the ones to provide the functionality 
// reducers comprise of properties and functions
export const todoSlice=createSlice({
name:'todo',
initialState,
reducers:{
    // at every call it will have 2 things state and action 
    // state: the values stored in current situtations
    // actions :the values which are usable for making changes to the state
    addTodo:(state,action)=>{
        const todo={
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },
    updateTodo:(state,action)=>{
        state.todos=state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
    }

}    
})

// this is exported so that the functionalities can be used individually in the components
export const {addTodo,updateTodo,removeTodo}=todoSlice.actions
// this is exported so that the reducers are being imported by the store which will allow only these reducers to make changes
export default todoSlice.reducer