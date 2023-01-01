import Link from "next/link"
import {useContext} from "react"
import { MenuContext } from "./context/menucontext"
import { MouseContext } from "./context/mousecontext"

export const NavLink = ({ text, to, active, isFooter }) => {

    const { cursorChangeHandler } = useContext(MouseContext)

    const { theme } = useContext(MenuContext)


    const isDark = theme === 'dark' ? true : false 

    const lightStyle = {
        color: (active && !isDark) ? "#2F80ED" : isFooter ? "#A0AEC0" :  "#1A202C",
        fontWeight: (active && !isDark) ? 700 : 500
    }

    const darkStyle = {
        color: (active && isDark) ? "#F7FAFC" :  "#A0AEC0",
        fontWeight: (active && isDark)  ? 700 : 500
    }

    const before = (active && !isDark) ? "active" : (active && isDark) ? "dark_active" : '' 

    const linkDisplay = isDark ? (
        <Link 
            href={`${to}`} 
            style={darkStyle}
            className={`navlink link ${before} font-outfit inline-block text-base tracking-[-0.355556px]`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            >
                <span className="hover:text-[#F7FAFC] transition duration-[0.5s]">
                    {text}  
                </span>
        </Link>
    ) : (
        <Link 
            href={`${to}`} 
            style={lightStyle}
            className={`navlink link ${before} font-outfit inline-block text-base tracking-[-0.355556px]`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            >
                <span className="hover:text-[#2F80ED] transition duration-[0.8s]">
                    {text}  
                </span>
        </Link>
    ) 
 
    return linkDisplay
}

