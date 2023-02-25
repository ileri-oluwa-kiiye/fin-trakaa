import styles from "./smallerdashboard.module.css"
import style from "./payroll.module.css"
import jude from "../../img/jude.png"
import aminu from "../../img/aminu.png"
import shalewa from "../../img/shalewa.png"
import tems from "../../img/tems.png"




const Payroll = () => {
    return(
        <div className={style.cover}>
            <div className={style.payroll}>
                <div className={style.header}>
                    <div>
                        <h1>Payroll</h1>
                        <p>See the details of your employees</p>
                    </div>
                    <button className={styles.secondary}>View all</button>
                </div>
                <div className={style.hrline}></div>
                <div className={style.flex}>
                    <li>
                        <div className={style.flexx}>
                            <img src={aminu} alt="" />
                            <div>
                                <h2>Aminu</h2>
                                <p>Cashier</p>
                            </div>
                        </div>
                        <div><button className={styles.primary}>View</button></div>
                    </li>
                    <li>
                        <div className={style.flexx}>
                            <img src={shalewa} alt="" />
                            <div>
                                <h2>Shalewa</h2>
                                <p>Secretary</p>
                            </div>
                        </div>
                        <div><button className={styles.primary}>View</button></div>
                    </li>
                    <li>
                        <div className={style.flexx}>
                            <img src={jude} alt="" />
                            <div>
                                <h2>Jude</h2>
                                <p>Cleaner</p>
                            </div>
                        </div>
                        <div><button className={styles.primary}>View</button></div>
                    </li>
                    <li>
                        <div className={style.flexx}>
                            <img src={tems} alt="" />
                            <div>
                                <h2>Tems</h2>
                                <p>P.A</p>
                            </div>
                        </div>
                        <div><button className={styles.primary}>View</button></div>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default Payroll