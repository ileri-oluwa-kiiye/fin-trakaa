import styles from "./newinventory.module.css"
import image from "../../../img/newsale.png"
import cloud from "../../../img/cloud.png"


const Newpur = () => {
    return(
        <div>
            <div className={styles.heading}>
                <div>
                     <h2>Purchases  |</h2>
                    <p>No edit yet</p>
                    <img src={cloud} alt="" />
                </div>
                {/* <Link to="/addsale" style={{color:'inherit', textDecoration: 'none'}}><button>Add new +</button></Link> */}
            </div>

            <div className={styles.main}>
                <h2>Enter details of your purchases</h2>
                <p>There are no information about your purchases yet.</p>
                <div className={styles.imag}><img src={image} alt="" /></div>
            </div>
            
        </div>
    )
}

export default Newpur