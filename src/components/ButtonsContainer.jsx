import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({buttonData,onButtonClick}) =>{
    return  <div className={styles.buttonsContainer}>
        <Buttons buttondata = {buttonData} onButtonClick={onButtonClick}/>
  </div>
}
export default ButtonsContainer;