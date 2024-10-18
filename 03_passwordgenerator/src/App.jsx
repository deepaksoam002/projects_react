import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  //useState hook
  const [length, setlength] = useState(8)
  const [numberallow, setnumber] = useState(false)
  const [charallow, setchar] = useState(false)
  const [password, setpassword] = useState('') 
  
  //useRef hook
  const passwordRef = useRef(null)
  // useCallback hook 
  // password generator 
  const passwordgenerator = useCallback(()=>{
    let pass =''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
 // if numberallow is true then concatenate number string to main string
 // if charallow is true then concatenate char string to main string
 // if both of them is true the both string concatenate to main string

    if(numberallow) str+='1234567890';
    if(charallow) str+='@$%&';
  
    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor((Math.random()*str.length)+1)
      pass+=str.charAt(charindex)
      console.log(pass)
    }

    setpassword(pass)

  },[length,numberallow,charallow,setpassword])

  const copytotheclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  },[password]) 

   useEffect(()=>{
    passwordgenerator()       
   },[length,numberallow,charallow,passwordgenerator])
  return (
    <>
     <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
         <input 
           type='text'
           value={password}
           placeholder='password'
           className="outline-none w-full py-1 px-3"
           readOnly
           ref={passwordRef}
         />
           <button 
             onClick={copytotheclipboard}
             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div  className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
             type='range'
             min={8}
             max={25}
             value={length}
             className='cursor-pointer'
             id = 'range'
             onChange={(e)=>{
                             setlength(e.target.value)
                            }}
          />
           <label htmlFor='range'>Lenght({length})</label>
        </div>
        <div  className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={numberallow}
              id='numberinput'
              onChange={()=>{
                            setnumber((prev)=>!prev)
                            }}
             />
          <label htmlFor='numberinput'>Number</label>
        </div>
        <div  className="flex items-center gap-x-1">
            <input
                type='checkbox'
                defaultChecked={charallow}
                id='charinput'
                onChange={()=>{
                                setchar((prev)=>!prev)
                              }}
            />
             <label htmlFor='charinput'>Charactor</label>
        </div>
      </div>
     </div>
     
    </>
  )
}

export default App  
