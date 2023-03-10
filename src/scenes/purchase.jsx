import styles from "./inventory.module.css"
import Intop from "../components/sections/inventory/intop"
import Purside from "../components/sections/inventory/purside"
import Newpur from "../components/sections/inventory/newpur"
import Booknav from "../components/nav/booknav"



const Purchases = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Purside />
            </div>
            <div className={styles.content}>
                    <div className={styles.desktop}>
                        <Intop />
                    </div>
                    <div className={styles.mobile}>
                        <Booknav />
                    </div>
                <div className="controlwidth">
                    <Newpur />
                </div>
            </div>
        </div>
    )
}

export default Purchases

