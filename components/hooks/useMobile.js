
import { useState , useLayoutEffect, useEffect} from "react";


const getIsMobile = () => window.innerWidth <= 541

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState();


    useLayoutEffect(() => {
        setIsMobile(getIsMobile())
    }, []);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }


        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, [])
    
    return isMobile;
}