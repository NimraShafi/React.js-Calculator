import styles from "./Buttons.module.css";
const Buttons = ({buttondata,onButtonClick}) =>{
    return  <div>
{buttondata.map((items) =>(<button key={items} className={styles.button} onClick={() => onButtonClick(items)}>{items}</button>))}
    </div>
}
export default Buttons;
 