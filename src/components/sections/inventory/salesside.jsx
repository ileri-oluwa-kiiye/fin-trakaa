import styles from "./invside.module.css";
import "react-pro-sidebar/dist";
import { Link } from "react-router-dom";
import dashboard from "../../../img/dashboard.png"
import book from "../../../img/book.png"
import consult from "../../../img/consult.png"
import scan from "../../../img/scan.png"
import blog from "../../../img/blog.png"
import logo from "../../../img/sidebarlogo.png"
import setting from "../../../img/setting.png"
import logout from "../../../img/logout.png"

const Salesside = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.flex}>
                <div className={styles.left}>
                    <h2><img src={logo} alt="" /></h2>
                    <div className={styles.icons}>
                        <Link to="/dashboard"><img src={dashboard} alt="" /></Link>
                        <img src={book} alt="" />
                        <img src={consult} alt="" />
                        <img src={scan} alt="" />
                        <img src={blog} alt="" />
                        <img src={setting} alt="" />
                        <Link to="/"><img src={logout} alt="" /></Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        <li className={styles.active}>Sales</li>
                        <li>Purchases</li>
                        <Link to="/inventory" style={{color:'inherit', textDecoration: 'none'}}><li>Inventory</li></Link>
                        <li>Invoices</li>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Salesside
