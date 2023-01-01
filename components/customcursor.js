
import styles from "../styles/cursor.module.css"
import useMousePosition from "./hooks/useMousePosition";
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext";
import { useEffect , useRef } from "react";
import gsap from "gsap";

const DotRing = () => {


    const { cursorType } = useContext(MouseContext);

    const { x, y } = useMousePosition();

    const ring = useRef()
    const dot = useRef()

    useEffect(()=> {
        gsap.to(ring.current, {
            css: {
                left:`${x}px`,
                top: `${y}px`,
                scale: cursorType ? "1" : "2",
            }
        })
        gsap.to(dot.current, {
            css: {
                left:`${x}px`,
                top: `${y}px`,
                scale: cursorType ? "1" : "2",
            }
        })
    },[x, y, cursorType])

    const style = {
        border: "2px solid #3EE2C4",
        width: cursorType ? "100px" : "22px",
        height: cursorType ? "100px" : "22px"

    }

    const dotstyle = {
        border: "2px solid #0083FF",
    }

    return (
        <div className="hidden md:block">
            <div
                ref={ring}
                style={style}
                className={`${styles.ring}`}
            ></div>
            <div
                ref={dot}
                className={`${styles.dot}`}
                style={dotstyle}
            ></div>
        </div>
    );
};

export default DotRing;