import { useState } from "react";
import Black_button from "./components/Black_button.jsx";
import White_button from "./components/White_button.jsx";
import Top_div_texts from "./components/Top_div_texts.jsx";
import About_me_full from "./components/About_me_full.jsx";
import "./App.css";

function App() {
  const [BgColor,Colorset] = useState("black");
  const [Tcolor,TextColor] = useState("white");
  const [First_Transition,Second_Transition] = useState("0s");

  return (
    <>
      <div className="Top_div" style={{ backgroundColor: BgColor,color:Tcolor,transition: First_Transition}}>
        <div className="Button_div">
          <Black_button Colorset={Colorset} TextColor={TextColor} Second_Transition={Second_Transition}/>
          <White_button Colorset={Colorset} TextColor={TextColor} Second_Transition={Second_Transition}/>
        </div>
          <Top_div_texts Tcolor={Tcolor} First_Transition={First_Transition} BgColor={BgColor}/>
      </div>
      
      <div className="Full_div" style={{backgroundColor: BgColor, transition: First_Transition}}>
        <About_me_full Colorset={Colorset} Second_Transition={Second_Transition}/>
      </div>
    </>
  );
}

export default App;
