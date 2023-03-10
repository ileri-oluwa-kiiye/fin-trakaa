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

export default Mobilenav