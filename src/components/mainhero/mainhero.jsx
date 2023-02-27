import styles from "./mainhero.module.css"
import { Link } from "react-router-dom"
import image from "../../img/hero.png"

const Mainhero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                <div className={styles.section}>
                    <div>
                        <h1>The easiest way for book keeping & Consultancy services</h1>
                        <p>
                            Join the winning platform to learn and record how to keep track of  your business
                             transactions and know how much money is coming in and out of your business.
                        </p>
                        <Link style={{color:"inherit", textDecoration:"none"}} to="/signup"><button className="button">Sign Up</button></Link>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainhero