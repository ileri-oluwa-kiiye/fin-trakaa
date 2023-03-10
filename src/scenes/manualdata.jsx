import Invside from "../components/sections/inventory/invside"
import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Addinv from "../components/sections/inventory/dataentryinv"
import Booknav from "../components/nav/booknav"

const Manualdata = () =>{
    return(
        (
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Invside />
                </div>
                <div className={styles.content}>
                    <div className={styles.desktop}>
                        <Intop />
                    </div>
                    <div className={styles.mobile}>
                        <Booknav />
                    </div>
                    <div className="controlwidth">
                        <Addinv />
                    </div>
                </div>
            </div>
        )
    )
}

export default Manualdata