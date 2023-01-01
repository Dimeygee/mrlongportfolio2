
import { motion } from "framer-motion"

export const Motion = ({children}) => {


    return (
        <motion.div
            initial={{ y: 100, opacity: 0}}
            whileInView={{ y:0, opacity: 1}}
            transition={{ ease: "easeOut", duration: .5 }}
        >
            {children}
        </motion.div>
    )

}