
import { useEffect } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";



gsap.registerPlugin(ScrollTrigger);

export default function ProjectOverlay ({index})  {

    useEffect(() => {

        gsap.to(`.overlay1_${index}`, {  
            y: "-110%",
            scrollTrigger: {
                trigger: `.overlay1_${index}`,
                toggleActions: "restart pause none none",
                start: "top center"
            },
            delay:0.1
        })

        gsap.to(`.overlay2_${index}`, {
            y: "110%",
            scrollTrigger: {
                trigger: `.overlay1_${index}`,
                toggleActions: "restart pause none none",
                start: "top center"
            },
            delay:0.1
        }, "<")

    })


    return (
        <div className="projectoverlay absolute top-0 left-0 bottom-0 right-0 z-[20] overflow-hidden">
            <div
            className={`overlay1_${index} bg-[#61FADE] h-[50%]`}></div>
            <div
            className={`overlay2_${index} bg-[#2F80ED] h-[50%]`}></div>
        </div>
    )

}