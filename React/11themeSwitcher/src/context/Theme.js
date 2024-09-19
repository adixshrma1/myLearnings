import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () =>{
    return useContext(ThemeContext);
}