import Loginform from "../components/sections/loginform"
import image from "../img/login.png"
import styles from "./donation.module.css"

const Donation = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.main}>
                    
                        <Loginform />
                
                </div>
            </div>
        </div>
    )
}

export default Donation