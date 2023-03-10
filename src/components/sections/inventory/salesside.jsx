import styles from "./invside.module.css";
import "react-pro-sidebar/dist";
import { Link } from "react-router-dom";
import dashboard from "../../../img/dashboardw.png"
import book from "../../../img/bookb.png"
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
                <Link to="/home" style={{color:'inherit', textDecoration: 'none'}}><h2><img src={logo} alt="" /></h2></Link>
                    <div className={styles.icons}>
                        <Link to="/dashboard"><img src={dashboard} alt="" /></Link>
                        <img src={book} alt="" />
                        <img src={consult} alt="" />
                        <Link to="/scaninventory" style={{color:'inherit', textDecoration: 'none'}}><img src={scan} alt="" /></Link>
                        <img src={blog} alt="" />
                        <img src={setting} alt="" />
                        <Link to="/"><img src={logout} alt="" /></Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        <li className={styles.active}>Sales</li>
                        <Link to="/purchase" style={{color:'inherit', textDecoration: 'none'}}><li>Purchases</li></Link>
                        <Link to="/inventory" style={{color:'inherit', textDecoration: 'none'}}><li>Inventory</li></Link>
                        <li>Invoices</li>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Salesside
