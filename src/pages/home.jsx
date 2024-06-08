import { FaInstagram } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import '../components/CSS/home/building.scss';
import { useState } from "react";

export function HomeScreen() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="layerbg-building-p">
                <div className="layerdif-building-p">
                    <div className="d-flex justify-content-center align-items-center layercnt-building-p">
                        <div className="p-2">
                            <h1>SITIO EN CONSTRUCCIÓN</h1>
                            <p>Estamos trabajando en el sitio del evento, por ahora puedes visitarnos en nuestras redes, enviarnos un email o llamarnos.</p>
                            <div className="d-flex justify-content-center justify-content-around align-items-center" >
                                <a href="mailto:tedxyouthusaquen@gmail.com"><MdOutlineEmail className="em-icon"/> </a>
                                <a href="tel:+573162200311"><FaSquarePhoneFlip className="social-icons pho-icon"/></a>
                                <a href="https://www.instagram.com/tedxyouthusaquen/?hl=es" className="ins-icon-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <FaInstagram className={`ins-icon ${isHovered ? "hidden" : ""}`} />
                                    <img className={`ins-icon ${isHovered ? "" : "hidden"} ins-colorful`} src="https://www.physik.hu-berlin.de/en/pld/friday-light-talks/new-instagram-logo-png-full-colour-glyph.png/@@images/image.png" alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}