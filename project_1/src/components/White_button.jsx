import "../Css/Button_css.css"

function White_button({Colorset,TextColor,Second_Transition}){
    function Handle_onclick(){
        document.body.style.backgroundColor = "white";
        Colorset("black");
        document.body.style.transition = "1s";
        TextColor("white");
        Second_Transition("2s");
    }

    return(
        <>
        <button className="White_button" onClick={Handle_onclick}></button>
        </>
    );
}

export default White_button;