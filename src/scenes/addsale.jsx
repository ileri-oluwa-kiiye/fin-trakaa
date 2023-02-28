import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Salesside from "../components/sections/inventory/salesside"

const Addsale = ()  =>{
    return(
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Salesside />
                </div>
                <div className={styles.content}>
                    <Intop />
                    <div className="controlwidth">
                        <h1>Sales</h1>
                    </div>
                </div>
            </div>
    )
}

export default Addsale