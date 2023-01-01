import { Button } from "./button"
import Image from 'next/image';
import webflow from "../public/assets/webflow.png"
import figma from "../public/assets/figma.png"
import { ArrowDown } from "./icons/icons";
import { useEffect, useContext } from "react";
import { HeaderBgOverlay } from "./gsap/headerbgoverlay";
import { tl } from "../utils";
import { MenuContext } from "./context/menucontext";
import { MouseContext } from "./context/mousecontext"
import {motion} from "framer-motion"


export const Header = () => {


    const {theme} = useContext(MenuContext)

    const { cursorChangeHandler  } =  useContext(MouseContext)

    useEffect(() => {
        tl.to('.p1', {opacity: 1, y: 0,}, "<")
        tl.to('.p2', {opacity: 1, y: 0, } )
        tl.to('.btn', {opacity: 1, y: 0, } )
    })

    const darkTheme = theme === 'dark' ? true : false

    return(
        <header className="flex relative md:flex-row flex-col">
            <div className="pt-[79px] md:w-[50%]">
                <article>
                    <p className="p1 font-bold tracking-[-1.44195px] font-syne text-[#1A202C] opacity-0 translate-y-4 text-[46px] md:text-[72.999px]  text-center md:text-left md:leading-[88px] leading-[53.2px] dark:text-[#A0AEC0]">
                        Digital Product <br />Designer <br />Crafting <br />&quot;<span className="text-mrlongblue dark:text-white">Magic</span>&quot;
                    </p>
                    <p className='p2 mt-[18px] mb-[34px] tracking-[-0.36px] text-[#2D3748] opacity-0 translate-y-4 text-md font-outfit text-center md:text-left font-normal leading-[25px] dark:text-[#CBD5E0]'>Do you have a billion-dollar idea and are looking for a product <br />designer to help bring it to life? If so, you would definitely need to <br />speak with me.</p>
                    <div className="btn flex gap-[24px] md:flex-row flex-col md:w-[100%] opacity-0 translate-y-4 w-[250px] mx-auto">
                            <Button text="View resume" bgcolor="#2F80ED" color="white" px="40px" py="15px" fontWeight="700" ifDark resume={true} />
                            <Button text="Send me a mail" color="#2F80ED" px="32px" py="15px" fontWeight="700" mail={true} />
                    </div>
                </article>
            </div>
            <div className="mrlong relative md:w-[50%] h-[526px] md:h-[796px] overflow-hidden">
                <HeaderBgOverlay />
                <div className="absolute rounded-[100%] right-[55px] md:right-[95px] p-[9px] w-[48.73px] h-[48.73px] md:w-[73.74px] md:h-[73.74px] top-[70px] shadow-[0px_36.8718px_23.5979px_rgba(103,117,141,0.12)] dark:bg-white">
                    <Image src={webflow} alt="webflow"  />
                </div>
                <div className="absolute rounded-[100%] p-[9px] w-[48.73px] dark:bg-white h-[48.73px] md:w-[73.74px] md:h-[73.74px] top-[70px] left-[30px] shadow-[0px_36.8718px_23.5979px_rgba(103,117,141,0.12)]">
                    <Image src={figma} alt="figma"  />
                </div>
            </div>
            <a href="#myprojects" className="block relative md:absolute mx-auto mt-[40px] md:mx-0 md:mt-0 w-[56px] h-[56px] border-opacity-10 border-2 border-mrlongblue flex justify-center items-center rounded-[100%] md:bottom-[10px] md:left-[50%] dark:border-opacity-10 dark:border-[#F7FAFC]"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}>
                <motion.div
                    animate={{ y: [ 10, 0 ,10 ] }}
                    transition={{ duration: 1, repeat:Infinity, repeatType: "reverse" }}
                >
                    <ArrowDown isDark={darkTheme} />
                </motion.div>
            </a>
        </header>
    )

}