import styles from "./inventory.module.css"
import Booknav from "../components/nav/booknav"
import Salesside from "../components/sections/inventory/salesside"
import Newsales from "../components/sections/inventory/newsale"
import Intop from "../components/sections/inventory/intop"


const Salesnew = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Salesside />
            </div>
            <div className={styles.content}>
                    <div className={styles.desktop}>
                        <Intop />
                    </div>
                    <div className={styles.mobile}>
                        <Booknav />
                    </div>
                <div className="controlwidth">
                    <Newsales />
                </div>
            </div>
        </div>
    )
}

export default Salesnew

