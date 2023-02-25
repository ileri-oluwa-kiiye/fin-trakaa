import Invside from "../components/sections/inventory/invside"
import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Scaninv from "../components/sections/inventory/scaninv"

const Scandata = () =>{
    return(
        (
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Invside />
                </div>
                <div className={styles.content}>
                    <Intop />
                    <div className="controlwidth">
                        <Scaninv />
                    </div>
                </div>
            </div>
        )
    )
}

export default Scandata