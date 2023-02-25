import styles from "./smallerdashboard.module.css"
import style from "./blogdb.module.css"
import blog1 from "../../img/blog1.png"
import blog2 from "../../img/blog2.png"
import blog3 from "../../img/blog3.png"


const Blog = () =>{
    return(
        <div className={style.cover}>
            <div className={style.blog}>
                <div className={style.header}>
                    <h1>Blog</h1>
                    <div><button className={styles.secondary}>View all</button></div>
                </div>
                <div className={style.hrline}></div>
                <div className={style.flex}>
                    <li>
                        <div>
                             <div className={style.image}><img src={blog1} alt="" /></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                    <li>
                        <div>
                             <div className={style.image}><img src={blog2} alt="" /></div>
                             <p>What does LRS do</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                    <li>
                        <div>
                             <div className={style.image}><img src={blog3} alt="" /></div>
                             <p>How to save more as a business owner</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default Blog