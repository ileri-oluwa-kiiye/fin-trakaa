import image from "../img/donation.png"
import styles from "./donation.module.css"
import { Link } from "react-router-dom"
import thanks from "../img/thankyou.png"

const Thankyou = () =>{
    return(
        <div className="controlwidth">
            <div className={styles.thanks}>
            <div className={styles.flex}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.main}>
                    <div className={styles.thanks}>
                        <h1>Thank you!</h1>


                        <h2>Payment received</h2>
                        <p>The Fin-traka team duly appreciate your kind gesture</p>
                    
                        <div className={styles.imagetwo}>
                            <img src={thanks} alt="" />
                        </div>
                        <div className={styles.button}>
                            <button><Link to="/home" style={{color:'inherit', textDecoration: 'none'}}>Go back to home page</Link></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Thankyou