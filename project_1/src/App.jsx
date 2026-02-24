import { useState } from "react";
import Black_button from "./components/Black_button.jsx";
import White_button from "./components/White_button.jsx";
import About_me_full from "./components/About_me_full.jsx";
import Project_full from "./components/Project_full.jsx";
import Skill_full from "./components/Skill_full.jsx";
import Contact_full from "./components/Contact_full.jsx";
import "./Css/About_me_full.css"
import "./Css/Project_full.css"
import "./App.css";
import "./Css/Skill_full.css"
import "./Css/Contact_full.css"

function App() {

  const [BgColor,Colorset] = useState("black");
  const [Tcolor,TextColor] = useState("white");
  const [First_Transition,Second_Transition] = useState("0s");
  const [About_me,Set_About_me] = useState(true);
  const [Project,Set_Project] = useState(false);
  const [Skill,Set_Skill] = useState(false);
  const [Contact,Set_Contact] = useState(false);


  function About_me_function(){
    Set_About_me(true);
    Set_Project(false);
    Set_Skill(false);
    Set_Contact(false);
  }
  function project_function(){
    Set_About_me(false);
    Set_Project(true);
    Set_Skill(false);
    Set_Contact(false);
  }
  function skill_function(){
    Set_About_me(false);
    Set_Project(false);
    Set_Skill(true);
    Set_Contact(false);
  }
  function contact_function(){
    Set_About_me(false);
    Set_Project(false);
    Set_Skill(false);
    Set_Contact(true);
  }

  return (
    <>
      <div className="Top_div" style={{ backgroundColor: BgColor,color:Tcolor,transition: First_Transition}}>
        <div className="Button_div">
          <Black_button Colorset={Colorset} TextColor={TextColor} Second_Transition={Second_Transition}/>
          <White_button Colorset={Colorset} TextColor={TextColor} Second_Transition={Second_Transition}/>
        </div>
          <button onClick={About_me_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>About Me</h3></div></button>
          <button onClick={project_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Project</h3></div></button>
          <button onClick={skill_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Skill</h3></div></button>
          <button onClick={contact_function} className="Over_all_button" style={{backgroundColor: Tcolor, transition: First_Transition, color: BgColor}}><div><h3>Contact</h3></div></button>
      </div>

      {About_me && <div style={{backgroundColor: BgColor, transition: First_Transition }} className="About_me_Full_div">
        <About_me_full></About_me_full>
      </div>}
      {Project && <div style={{backgroundColor: BgColor, transition: First_Transition}} className="Project_full_div">
        <Project_full></Project_full>
      </div>}
      {Skill && <div style={{backgroundColor: BgColor, transition: First_Transition}} className="Skill_full_div">
        <Skill_full></Skill_full>
      </div>}
      {Contact && <div style={{backgroundColor: BgColor, transition: First_Transition}} className="Contact_full_div">
        <Contact_full></Contact_full>
      </div>}
    </>
  );
}

export default App;