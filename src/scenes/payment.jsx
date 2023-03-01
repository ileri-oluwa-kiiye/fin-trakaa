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

                            <section>
                                <div className={styles.card}>
                                    <h2>Card type</h2>
                                    <select name="cardtype" id="cardtype">
                                        <option>Card type</option>
                                        <option>VISA</option>
                                        <option>Master Card</option>
                                        <option>Verve</option>
                                    </select>
                                </div>

                                <div className={styles.cardno}>
                                    <h2>Card Number</h2>
                                    <input type="text" placeholder="****   ****   ****  ****"/>
                                </div>

                                <div className={styles.fleex}>
                                    <div className={styles.expire}>
                                        <h2>Expiration date</h2>
                                        <input type="text" placeholder="MM | YYYY" />
                                    </div>

                                    <div className={styles.cvv}>
                                        <h2>CVV</h2>
                                        <input type="text" placeholder="***"/>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Link to="/thanks" style={{color:'inherit', textDecoration: 'none'}}><button>Donate Now</button></Link>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paymentcard