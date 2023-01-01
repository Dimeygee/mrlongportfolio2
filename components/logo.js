
import { Symblosvg , DarkSymblosvg} from "./icons/icons"
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext"
import { MenuContext } from "./context/menucontext"
import Link from "next/link"
import {motion} from "framer-motion"


export const Logo = ({isDark}) => {

    const {  cursorChangeHandler  } = useContext(MouseContext)


    return(
        <Link href="/" className="flex items-center gap-[8px]"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity }}
             >
               {!isDark && <Symblosvg  />}
               {isDark && <DarkSymblosvg  />}
            </motion.div>
            <span className="text-mrlongblue font-bold text-lg tracking-[-0.355556px] dark:text-white font-syne">mrlong</span>
        </Link>
    )

}