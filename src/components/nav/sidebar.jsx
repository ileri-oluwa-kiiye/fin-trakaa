import styles from "./sidebar.module.css"
import "react-pro-sidebar/dist";
import { Link } from "react-router-dom";
import dashboard from "../../img/dashboard.png"
import book from "../../img/book.png"
import consult from "../../img/consult.png"
import scan from "../../img/scan.png"
import setting from "../../img/setting.png"
import logout from "../../img/logout.png"
import premium from "../../img/premium.png"
import sidebarlogo from "../../img/sidebarlogo.png"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.flexbox}>
                <h1><img src={sidebarlogo} alt="" /></h1>

                <ul>
                    <div className={styles.div}>
                        <li className={styles.active}>
                            <div><img src={dashboard} alt="" />
                            </div> <div className={styles.text}>Dashboard</div>
                        
                        </li>
                        <Link to="/newsales" style={{color:'inherit', textDecoration: 'none'}}><li>
                            <div><img src={book} alt="" />
                            </div> <div className={styles.text} >
                                Bookkeeping
                            </div>
                        </li></Link>
                        <li>
                            <div><img src={consult} alt="" />
                            </div> <div className={styles.text}>Consultancy</div>
                        </li>
                        <Link to="/scaninventory" style={{color:'inherit', textDecoration: 'none'}}><li>
                            <div><img src={scan} alt="" />
                            </div> <div className={styles.text}>Scan</div>
                        </li>
                        </Link>
                        {/* <li>
                            <div><img src={icon} alt="" /></div>
                            <div className={styles.text}>Blog</div>
                        </li> */}
                        <li>
                            <div><img src={setting} alt="" /></div> 
                            <div className={styles.text}>Setting</div>
                        </li>
                        <Link to="/" style={{color:'inherit', textDecoration: 'none'}}> <li className={styles.logout}>
                            <div><img src={logout} alt="" />
                            </div><div className={styles.text}>Log Out</div>
                        </li>
                        </Link>
                    </div>
                    
                    {/* <Box paddingRight={isCollapsed ? undefined : "10%"}>
                        <li
                            title="Dashboard"
                            to="/"
                            icon = {icon}
                            selected = {selected}
                            setSelected = {setSelected}
                        ></li>
                    </Box> */}
                </ul>

                <div className={styles.premium}>
                    <div className={styles.whitespace}>
                        <img src={premium} alt="" />
                    </div>
                    <div>
                        <h3>Explore more options</h3>
                        <button>Go Premium</button>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Sidebar