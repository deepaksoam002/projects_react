import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darktheme: () =>{},
    lighttheme:() =>{}
})
 
//theme provider----

export const ThemeProvider = ThemeContext.Provider

//custome hook for returning usecontext

export default function useTheme(){
    return useContext(ThemeContext)
}