import Invside from "../components/sections/inventory/invside"
import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Scaninv from "../components/sections/inventory/scaninv"
import Booknav from "../components/nav/booknav"

const Scandata = () =>{
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
                        <Scaninv />
                    </div>
                </div>
            </div>
        )
    )
}

export default Scandata