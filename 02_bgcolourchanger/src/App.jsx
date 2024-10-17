import { useState } from 'react'

function App() {
 const [color,setcolor] = useState('brown');
  return (
    <div className='w-full h-screen '
        style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 '>
        <div className='flex flex-wrap justify-center bg-white p-2 gap-2 rounded-full'>
           <button onClick={()=>{setcolor('red')}}
            className="bg-red-500 hover:bg-red-600 text-black py-2 px-3 rounded-full shadow-lg ">Red</button>
           <button onClick={()=>{setcolor('blue')}}
            className="bg-blue-500 hover:bg-blue-600 text-black py-2 px-3 rounded-full shadow-lg">Blue</button>
           <button onClick={()=>{setcolor('green')}}
            className="bg-green-500 hover:bg-green-600 text-black py-2 px-3 rounded-full shadow-lg">Green</button>
           <button onClick={()=>{setcolor('gray')}}
            className="bg-gray-500 hover:bg-gray-600 text-black py-2 px-3 rounded-full shadow-lg">Gray</button>
           <button onClick={()=>{setcolor('yellow')}}
            className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-3 rounded-full shadow-lg ">yellow</button>
           <button onClick={()=>{setcolor('orange')}}
            className="bg-orange-300 hover:bg-orange-600 text-black py-2 px-3 rounded-full shadow-lg">white</button>
        </div>
      </div>
    </div>
  )
}

export default App
