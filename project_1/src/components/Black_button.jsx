import "../Css/Button_css.css"

function Black_button({Colorset,TextColor,Second_Transition}){

    function Handle_onclick(){
        document.body.style.transition = "1s";
        document.body.style.backgroundColor="black";
        Colorset("white");
        TextColor("Black");
        Second_Transition("2s");
    }
    return(
        <>
        <button className="Black_button" onClick={Handle_onclick}></button>
        </>
    );
}

export default Black_button;