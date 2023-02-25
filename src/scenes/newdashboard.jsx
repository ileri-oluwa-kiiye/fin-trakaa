import styles from "./dashboard.module.css"
import Sidebar from "../components/nav/sidebar"
import Topbar from "../components/nav/topbar"
import Newdashboard from "../components/new/newdashboard"


const Newdashboardd = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Topbar />
                <div className="controlwidth">
                    <Newdashboard />
                </div>
            </div>
        </div>

    )
}

export default Newdashboardd