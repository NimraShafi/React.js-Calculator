import style from "./Display.module.css";
const Display = ({displayCalValue}) =>{
    return    <input type="text" className={style.display} value={displayCalValue} readOnly/>
}
export default Display;