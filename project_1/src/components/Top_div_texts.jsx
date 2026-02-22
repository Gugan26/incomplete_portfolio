import { useState } from "react"
import "../Css/About_me_full.css"
import "../Css/Top_div_texts.css"
import About_me from "./About_me_full"
import Project from "./Project_full"
import Skill from "./Skill_full"
import Contact from "./Contact_full"

function Top_div_texts({Tcolor,First_Transition,BgColor}){

    const [About_me,Set_About_me] = useState(false);
    const [project_tab,Set_project_tab] = useState(false);
    const [skill_tab,Set_skill_tab] = useState(false);

    function About_me_function(){
        Set_About_me(true);
    }
    function project_function(){
        Set_project_tab(true);
        Set_skill_tab(false);
    }
    function skill_function(){
        Set_skill_tab(true);
        Set_project_tab(false);
    }
    function contact_function(){
    }

    return(
        <>
        <button onClick={About_me_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>About Me</h3></div></button>
        <div className="Full_div">{About_me && <About_me></About_me>}</div>
        <button onClick={project_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Project</h3></div></button>{project_tab && <Project></Project>}
        <button onClick={skill_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Skill</h3></div></button>{skill_tab && <Skill></Skill>}
        <button onClick={contact_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Contact</h3></div></button>
        </>
    )
}

export default Top_div_texts;