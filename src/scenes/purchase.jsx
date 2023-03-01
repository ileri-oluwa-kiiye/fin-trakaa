import styles from "./inventory.module.css"
import Intop from "../components/sections/inventory/intop"
import Purside from "../components/sections/inventory/purside"
import Newpur from "../components/sections/inventory/newpur"



const Purchases = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Purside />
            </div>
            <div className={styles.content}>
                <Intop />
                <div className="controlwidth">
                    <Newpur />
                </div>
            </div>
        </div>
    )
}

export default Purchases

