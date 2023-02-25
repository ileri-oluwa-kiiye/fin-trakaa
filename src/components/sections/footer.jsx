import styles from "./footer.module.css"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import mail from "../../img/mail.png"
import instagram from "../../img/instagram.png"

const Footer =() =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                
                <div className={styles.flex}>
                    <div className={styles.first}>
                        <div className={styles.logo}>Logo</div>
                        <ul>
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
                    </div>
                    <div className={styles.second}>
                          <div>@2023 Fin-Traka limited</div>
                          <div>All rights reserved. Terms and conditions, pricing, support, features 
                            and service options are subject to change by the company without prior notice
                        </div>
                    </div>
                    <div className={styles.third}>
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                        <div>Certified by Blaaatuuin Trust</div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Footer