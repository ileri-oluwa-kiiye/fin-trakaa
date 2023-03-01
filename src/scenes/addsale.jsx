import Intop from "../components/sections/inventory/intop"
import styles from "./inventory.module.css"
import Salesside from "../components/sections/inventory/salesside"
import Addnewsale from "../components/sections/inventory/addnewsale"

const Addsale = ()  =>{
    return(
            <div className={styles.app}>
                <div className={styles.sidebar}>
                    <Salesside />
                </div>
                <div className={styles.content}>
                    <Intop />
                    <div className="controlwidth">
                        <Addnewsale />
                    </div>
                </div>
            </div>
    )
}

export default Addsale