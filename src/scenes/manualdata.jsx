import Invside from "../components/sections/inventory/invside"
import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Addinv from "../components/sections/inventory/dataentryinv"

const Manualdata = () =>{
    return(
        (
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Invside />
                </div>
                <div className={styles.content}>
                    <Intop />
                    <div className="controlwidth">
                        <Addinv />
                    </div>
                </div>
            </div>
        )
    )
}

export default Manualdata