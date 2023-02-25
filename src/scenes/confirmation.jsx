import line from "../img/Line.png"
import styles from "./signup.module.css"
import Confirm from "../components/sections/comfirm"
import image from "../img/confirm.png"
import style from "./donation.module.css"


const Confirmation = () => {
    return(
        <div className="controlwidth">
            <div className={style.flex}>
                <div className={style.image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.main}>
                    
                <div className={styles.main}>
                    <div className={styles.steps}>
                        <div>
                            <p>1</p>
                            <p>Sign up</p>
                        </div>
                        <div className={styles.line}>
                            <img src={line} alt="" />
                        </div>
                        <div>
                            <p>2</p>
                            <p>Confirmation</p>
                        </div>
                    </div>
                    <section>
                        <Confirm />
                    </section>
                </div>
                
                </div>
            </div>
        </div>
    )
}


export default Confirmation