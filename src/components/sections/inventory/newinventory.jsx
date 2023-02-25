import styles from "./newinventory.module.css"
import image from "../../../img/inventory.png"
import { Link } from "react-router-dom"


const Newinv = () => {
    return(
        <div>
            <div className={styles.heading}>
                <h2>Inventory</h2>
                <Link to="/addinventory" style={{color:'inherit', textDecoration: 'none'}}><button>Add new +</button></Link>
            </div>
            <div className={styles.options}>
                <select className={styles.all}>
                    <option>Add</option>
                </select>
                <select>
                    <option>Filter By Day</option>
                    <option>Filter By Month</option>
                    <option>Filter By Year</option>

                </select>
                <select>
                    <option>Favourite</option>
                    <option>Recent</option>
                    <option>Last Modified</option>
                </select>
            </div>

            <div className={styles.main}>
                <div className={styles.imag}><img src={image} alt="" /></div>
                <h2>Enter details of your stocks</h2>
                <p>You do not have any items saved yet. Click on the new button at the right corner of the screen to start keeping records</p>
            </div>
        </div>
    )
}

export default Newinv