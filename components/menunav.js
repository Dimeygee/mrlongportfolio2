
import { MenuSvg } from "./icons/icons"
import { NavLink } from "./navlink"
import { Logo } from "./logo"
import {useContext, useEffect} from "react"
import { MenuContext } from "./context/menucontext"
import { MouseContext } from "./context/mousecontext"
import { tl } from "../utils"
import { usePathname } from "next/navigation"



export const MenuNav = () => {

    const { open, setOpen, theme }  = useContext(MenuContext)
    const { cursorChangeHandler  } = useContext(MouseContext)

    const pathname = usePathname()
     

    useEffect(() => {
        tl.to(".menucontainer", { opacity: 1, y: 0 })
        tl.to(".btn_container", { opacity: 1, y: 0 })
    },[])


    const darkTheme = theme === 'dark' ? true : false

    const linksArray = [
        { name: "Home", active: pathname === "/", to: "/" },
        { name: "About", active: pathname === "/about", to: "/about" },
        { name: "Dribble", active: pathname === "#dribble", to: "https://dribbble.com/mrlong007" },
        { name: "Behance", active: pathname === "#behance", to: "https://www.behance.net/mrlong007" },
    ]

    

    return(
            <nav className="py-[22px] flex justify-between items-center">
                <div  className="grow md:grow-0  menucontainer opacity-0 translate-y-4 gap-[56px] flex justify-between">
                    <span className="rounded-default border-2 w-[56px] md:order-first order-2 h-[56px] flex items-center justify-center dark:border-[#F7FAFC] border-mrlongblue dark:border-opacity-10 border-opacity-10" 
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                        >
                        <MenuSvg isDark={darkTheme} />
                    </span>
                    <Logo isDark={darkTheme} />
                </div>
                <div className="hidden md:flex gap-[52px] items-center">
                    <ul className="flex gap-[52px] items-center">
                        {linksArray.map((link, index) => {
                            return (
                                <li key={index + 1}>
                                    <NavLink open={open} setOpen={setOpen} text={link.name} theme={theme} to={link.to} active={link.active} />
                                </li>
                            )
                        })}
                    </ul>
                    <span className="btn_container opacity-0 translate-y-4 inline-block">
                        <a href="https://drive.google.com/file/d/16fqDXfA6MLHMgaQ3JT7rMU9YUBUVcz4-/view?usp=sharing " target="__blank" download>
                            <button className={`border-[#2F80ED] border-solid font-[700] py-[15px] transition duration-[0.5s] border-opacity-10 rounded-[28px] hover:text-[#F7FAFC] hover:bg-[#2F80ED] dark:hover:bg-[#F7FAFC] dark:hover:text-[#1A202C] text-[#2F80ED] dark:text-[#F7FAFC] hover: text-base text-center font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent px-[36px] border-opacity-10 font-outfit`}
                                >View resume
                            </button>
                        </a>
                    </span>
                </div>
            </nav>
        
    )

}


