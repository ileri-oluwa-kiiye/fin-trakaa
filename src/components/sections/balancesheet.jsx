import styles from "./subdashboard.module.css"
import liabilities from "../../img/Liabilities.png"
import equity from "../../img/Equity.png"
import asset from "../../img/Asset.png"



const Balancesheet = () => {
    return(
        <div className={styles.cover}>
            <div>
                <div className={styles.heading}>
                    <div>
                        <h1>Balance sheet</h1>
                        <p>To view your balance sheet report, click on view details</p>
                    </div>
                    <button className={styles.secondary}>View details</button>
                </div>
                <div className={styles.hrline}></div>
                <div className={styles.flex}>
                    <li>
                        <img src={asset} alt="" />
                        <div>
                            <h2>Asset</h2>
                            <p>This include everything that your business owns</p>
                        </div>
                        <button className={styles.primary}>View all</button>
                    </li>
                    <li className={styles.liabilities}>
                        <img src={liabilities} alt="" />
                        <div>
                            <h2>Liabilities</h2>
                            <p>This include all the debits your business will return</p>
                        </div>
                        <button className={styles.primary}>View all</button>
                    </li>
                    <li className={styles.equity}>
                        <img src={equity} alt="" />
                        <div>
                            <h2>Equity</h2>
                            <p>These are the amount your those who invest in your business will have</p>
                        </div>
                        <button className={styles.primary}>View all</button>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default Balancesheet