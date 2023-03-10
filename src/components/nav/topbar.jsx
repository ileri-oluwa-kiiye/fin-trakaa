import arrowdown from "../../img/arrowdown.png"
import one from "../../img/one.png"
import three from "../../img/three.png"
import two from "../../img/two.png"
import four from "../../img/four.png"
import styles from "./topbar.module.css"
import React from "react"

const Topbar = () => {

    const ref = React.useRef(null);

    const handleClick = () => {
        if(ref.current.style.display !== "block"){
            ref.current.style.display = "block"
        }else{
            ref.current.style.display = "none"
        }
    }


    return (
        <div className={styles.topbar}>
            <div>
                {/* The Add New Button */}
                <button onClick={handleClick} className="ki" style={{color:"white"}}>Add new <img src={arrowdown} alt="" /></button>
            </div>
            <div className={styles.toggle} ref={ref}>
                <ul>
                    <li>Data Entry</li>
                    <li>Add money in</li>
                    <li>Add money Out</li>
                </ul>
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

export default Topbar