import styles from "./pricing.module.css"
import check from "../../img/check.png"


const Pricingpage =() =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                <h1>Plans and Pricing</h1>
                <h4>We have just the right plan for your budget at the moment.</h4>

                <div className={styles.flex}>
                    <div className={styles.flexbox}>
                        <h5>FREE</h5>
                        <p>Get started with our free plan to help you navigate how important Fin-traka is for your business</p>
                        <div className={styles.price}><span>$</span>0</div>
                        <hr/>

                        <ul>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Storage (1GB)</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Add inventory </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Take care of book keeping</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Create invoices in seconds</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Track money in and out</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Insights and blogs </div>
                            </li>
                        </ul>

                        <div className={styles.button}>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>


                    <div className={styles.flexbox}>
                        <h5>STANDARD</h5>
                        <p>Take your business to the next level with our standard plan. This plan is ideal for small business owners, for:</p>
                        <div className={styles.price}><span>$</span>10</div>
                        <hr/>

                        <ul>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Storage (1GB)</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Add inventory </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Take care of book keeping</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Create invoices in seconds</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Track money in and out</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Insights and blogs </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Scan documents using OCR</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>For 5 users + your accountant </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Book consultancy sessions (3 times a month) </div>
                            </li>
                        </ul>

                        <div className={styles.button}>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>




                    <div className={styles.flexbox}>
                        <h5>PLUS</h5>
                        <p>Ideal for medium-sized business owners that want the very best. Our plus plan offers unbeatable value just for::</p>
                        <div className={styles.price}><span>$</span>15</div>
                        <hr/>

                        <ul>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Storage (unlimited)</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Add inventory </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Take care of book keeping</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Create invoices in seconds</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Track money in and out</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Insights and blogs </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Scan documents using OCR</div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>For 5 users + your accountant </div>
                            </li>
                            <li>
                                <div><img src={check} alt="" /></div>
                                <div>Book consultancy sessions (3 times a month) </div>
                            </li>
                        </ul>

                        <div className={styles.button}>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}


export default Pricingpage

