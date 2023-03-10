import styles from "./mobilenav.module.css"
import { Link } from "react-router-dom"
import notify from "../../img/two.png"
import profile from "../../img/four.png"
import opennav from "../../img/blueham.png"

// const Show = document.getElementById("opennav")


const Navmobile = () => {
    const Try = () =>{
        console.log("this")
    }
    return(
        
        <div>
            <div className={styles.flex}>
                <div className={styles.opennav} id="opennav" onClick={Try()}><img src={opennav} alt="" /></div>
                <div className={styles.icons}>
                    {/* The Icons For The Top Bar */}
                    <ul>
                        <img src={notify} alt="" title="notifications" style={{marginRight:'3vw', width:'15px'}}/>
                        <img src={profile} alt="" title="my profile" style={{ width:'18.5px'}}/>
                    </ul>
                </div>
            </div>

            <div className={styles.wrapdiv} id="hide">
                <h1 className={styles.logo}><div>Logo</div></h1>


                <ul className={styles.firstlist}>
                    <li className={styles.active}>Book keeping</li>
                    <li><Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>Dashboard</Link></li>
                    <li> Pricing  </li>
                    <li>Blog</li>
                </ul>


                <ul className={styles.secondlist}>
                    <li><button className={styles.login}><Link to="/login" style={{color:'inherit', textDecoration: 'none'}}>Log In</Link></button></li>
                    <li><button className={styles.signup}><Link to="/signup" style={{color:'inherit', textDecoration: 'none'}}>Sign up</Link></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navmobile