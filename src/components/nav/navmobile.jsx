import styles from "./mobilenav.module.css"
import { Link } from "react-router-dom"
import notify from "../../img/two.png"
import profile from "../../img/four.png"
import { useRef } from "react"
import close from "../../img/close.png"
import mobilelogo from "../../img/mobilelogo.png"
import opennav from "../../img/blueham.png"

// const Show = document.getElementById("opennav")


const Navmobile = () => {
    const showNav = () =>{
        navRef.current.style.width = "100vw"
    }
    
    const hideNav = () =>{
        navRef.current.style.width = "0vw"
    }

    const navRef = useRef()
    return(
        
        <div>
            <div className={styles.flex}>
                <div className={styles.opennav} id="opennav" onClick={showNav}><img src={opennav} alt="" /></div>
                <div className={styles.icons}>
                    {/* The Icons For The Top Bar */}
                    <ul>
                        <img src={notify} alt="" title="notifications" style={{marginRight:'3vw', width:'15px'}}/>
                        <img src={profile} alt="" title="my profile" style={{ width:'18.5px'}}/>
                    </ul>
                </div>
            </div>

            <div className={styles.wrapdiv} id="hide" ref={navRef}>
                <div style={{display:'flex', justifyContent:'space-between', padding:'10px 20px', alignItems:'center'}}>

                    <div><img src={mobilelogo} alt="" /></div>
                    <div  onClick={hideNav}><img src={close} alt="" style={{cursor:'pointer', width:'20px'}} /></div>
                </div>


                <ul className={styles.firstlist}>
                    <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}><li>Dashboard</li></Link>
                    <Link to="/newsales" style={{color:'inherit', textDecoration: 'none'}}><li>Bookkeeping</li></Link>
                    <Link to="/scaninventory" style={{color:'inherit', textDecoration: 'none'}}><li> Scan </li> </Link>
                    <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><li> Blog </li> </Link>
                </ul>


                <ul className={styles.secondlist}>
                    <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><li><button className={styles.login}>Log Out</button></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navmobile