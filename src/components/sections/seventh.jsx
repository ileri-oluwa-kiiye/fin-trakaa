import styles from "./seventh.module.css"
import img from "./../../img/img.png"
import john from "./../../img/john.png"
import femi from "./../../img/femi.png"

const Seventhsection = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <h1>See what users are saying about us</h1>
                <div className={styles.reviews}>
                    <div className={styles.review}>
                        <div className={styles.text}>I am happy i came across this platform, the inventory management feature of this websiteis top-notch, allowing me track my products, receive notifications when i am running low on stock and easily reorder supplies.</div>
                        <div className={styles.user}>
                            <img src={img} alt="" />
                            <p>Anuoluwa </p>
                        </div>
                    </div>
                    <div className={styles.flexx}>
                        <div className={styles.review}>
                            <div className={styles.text}>Fin-Traka is intuitive and easy to use with a clean and user friendly interface that makes it easy to keep track of my finances and inventory. I highly recommend this app to small business owners </div>
                            <div className={styles.user}>
                                <img src={john} alt="" />
                                <p style={{paddingRight:'40px'}}>John</p>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.text}>I have been using Fin-Traka for a while now and it has been a game changer for my shoe business. Before i was drowning in receipts and struggling to keep track of my expenses but with Fin-Traka i can easily enter and categorize all my expenses on the go</div>
                            <div className={styles.user}>
                                <img src={img} alt="" />
                                <p style={{paddingRight:'20px'}}>Felicia </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.review}>
                        <div className={styles.text}>“Ever since I started using Fin-traka, I don't worry about how to sort my finances anymore”</div>
                        <div className={styles.user}>
                            <img src={femi} alt="" />
                            <p style={{paddingRight:'40px'}}>Femi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventhsection