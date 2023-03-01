
import styles from "./second.module.css"
import image from "../../img/second.png"

const Secondhero = () => {
    return(
        <div className={styles.second}>
            <div className="controlwidth">
                <div className={styles.wrapdiv}>
                    <div className={styles.section}>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div style={{maxWidth:'600px'}}>
                            <h1>
                                Explore variety of book keeping services for your business needs
                            </h1>
                            <p>
                                Whether it is just to input how much sales you make per day,or to sort goods 
                                in your care, know how much to pay investors as equity, Fin-traka got you covered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Secondhero