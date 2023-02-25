import { Link } from "react-router-dom"
import styles from "./confirm.module.css"

const Confirm = () =>{
    return(
        <div className={styles.div}>
            <div>
                <h1>Hi Felicia! Confirm your email to start using Fin-traka</h1>
                <p>We sent an email to feliciaabam@gmail.com</p>
            </div>
            <aside>
                <h3>Next steps</h3>
                <div className={styles.list}>
                    <div>1. Verify account</div>
                    <small>Click on the link sent to your email to verify your account</small>
                </div>
                <div className={styles.list}>
                    <div>2. Beginning using Fin-traka</div>
                    <small>Log in to Fin-traka to start an easy life to manage your business</small>
                </div>
                <Link to="/newdashboard" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.login}>Sign up</button></Link>
            </aside>
        </div>
    )
}

export default Confirm