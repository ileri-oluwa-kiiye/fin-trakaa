import styles from "./inventory.module.css"
import Intop from "../components/sections/inventory/intop"
import Invside from "../components/sections/inventory/invside"
import Newinv from "../components/sections/inventory/newinventory"



const Inventory = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Invside />
            </div>
            <div className={styles.content}>
                <Intop />
                <div className="controlwidth">
                    <Newinv />
                </div>
            </div>
        </div>
    )
}

export default Inventory



