import videoicon from "../../img/video.png"
import styles from "./new.module.css"
import pana from "../../img/pana.png"


const Newdashboard = () => {
    return(
        <div className={styles.dashboard}>
            <div>
                <h2>Hi! Let's help you set up</h2>
                <p>You can use this dashboard to get an overview of how your business is doing
                </p>
                <img src={pana} alt="" style={{marginLeft:"7vw"}}/>
                <footer><img src={videoicon} alt="" /> Watch this video to get started</footer>
            </div>
        </div>
    )
}

export default Newdashboard