import styles from "./dashboard.module.css"
import Sidebar from "../components/nav/sidebar"
import Topbar from "../components/nav/topbar"
import Newdashboard from "../components/new/newdashboard"
import Navmobile from "../components/nav/navmobile"


const Newdashboardd = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.desktop}>
                    <Topbar />
                </div>
                <div className={styles.mobile}><Navmobile /></div>
                <div className="controlwidth">
                    <Newdashboard />
                </div>
            </div>
        </div>

    )
}

export default Newdashboardd