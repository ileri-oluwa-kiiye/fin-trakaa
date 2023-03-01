import styles from "./newinventory.module.css"
import cloud from "../../../img/cloudcheck.png"
import info from "../../../img/info.png"
import { Link } from "react-router-dom"
import del from "../../../img/del.png"


const Addinv = () => {
    return(
        <div>
            <div className={styles.heading}>
                <div>
                     <h2>Inventory  |</h2>
                    <p>Edited minutes ago</p>
                    <img src={cloud} alt="" />
                    <h2> | <select name="date" id="date">
                            <option>Date</option>
                            <option>Size</option>
                        </select></h2>
                </div>
            </div>

            <div className={styles.choose}>
                <li className={styles.activee}>Manual data entry</li>
                <Link to="/scaninventory" style={{color:'inherit', textDecoration: 'none'}}><li>Upload /scan written inventory <img src={info} alt="" /></li></Link>
            </div>


            <div className={styles.overflow}>
                <table className={styles.table}>
                    <div>
                        <p>Items Details</p>
                        <img src={del} alt="" />
                    </div>
                    <section>
                    <tr>
                        <th>Item name</th>
                        <th>Unit</th>
                        <th>Cost price (cp)</th>
                        <th>Qty</th>
                        <th>Markup/profit margin</th>
                        <th>Selling price (sp)</th>
                        <th>Batch no/Item I.D</th>
                        <th>Total amount</th>
                        <th>VAT</th>
                        <th>Expiration date</th>
                    </tr>
                    <tr>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                        <td>Add</td>
                    </tr>
                    </section>

                    <button>Add New +</button>
                </table>
            </div>


            {/* <aside>
                    <div>
                        <header>Supplier's Details</header>
                        <div>
                            <div>
                                <h2>Name</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Address</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Phone number</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Email</h2>
                                <input type="email" />
                            </div>
                        </div>
                    </div>
            </aside> */}
            
        </div>
    )
}


export default Addinv