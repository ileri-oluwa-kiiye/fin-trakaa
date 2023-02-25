import styles from "./inventory.module.css"
import Intop from "../components/sections/inventory/intop"
import Salesside from "../components/sections/inventory/salesside"
import Newsales from "../components/sections/inventory/newsale"



const Salesnew = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Salesside />
            </div>
            <div className={styles.content}>
                <Intop />
                <div className="controlwidth">
                    <Newsales />
                </div>
            </div>
        </div>
    )
}

export default Salesnew

