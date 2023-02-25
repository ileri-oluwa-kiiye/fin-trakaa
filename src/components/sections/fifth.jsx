import styles from "./fifth.module.css"
import balance from "../../img/balance.png"
import sales from "../../img/sales.png"
import inventory from "../../img/inventoryy.png"
import automated from "../../img/automated.png"
import ocr from "../../img/ocr.png"
import payroll from "../../img/payroll.png"
import profit from "../../img/profit.png"


const Fifthsection = () => {
    return(
        <div className="controlwidth">
            <div className={styles.wrapdiv}>
                <ul>
                    <li>
                        <p> <img src={balance} alt="" /></p>
                        <div>Balance sheet</div>
                    </li>
                    <li>
                        <p> <img src={sales} alt="" /></p>
                        <div>Sales & Purchase</div>
                    </li>
                    <li>
                        <p> <img src={inventory} alt="" /></p>
                        <div>Inventory</div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p> <img src={automated} alt="" /></p>
                        <div>Automated data entry</div>
                    </li>
                    <li>
                        <p> <img src={ocr} alt="" /></p>
                        <div>OCR</div>
                    </li>
                    <li>
                        <p> <img src={payroll} alt="" /></p>
                        <div>Payroll management</div>
                    </li>
                </ul>
                <li>
                        <p> <img src={profit} alt="" /></p>
                    <div>Profit & loss statement</div>
                </li>
            </div>
        </div>
    )
}


export default Fifthsection