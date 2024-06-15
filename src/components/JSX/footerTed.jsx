import { IoIosMail } from "react-icons/io";
import { RxInstagramLogo } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import "../CSS/footer.scss"

export function FooterTed() {
    
    return(
        <>
            <footer>
                <h4 className="head-foot">
                ¿Tienes alguna duda? Mándanos un mensaje; estaremos encantados de responderte.
                </h4>
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <IoIosMail className="iconEmail" />
                        <p>tedxyouthusaquen@gmail.com</p>
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <RxInstagramLogo className="iconInsta" />
                        <p>@tedxyouthusaquen</p>
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <IoLogoWhatsapp className="iconWa"/>
                        <p>+57 316 2200311</p>
                    </div>
                </div>
                <hr />
                <p className="copyR">
                Copyright © Tedxyouthusaquen | Todos los derechos reservados
                </p>
            </footer>

        </>
    )
}
