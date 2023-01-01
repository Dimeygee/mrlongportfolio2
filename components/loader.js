import { tl } from "../utils"
import { useEffect, useContext } from "react"
import { MenuContext } from "./context/menucontext"



export const Loader = () => {

    useEffect(() => {
        tl.to('.loader', { yPercent: -100, delay: 3})
    },[])


    return(
        <div className="loader fixed top-0 bottom-0 right-0 left-0 bg-[#FAFCFF] dark:bg-[#2D3748] z-20 flex items-center justify-center">
            <div className="preloader">
            <div className="lines">
                <div className="line line-1 bg-[#0083FF]"></div>
                <div className="line line-2 bg-[#3EE2C4]"></div>
                <div className="line line-3 bg-[#FCA2B1]"></div>
            </div>
            
            <div className="loading-text dark:text-[white] text-[#0083FF]">LOADING</div>
</div>
        </div>
    )

}