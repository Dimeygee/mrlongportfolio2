import { MenuNav } from "./menunav"
import { Footer } from "./footer"
import MobileMenu from "./mobilemenu"
import { useContext } from "react"
import { MenuContext } from "./context/menucontext"


export default function MenuNav__Footer ({children}){

    const { theme,  open , setOpen } = useContext(MenuContext) 

    const handleClick = () => {
        if(open) setOpen(!open)
    }


    return(
        <>
            <MobileMenu  />
            <div className={`${open && "blur-sm"} transition duration-[0.1s] delay-[0.1s] w-[93%] md:max-w-[1250px] mx-auto`} onClick={handleClick}>
            <MenuNav theme={theme} />
            {children}
            <Footer theme={theme} />
            </div>
        </>
    )
    
}