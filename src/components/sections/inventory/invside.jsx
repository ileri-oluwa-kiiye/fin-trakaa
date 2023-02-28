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

const Invside = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.flex}>
                <div className={styles.left}>
                    <h2><img src={logo} alt="" /></h2>
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
                        <Link to="/newsales" style={{color:'inherit', textDecoration: 'none'}}><li>Sales</li></Link>
                        <li>Purchases</li>
                        <li className={styles.active}>Inventory</li>
                        <li>Invoices</li>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Invside


// (
//     <div className={styles.sidebar}>
//         <div className={styles.flexbox}>
//             <h1><div>Logo</div></h1>

//             <ul>
//                 <div className={styles.div}>
//                     <li className={styles.active}>
//                         <div><img src={dashboard} alt="" /> </div>
                    
//                     </li>
//                     <li>
//                         <div><img src={book} alt="" /></div>
//                     </li>
//                     <li>
//                         <div><img src={consult} alt="" />
//                         </div> <div className={styles.text}>Consultancy</div>
//                     </li>
//                     <li>
//                         <div><img src={scan} alt="" />
//                         </div> <div className={styles.text}>Scan</div>
//                     </li>
//                     {/* <li>
//                         <div><img src={icon} alt="" /></div>
//                         <div className={styles.text}>Blog</div>
//                     </li> */}
//                     <li>
//                         <div><img src={setting} alt="" /></div> 
//                         <div className={styles.text}>Setting</div>
//                     </li>
//                     <li className={styles.logout}>
//                         <div><img src={logout} alt="" />
//                         </div> <div className={styles.text}><Link to="/" style={{color:'inherit', textDecoration: 'none'}}>Log Out</Link></div>
//                     </li>
//                 </div>
                
//                 {/* <Box paddingRight={isCollapsed ? undefined : "10%"}>
//                     <li
//                         title="Dashboard"
//                         to="/"
//                         icon = {icon}
//                         selected = {selected}
//                         setSelected = {setSelected}
//                     ></li>
//                 </Box> */}
//             </ul>

//             <div className={styles.premium}>
//                 <div className={styles.whitespace}></div>
//                 <div>
//                     <h3>Explore more options</h3>
//                     <button>Go Premium</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )