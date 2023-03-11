import styles from "./footer.module.css"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import mail from "../../img/mail.png"
import fintraka from "../../img/fintraka.png"
import footerlogo from "../../img/footerlogo.png"
import instagram from "../../img/instagram.png"

const Footer =() =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                <div className={styles.flex}>

                <div className={styles.flexx}>

                        <div>
                            <div className={styles.logos}>
                                <img src={footerlogo} alt="" />
                            </div>
                            <img src={fintraka} alt="" width={130}  />
                            <ul className={styles.first}>
                                <li>
                                    <a href="https://facebook.com"><img src={facebook} alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://gmail.com"><img src={mail} alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://instagram.com"><img src={instagram} alt="" /></a>
                                </li>
                            </ul>
                            <p>
                            All rights reserved.
                            Terms and conditions, pricing, support, features and service
                            options are subject to change by the company without prior notice
                            </p>
                        </div>

                        <div className={styles.pro}>
                            <h2>Products</h2>
                            <p>Book keeping</p>
                            <p>Consultancy</p>
                            <p>Blog</p>
                        </div>

                    </div>

                    <div className={styles.flexx}>
                        <div>
                            <h2>Company</h2>
                            <p>About</p>
                            <p>Privacy policy</p>
                            <p>Terms of use</p>
                            <p>Partner with us</p>
                        </div>

                        <div>
                            <h2>Reach out</h2>
                            <p>Contact</p>
                            <p>Donation</p>
                            <p>Make a suggestion</p>
                        </div>
                    </div>

                </div>
                <footer>
                    <div>&copy; 2023 Fin-Traka limited</div>
                    <div>EN/CN/FR/GER/JP/</div>
                </footer>
            </div>
        </div>
    )
}


export default Footer















// (
//     <div className={styles.wrapdiv}>
//         <div className="controlwidth">
            
//             <div className={styles.flex}>
//                 <div className={styles.first}>
//                 <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><div className={styles.logos}>
//                         <img src={footerlogo} alt="" />
//                     </div></Link>
//                     <ul>
//                         <li>
//                             <a href="https://facebook.com"><img src={facebook} alt="" /></a>
//                         </li>
//                         <li>
//                             <a href="https://twitter.com"><img src={twitter} alt="" /></a>
//                         </li>
//                         <li>
//                             <a href="https://gmail.com"><img src={mail} alt="" /></a>
//                         </li>
//                         <li>
//                             <a href="https://instagram.com"><img src={instagram} alt="" /></a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className={styles.second}>
//                       <div>@2023 Fin-Traka limited</div>
//                       <div>All rights reserved. Terms and conditions, pricing, support, features 
//                         and service options are subject to change by the company without prior notice
//                     </div>
//                 </div>
//                 <div className={styles.third}>
//                     <ul>
//                         <li>Terms and Conditions</li>
//                         <li>Privacy</li>
//                         <li>Security</li>
//                     </ul>
//                     <div>Certified by Blaaatuuin Trust</div>
//                 </div>
//             </div>

//         </div>
//     </div>
// )