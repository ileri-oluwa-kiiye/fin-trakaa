import style from "./third.module.css"
import image from "../../img/thirdsection.png"

const Thirdsection = () => {
    return (

        <div className="controlwidth">
            <div className={style.padding}>
                <div className={style.wrapdiv}>
                    <div className={style.section}>
                        <div>
                            <h1>
                                Consultancy services to help grow your business & help you earn more
                            </h1>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when 
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                            </p>
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdsection