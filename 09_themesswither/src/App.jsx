import { useState } from 'react'
import {ThemeProvider} from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/Theme/ThemeBtn'
import Card from './components/Card/Card'
function App() {
 
    const [themeMode,setThemeMode] = useState("light")

    const darktheme = () =>{
      setThemeMode("dark")
    }

    const lighttheme = () =>{
      setThemeMode("light")
    }


    // actual change in theme with the use effect hook

    useEffect(() => {
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
    },[themeMode])
  return (
   <ThemeProvider value={{themeMode,darktheme,lighttheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
     </ThemeProvider>
  )
}

export default App
