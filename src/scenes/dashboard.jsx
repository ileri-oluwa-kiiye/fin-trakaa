import styles from "./dashboard.module.css"
import Sidebar from "../components/nav/sidebar"
import Topbar from "../components/nav/topbar"
import Welcome from "../components/sections/welcome"
import Cashbook from "../components/sections/cashbook"
import Balancesheet from "../components/sections/balancesheet"
import Blog from "../components/sections/blogdb"
import Profit from "../components/sections/profit"
import Payroll from "../components/sections/payroll"
import Navmobile from "../components/nav/navmobile"
import Preloader from "./preloader"

import Connect from "../components/sections/connect"


const Dashboard = () => {
    return(
        <div className={styles.app}>
            <Preloader />
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.desktop}>
                    <Topbar />
                </div>
                <div className={styles.mobile}><Navmobile /></div>
                <div className="controlwidth">
                    <Welcome />
                    <div className={styles.flex}>
                        <Cashbook />
                        <Balancesheet />
                    </div>
                    <div className={styles.flexx}>
                        <Blog />
                        <Profit />
                        <Payroll />
                        <Connect />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard