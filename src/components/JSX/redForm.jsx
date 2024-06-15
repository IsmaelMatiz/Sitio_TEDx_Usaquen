import { IoIosMail } from "react-icons/io";
import { RxInstagramLogo } from "react-icons/rx";
import '../CSS/redForm.scss'
import img_redForm_1  from "../../assets/img_unete.png";
import img_redForm_2  from "../../assets/img_inscribete.png";

export function RedForm({bigImg, title, paragraph, buttonLink, emailLink, instaLink, showIcons}) {

    return(
        <>
        <div className="myContainer">
            <div className="desk">
                <div className="row">
                    <div className="col">
                        <div className={bigImg === 1? "r-form-pic1" : "r-form-pic2"}>
                            <div className="r-form-black-cover"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="r-form-info">
                        <h3 className="r-form-title">{title}</h3>
                        <p className="r-form-paragraph">{paragraph}</p>
                        <div className="container-button">
                            <a href={buttonLink} className="r-form-btn-inscri">Inscríbete</a>
                        </div>
                        {showIcons?
                        <div className="r-form-social-container">
                            <a href={emailLink}>
                                <IoIosMail className="r-form-email"/>
                            </a>
                            <a href={instaLink}>
                                <RxInstagramLogo className="r-form-insta"/>
                            </a>
                        </div>
                        :
                        <span></span>
                        }
                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile">
                <div className="r-form-info">
                    <div className="r-form-container_info">
                        <h3 className="r-form-title">{title}</h3>
                        <p className="r-form-paragraph">{paragraph}</p>
                        <a href={buttonLink} className="r-form-btn-inscri">Inscríbete</a>
                    </div>
                    {showIcons?
                    <div className="r-form-social-container">
                        <a href={emailLink}>
                            <IoIosMail className="r-form-email"/>
                        </a>
                        <a href={instaLink}>
                            <RxInstagramLogo className="r-form-insta"/>
                        </a>
                    </div>
                    :
                    <span></span>
                    }
                </div>
                <img src={bigImg === 1? img_redForm_1 : img_redForm_2} alt="inscription form pic" className="r-form-pic" />
            </div>
        </div>
        </>
    )
}
