import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Salesside from "../components/sections/inventory/salesside"
import Addnewsale from "../components/sections/inventory/addnewsale"
import Booknav from "../components/nav/booknav"

const Addsale = ()  =>{
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
                        <Addnewsale />
                    </div>
                </div>
            </div>
    )
}

export default Addsale