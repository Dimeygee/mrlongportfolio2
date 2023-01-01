

import { useEffect } from "react"
import { tl } from "../../utils";


export const HeaderBgOverlay = () => {

    useEffect(() => {
        tl.to(".overlay_1", { 
            duration: 1,
            xPercent: -105,
            ease: "expo.out", ease: "expo.out",

          });
        
          tl.to(".overlay_2", { 
            duration: 1,
            xPercent: 105,
            ease: "expo.out", ease: "expo.out",
          }, "<");
    },[])

    return(
        <>
            <div className="overlay_1 absolute h-[30%] w-[100%] bg-[#0083FF] z-10"></div>
            <div className="overlay_2 absolute h-[70%] bottom-0 w-[100%] bg-[#3EE2C4] z-10"></div>
        </>
    )

}