import label from "../../../img/label.png"
import styles from "./intop.module.css"
import one from "../../../img/one.png"
import two from "../../../img/two.png"
import three from "../../../img/three.png"
import four from "../../../img/four.png"

const Intop = () => {
    return (
        <div className={styles.topbar}>
            <div>
                {/* The Add New Button */}
                <div className={styles.label}>
                    <img src={label} alt="" /> 
                    <h3>Felicia</h3>
                </div>
            </div>
            <div className={styles.icons}>
                {/* The Icons For The Top Bar */}
                <ul>
                    <li><img src={one} alt="" title="search"/></li>
                    <li><img src={two} alt="" title="notifications"/></li>
                    <li><img src={three} alt="" title="settings"/></li>
                    <li><img src={four} alt="" title="my profile"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Intop