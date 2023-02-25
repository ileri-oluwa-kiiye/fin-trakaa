import image from "../img/donation.png"
import styles from "./donation.module.css"
import { Link } from "react-router-dom"
import crypto from "../img/crypto.png"

const Paymentcrypto = () =>{
    return(
        <div className={styles.payment}>
            <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.main}>
                    <div className={styles.thanks}>
                        <h1>Payment info</h1>

                        <div className={styles.links}>
                            <Link to="/pay" style={{color:'inherit', textDecoration: 'none'}}><button>Card</button></Link>
                            <button className={styles.active}>Crypto</button>
                            
                        </div>

                        <p>Kindly donate to our cause through our trusted agent <span style={{color:'blue', cursor:'pointer'}}>Kukai</span>. Please copy this wallet address to make your donation</p>
                        
                        <div className={styles.img}>
                            <img src={crypto} alt="" />
                        </div>
                        <div className={styles.copy}>
                            <div style={{color:'#393939', backgroundColor:'white'}}>tz1W8E3BLfwyJYuNWgj8yPUjYZQhWBeCTwZi</div>
                            <button className={styles.active}>Copy</button>
                        </div>
                        <div className={styles.button}>
                                <button><Link to="/thanks" style={{color:'inherit', textDecoration: 'none'}}>Checkout</Link></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Paymentcrypto