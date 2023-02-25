import styles from "./smallerdashboard.module.css"
import style from "./connect.module.css"
import help from "../../img/help.png"



const Connect = () => {
    return(
        <div className={style.cover}>
            <div className={style.connect}>
                <div className={style.image}>
                    <img src={help} alt="" />
                </div>
                <div className={style.text}>
                    <h2>Need help?</h2>
                    <p>
                        Do you need help with your accounting and explanation of financial terms? Connect with consultant.
                    </p>
                    <button className={styles.secondary}>Connect</button>
                </div>
            </div>
        </div>
    )
}



export default Connect