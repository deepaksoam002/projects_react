  import { createContext, useContext } from "react";

  export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) =>{}
})



  // hook for using todocontext 
  export const UseTodoes = () => {
    return useContext (TodoContext)
  }

  // todocontext provider  

  export const TodoContextProvider = TodoContext.Provider