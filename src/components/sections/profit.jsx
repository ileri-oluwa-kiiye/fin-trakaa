import styles from "./smallerdashboard.module.css"
import style from "./profit.module.css"
import Piechart from "./piechart"


const Profit = () =>{
    return(
        <div className={style.cover}>
            <div className={style.profit}>
                <div className={style.header}>
                    <div>
                        <h1>Profit & loss</h1>
                        <p>To view profit & loss report, click on the view details</p>
                    </div>
                    <div>
                        <button className={styles.secondary} style={{minWidth:'100px'}}>View details</button>
                    </div>
                </div>
                <div className={style.hrline}></div>
                <div className={style.stats}>
                    <div className="piechart" style={{width:"200px", height: "200px", margin:'30px auto'}}>
                        <Piechart />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profit