import styles from "./inventory.module.css"
import Intop from "../components/sections/inventory/intop"
import Salesside from "../components/sections/inventory/salesside"
import Newsales from "../components/sections/inventory/newsale"
import Navmobile from "../components/nav/navmobile"



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
                <div className={styles.mobile}><Navmobile /></div>
                <div className="controlwidth">
                    <Newsales />
                </div>
            </div>
        </div>
    )
}

export default Salesnew

