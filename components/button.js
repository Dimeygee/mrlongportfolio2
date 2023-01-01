
import { MenuContext } from "./context/menucontext"
import { useContext } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./hooks/usetheme"


export const Button = ({ color, bgcolor, text, px, py, opacity, fontWeight, ifDark, ifSectionStyle, resume, mail, seemore }) => {

    
    const { theme } = useContext(MenuContext)
    

    const isDark = theme === 'dark' ? true : false

    const style = { 
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
        border: isDark ?  "2px solid rgb(247, 250, 252, 0.1)" : ""
    }

    const darkStyle = {
        border: "2px solid #F7FAFC",
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
    }

    const sectionDarkStyle = {
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
    }

    const ResumeBtn = isDark ? (<a
    style={darkStyle} 
    className="transition duration-[0.5s] border-opacity-10 rounded-[28px] bg-[#F7FAFC] hover:bg-[#1A202C] hover:text-[#F7FAFC] text-[#1A202C] text-center text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="../assets/OdebiyiRidwanResume.pdf" target="__blank">{text}</a>) : (
    <a style={style}  className="transition duration-[0.5s] border-opacity-10 bg-[#2F80ED] hover:bg-[#F7FAFC] text-[#fff] hover:text-[#2F80ED] rounded-[28px] text-center text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="../assets/OdebiyiRidwanResume.pdf" target="__blank">{text}</a>
    )

    const MailBtn = isDark ? (
        <a className="transition duration-[0.5s] border-opacity-10 rounded-[28px] text-center hover:bg-[#F7FAFC] hover:text-[#1A202C] text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="mailto:Odebiyiridwan@gmail.com" target="__blank" style={style}>{text}</a>
    ) : (
        <a className="transition duration-[0.5s] border-opacity-10 rounded-[28px] text-[#2F80ED] bg-[transparent] hover:bg-[#2F80ED]  hover:text-[#fff] text-center text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="mailto:Odebiyiridwan@gmail.com" target="__blank" style={style}>{text}</a>
    )

    const SeeMoreBtn = <a className="transition duration-[0.5s] border-opacity-10 rounded-[28px] hover:text-[#F7FAFC] hover:bg-[#2F80ED] dark:hover:bg-[#F7FAFC] dark:hover:text-[#1A202C] text-[#2F80ED] dark:text-[#F7FAFC] hover: text-base text-center font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="https://dribbble.com/mrlong007" target="__blank" style={style}>{text}</a>
    
    const NormalBtn = <button className={` ${opacity ? "work" : ""} transition duration-[0.5s] border-opacity-10 hover:bg-[#2F80ED] text-[#2F80ED] hover:text-[#F7FAFC] dark:text-[#F7FAFC] hover:text-[#F7FAFC] dark:hover:bg-[#F7FAFC] dark:hover:text-[#1A202C] border-[#2F80ED] dark:border-[#F7FAFC] rounded-[28px] text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`} style={sectionDarkStyle}>{text}</button>

    return(
        <>
            {resume ? ResumeBtn : mail ?  MailBtn : seemore ? SeeMoreBtn : NormalBtn}
        </>
    )

}