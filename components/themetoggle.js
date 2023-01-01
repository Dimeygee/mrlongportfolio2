

import { Moon, Sun } from "./icons/icons"
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext"
import { MenuContext } from "./context/menucontext"



export const ThemeToggle = () => {

    
    const { cursorChangeHandler  } = useContext(MouseContext)
    const { theme, changeTheme  } = useContext(MenuContext)

    const handleClick = () => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                changeTheme("dark")
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                changeTheme("light")
            }
    
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                changeTheme("light")
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                changeTheme("dark")
            }
        }
        
    }


    return (
        <div className="fixed bottom-[80px] right-[20px] md:right-[150px] z-[100] rounded-default border-2 w-[66px] md:order-first order-2 h-[66px] flex items-center justify-center dark:border-[#F7FAFC] border-mrlongblue dark:border-opacity-10 border-opacity-10"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
        onClick={handleClick}>
            {theme === 'dark' ? <Sun /> : <Moon /> }
        </div>
    )

}