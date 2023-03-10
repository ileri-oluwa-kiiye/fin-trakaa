import styles from './mainnav.module.css'
import { Link } from 'react-router-dom'
import navlogo from "../../img/navlogo.png"
import logotext from "../../img/logotext.png"


const Mainnav = () => {
    return(
       <div className='controlwidth'>
         <div className={styles.wrapdiv}>
            <h1 className={styles.logo}>
                <img src={navlogo} alt="" style={{width:'35px', marginRight:'5px'}}/>
                <img src={logotext} alt="" style={{width:'100px', marginRight:'5px'}} />
            </h1>


            <ul className={styles.firstlist}>
                <Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><li>Bookkeeping</li></Link>
                <Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><li>Consultancy</li></Link>
                <Link to="/pricing" style={{color:'inherit', textDecoration: 'none'}}><li>Pricing</li></Link>
                <Link to="/donation" style={{color:'inherit', textDecoration: 'none'}}><li>Donate</li></Link>
            </ul>


            <ul className={styles.secondlist}  id='top'>
                <li><Link to="/login" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.login}>Log In</button></Link></li>
                <li><Link to="/signup" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.signup}>Sign up</button></Link></li>
            </ul>
        </div>
       </div>
    )
}

export default Mainnav