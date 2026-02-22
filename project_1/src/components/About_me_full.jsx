import "../Css/About_me_full.css"
import { motion } from "framer-motion"

function About_me_full(Colorset){
    return(
        <>
        <div style={{backgroundColor: Colorset}} className="Full_div" >
            <motion.div className="Left_full_div"></motion.div>
            <motion.div className="Right_full_div"></motion.div>
        </div>
        </>
    );
}
export default About_me_full;