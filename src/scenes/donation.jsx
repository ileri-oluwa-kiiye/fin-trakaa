import image from "../img/donation.png"
import styles from "./donation.module.css"
import money from "../img/money.png"
import coffee from "../img/coffee.png"

const Donation = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.main}>
                    <div>
                        <h1>Donation</h1>
                        <p>Every donation no matter the amount enable the Fin-traka team create a better product for our users</p>
                        <h2>How would you like to donate?</h2>
                        <form method="POST">
                            <div className={styles.donation}>
                                <div className={styles.money}>
                                    <div className={styles.img}>
                                        <img src={money} alt="" />
                                    </div>
                                    <h3>Money</h3>
                                    <div className={styles.input}>
                                        <label htmlFor="500m">#500</label>
                                        <input type="radio" name="money" id="500m"/>
                                    </div>
                                    <div className={styles.input}>
                                        <label htmlFor="1000m">#1000</label>
                                        <input type="radio" name="money" id="1000m" />
                                    </div>
                                </div>
                                <div className={styles.coffee}>
                                    <div className={styles.img}>
                                        <img src={coffee} alt="" />
                                    </div>
                                    <h3>Coffee</h3>
                                    <div className={styles.input}>
                                        <label htmlFor="500c">#500</label>
                                        <input type="radio" name="coffee" id="500c"/>
                                    </div>
                                    <div className={styles.input}>
                                        <label htmlFor="1000c">#1000</label>
                                        <input type="radio" name="coffee" id="1000c" />
                                    </div>
                                </div>
                            </div>

                        <div className={styles.button}>
                            <button>Donate Now</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation