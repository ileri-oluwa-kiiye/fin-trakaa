import styles from "./newinventory.module.css"
import image from "../../../img/newsale.png"
import cloud from "../../../img/cloud.png"
import { Link } from "react-router-dom"


const Newsales = () => {
    return(
        <div>
            <div className={styles.heading}>
                <div>
                    <h2>Sales  |</h2>
                    <p>No edit yet</p>
                    <img src={cloud} alt="" />
                </div>
                <Link to="/addsale" style={{color:'inherit', textDecoration: 'none'}}><button>Add new +</button></Link>
            </div>

            <div className={styles.main}>
                <h2>Enter details of your sales</h2>
                <p>There are no information about your sales yet. Start by entering the  sales you have made this week by clicking on the add new button at the top right of this page</p>
                <div className={styles.imag}><img src={image} alt="" /></div>
            </div>
            
        </div>
    )
}

export default Newsales