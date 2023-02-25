import styles from "./newinventory.module.css"
import cloud from "../../../img/cloudcheck.png"
import image from "../../../img/scaninv.png"
import info from "../../../img/info.png"
import { Link } from "react-router-dom"


const Scaninv = () => {
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
                <Link to="/addinventory" style={{color:'inherit', textDecoration: 'none'}}><li>Manual data entry</li></Link>
                <li className={styles.activee}>Upload /scan written inventory <img src={info} alt="" /></li>
            </div>
            <div className={styles.main}>
                <h2>Scan or Upload  inventory document</h2>
                <p>Fin-traka help you convert your handwritten inventory to a digital inventory using an OCR scanner. All you have to do is to clickk the upload button below to get started</p>
                <div className={styles.imag}><img src={image} alt="" /></div>
            </div>
            <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>
                <div style={{display:'flex', justifyContent:'flex-end'}}><button className={styles.invbutton}>Preview</button></div>
            </Link>
        </div>
    )
}


export default Scaninv