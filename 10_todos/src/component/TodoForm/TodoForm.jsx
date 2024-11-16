import React from "react";
import { useState } from "react";
import { UseTodoes } from "../../Context/TodosContext";
function TodoForm() {
   const [todo, setTodo] = useState("")    
   const {addTodo} = UseTodoes()
    
   const add = (e) =>{
      e.preventDefault()
      if (!todo) return

      /* in add todo we passed the value and  unique id is already passed in the syntex , 
      if key and value is same the we can write 1 time like  todo : todo then write todo */
      
      addTodo({ todo, completed: false})
      setTodo("")
   }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}


export default TodoForm;

