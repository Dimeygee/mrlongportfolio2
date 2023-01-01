

import { Logo } from "../components/logo" 
import {NavLink} from "./navlink"
import { Button } from "./button"
import { useContext } from "react"
import { MenuContext } from "./context/menucontext"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"
import { Close } from "./icons/icons"


export default function MobileMenu () {

    const context = useContext(MenuContext)

    const { open, setOpen, theme } = context

    const isDark = theme === "dark" ? true : false

    const pathname = usePathname()

    const linksArray = [
        { name: "Home", active: pathname === "/", to: "/" },
        { name: "About", active: pathname === "/about", to: "/about" },
        { name: "Dribble", active: pathname === "#dribble", to: "https://dribbble.com/mrlong007" },
        { name: "Behance", active: pathname === "#behance", to: "https://www.behance.net/mrlong007" },
    ]

    const variants = {
        hidden:  {x: '-100%'} ,
        visible : open ?  { x: 0 } : { x: "-100%"  }
    }

    const container = {
        hidden: { opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerDirection: -1
            }
        }
      }
      
      const item = {
        hidden: { opacity: 0 , x: "-100px"},
        show: (custom) => ({
             opacity: 1, x: 0, transition: { delay: custom * 0.2 }
        })
      }

      const buttonItem = {
        hidden: { opacity: 0 , x: "-100px"},
        show: (custom) => ({
             opacity: 1, x: 0, transition: { delay: custom * 0.2 }
        })
      }
      
    
    return(
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: .5 }}
        className="fixed bg-white dark:bg-[#2D3748] top-0 left-0 w-[100%] md:w-[50%] h-[100vh] z-[200] px-[25px] py-[32px]">
            <div className="flex justify-between md:flex-row-reverse">
                <div className="w-[56px] h-[56px]"></div>
                { open && <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center"><Logo isDark={isDark}  /></motion.div> }
                <span className="rounded-default border-2 w-[56px] md:order-first order-2 h-[56px] flex items-center justify-center dark:border-[#F7FAFC] dark:border-opacity-10 border-mrlongblue border-opacity-10" onClick={() => setOpen(!open)}>
                    <Close isDark={isDark} />
                </span>
            </div>
            <div className="mt-[107px]">
                { open && <motion.ul 
                    initial="hidden"
                    animate="show"
                    variants={container}
                    transition={{ duration: 0.1 }}
                    className='flex items-center gap-[40px] flex-col md:mt-0 mt-[42px]'>
                    {linksArray.map((link, index) => {
                            return (
                                <motion.li 
                                variants={item}
                                custom={index + 1}
                                onClick={() => setOpen(!open)}
                                key={index + 1}>
                                    <NavLink open={open} setOpen={setOpen} text={link.name} to={link.to} active={link.active}  />
                                </motion.li>
                            )
                        })}
                    <motion.div
                    variants={buttonItem}
                    custom={5}
                    className="flex gap-[24px] flex-col  w-[250px] mx-auto">
                        <Button text="View resume" bgcolor="#2F80ED" color="white" px="40px" py="15px" fontWeight="700" ifDark resume={true} />
                        <Button text="Send me a mail" color="#2F80ED" px="32px" py="15px" fontWeight="700" mail={true}  />
                    </motion.div>
                </motion.ul>  }
            </div>
        </motion.div>
    )

}