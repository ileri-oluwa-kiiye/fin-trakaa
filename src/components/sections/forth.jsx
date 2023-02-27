import style from "./forth.module.css"
import img1 from "../../img/servicesone.png"
import img2 from "../../img/servicestwo.png"

const Fourthsection = () => {
    return (
        <div className="controlwidth">
            <div className={style.section}>
                    <h1>
                        Our Services
                    </h1>
                <div className={style.service}>
                        <div className={style.one}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={style.two}>
                            <img src={img2} alt="" />
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Fourthsection