import image from "../img/donation.png"
import styles from "./donation.module.css"
import { Link } from "react-router-dom"


const Paymentcard = () =>{
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
                                <button className={styles.active}>Card</button>
                                <Link to="/crypto" style={{color:'inherit', textDecoration: 'none'}}><button>Crypto</button></Link>
                            </div>

                            <div className={styles.card}>
                                <h3>Card type</h3>
                                <select name="cardtype" id="cardtype">
                                    <option>Card type</option>
                                    <option>VISA</option>
                                    <option>Master Card</option>
                                    <option>Verve</option>
                                </select>
                            </div>

                            <div className={styles.cardno}>
                                <h3>Card Number</h3>
                                <input type="text" />
                            </div>

                            <div className={styles.cardno}>
                                <h3>Expiration date</h3>
                                <input type="text" />
                            </div>

                            <div className={styles.cardno}>
                                <h3>CVV</h3>
                                <input type="text" />
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

export default Paymentcard