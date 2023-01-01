


import { useState, createContext, useLayoutEffect } from "react"

export const MenuContext = createContext()

export default function MenuContextProvider ({children})  {

  
    const [open, setOpen] = useState(false)
    const [ theme, changeTheme ] = useState("")
   
    useLayoutEffect(() => {
      if (localStorage.getItem("theme") === "dark"  ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        changeTheme("dark")
      } else {
        document.documentElement.classList.remove("dark")
        changeTheme("light")
      }
    },[])

 

    return(
        <MenuContext.Provider value={{ open, setOpen, theme, changeTheme }}>
            {children}
        </MenuContext.Provider>
    )

}

