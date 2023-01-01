

import { Logo } from "./logo"
import { NavLink } from "./navlink"
import {Contact} from "../components/contact"
import {Motion} from "./motion"
import { usePathname } from "next/navigation"
import { MenuContext } from "./context/menucontext"
import { useContext } from "react"

export const Footer = () => {

    const pathname = usePathname()


    const linksArray = [
        { name: "Home", active: pathname === "/", to: "/" },
        { name: "About", active: pathname === "/about", to: "/about" },
        { name: "Dribble", active: pathname === "#dribble", to: "#dribble" },
        { name: "Behance", active: pathname === "#behance", to: "#behance" },
    ]

    const { open, setOpen, theme } = useContext(MenuContext)

    const darkTheme = theme === 'dark' ? true : false

    return(
        <footer className="mt-[50px]">
            <section>
                <Contact  />
            </section>
            <Motion>
                <div className="flex justify-between items-center md:border-y-[1px] md:border-[#E2E8F0] py-[32px] md:flex-row flex-col mt-[50px] md:mt-o">
                    <Logo isDark={darkTheme} />
                    <ul className='footer flex items-center gap-[40px] md:flex-row flex-col md:mt-0 mt-[42px]'>
                        { linksArray.map((link, index) => {
                                return (
                                    <li key={index + 1}>
                                        <NavLink open={open} setOpen={setOpen} text={link.name} to={link.to} active={link.active}  isFooter={true} />
                                    </li>
                                ) 
                           
                        }) } 
                    </ul>
                    <p className="text-[#A0AEC0] text-base font-outfit md:mt-0 md:mb-0 mt-[79px] mb-[10px]">© mrlong 2022 Freelancer</p>
                </div>
            </Motion>
            <p className="pt-[32px] pb-[48px] text-center text-[#A0AEC0] text-base">Made with love ❤️ and coffee ☕️</p>
        </footer>
    )

}