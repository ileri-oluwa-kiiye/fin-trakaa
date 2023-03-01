import styles from "./newinventory.module.css"
import cloud from "../../../img/cloudcheck.png"
import { Link } from "react-router-dom"
import del from "../../../img/del.png"


const Addnewsale = () => {
    return(
        <div>
            <div className={styles.heading}>
                <div>
                     <h2>Sales  |</h2>
                    <p>Edited minutes ago</p>
                    <img src={cloud} alt="" />
                    <h2> | <select name="date" id="date">
                            <option>Date</option>
                            <option>Size</option>
                        </select></h2>
                </div>
            </div>

            <div className={styles.options}>
                <select className={styles.all}>
                    <option>Add</option>
                </select>
                <select>
                    <option>Paid</option>

                </select>
                <select>
                    <option>Unpaid</option>
                </select>
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


            <aside>
                <div className={styles.flex}>
                    <div className={styles.one}>
                        <header>Customer Details</header>
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
                            <div>
                                <h2>Points</h2>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.one}>
                        <header>Delivery Details</header>
                        <div>
                            <div>
                                <h2>Delivery address</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Delivery charges</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Total due</h2>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>


            <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>
                <div style={{display:'flex', justifyContent:'flex-end'}}><button className={styles.invbutton}>Preview Invoice</button></div>
            </Link>
            
        </div>
    )
}


export default Addnewsale