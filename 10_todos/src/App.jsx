import { useState, useEffect } from 'react'
import { TodoContextProvider } from './Context/TodosContext'
import TodoForm from './component/TodoForm/TodoForm'
import TodoItem from './component/TodoItem/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

  // in add todo we add new and prev. todos with a id...

  const addTodo = (todos) =>{
    setTodos((prev) => [{id: Date.now(), ...todos}, ...prev])
  }

  // in update todo we match the todo id for updating right todo..

  const updateTodo = (id, todos) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todos : prevTodo)))
  }

 // in deleteTodo we use filter(). we match all todos id with id if id is not match with todo id then that todos is not go in setTodo

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todos) => todos.id !== id ))
  }

  // in toggleComplete we match id if id is matched then we use spread operator and change the value of completed

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // Local storage ---------
    
  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))  

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
   
  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todos) => (
                          <div key={todos.id}
                            className='w-full'
                            >
                             <TodoItem todo={todos}/>  
                          </div>
                        ))}
                    </div>
                </div>
            </div>
     
    </TodoContextProvider>
  )
}

export default App
