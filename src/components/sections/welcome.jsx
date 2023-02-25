import styles from "./subdashboard.module.css"
import { Link } from 'react-router-dom'
import welcome from "../../img/welcome.png"


let userName = "Felicia"

const Welcome = () => {
    return(
        <div className="controlwidth">
            <div className={styles.welcome}>
                <div className={styles.main}>
                    <p>Welcome back</p>
                    <h1 id="name">{userName}</h1>
                    <p>You left off while inputting some money in, click <Link to="/dashboard" style={{color:'#1D19F0'}}>here</Link> to continue </p>
                </div>
                <div className={styles.imge}>
                    <img src={welcome} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Welcome