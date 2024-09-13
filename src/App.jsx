import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let ButtonData =["AC","DEL","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
  const onButtonClicks = (buttonText) => {
    if(buttonText === "AC"){
     setCalValue("");
    } else if(buttonText==="="){
      const result = eval(calValue);
      setCalValue(result);
    }
      else if(buttonText==="DEL"){
        setCalValue(calValue.toString().slice(0,-1));
      }
    else{
      const newDisplayvalue= calValue + buttonText;
      setCalValue(newDisplayvalue);
    }
  }

  let [calValue, setCalValue] = useState("");
    return (

   <div className={style.calculator}>
   <Display displayCalValue ={calValue}/>
   <ButtonsContainer buttonData = {ButtonData} onButtonClick={onButtonClicks}/>
   </div>

  )
}

export default App
