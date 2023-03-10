import styles from "./mobilenav.module.css"
import { Link } from "react-router-dom"
import close from "../../img/close.png"
import opennav from "../../img/hamburger.png"
import mobilelogo from "../../img/mobilelogo.png"
import { useRef } from "react"

// const Show = document.getElementById("opennav")


const Mobilenav = () => {
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
                <div><img src={mobilelogo} alt="" /></div>
                <div className={styles.opennav} onClick={showNav}><img src={opennav} alt="" /></div>
            </div>

            <div className={styles.wrapdiv} id="hide" ref={navRef}>
                <div style={{display:'flex', justifyContent:'space-between', padding:'10px 20px', alignItems:'center'}}>

                    <div><img src={mobilelogo} alt="" /></div>
                    <div  onClick={hideNav}><img src={close} alt="" style={{cursor:'pointer', width:'20px'}} /></div>
                </div>


                <ul className={styles.firstlist}>
                    <Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><li>Book keeping</li></Link>
                    <Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><li>Dashboard</li></Link>
                    <Link to="/pricing" style={{color:'inherit', textDecoration: 'none'}}><li> Pricing </li> </Link>
                    <Link to="/donation" style={{color:'inherit', textDecoration: 'none'}}><li>Donate</li></Link>
                </ul>


                <ul className={styles.secondlist}>
                    <Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><li><button className={styles.login}>Log In</button></li></Link>
                    <Link to="/signup" style={{color:'inherit', textDecoration: 'none'}}><li><button className={styles.signup}>Sign up</button></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Mobilenav