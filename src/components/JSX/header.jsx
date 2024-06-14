import { IoClose, IoMenu } from "react-icons/io5";
import '../CSS/header.scss'

export function Ted_Header() {
    
    return (
        <>
            <nav className="ted_nav">
                <div className="ted_nav_container">
                    <div className="left_container">
                        <img src="https://formacionejecutivos.com/wp-content/uploads/2014/08/tedx-logo.png" alt="Ted Logo" 
                        className="ted_nav_logo"/>
                        <h1 className="ted_nav_title">
                            Youth@Usaquén
                        </h1>
                    </div>

                    <a href="#menu" className="nav_menu">
                        <IoMenu className="nav-icon"></IoMenu>
                    </a>

                    <a href="#" className="nav_menu nav_menu--second">
                        <IoClose className="nav-icon"></IoClose>
                    </a>

                    <ul className="dropdown" id="menu">
                        <li className="dropdown_list">
                            <a href="#" className="dropdown_link">
                                <span className="dropdown_span">
                                    Conoce el proyecto
                                </span>
                            </a>
                        </li>
                        <li className="dropdown_list">
                            <a href="#" className="dropdown_link">
                                <span className="dropdown_span">
                                    Formulario para ser asistir al evento
                                </span>
                            </a>                            
                        </li>
                        <li className="dropdown_list">
                            <a href="#" className="dropdown_link">
                                <span className="dropdown_span">
                                    Conoce nuestro recorrido
                                </span>
                            </a>
                        </li>
                        <li className="dropdown_list">
                            <a href="#" className="dropdown_link">
                                <span className="dropdown_span">
                                    Formulario para ser speaker
                                </span>
                            </a>
                        </li>
                        <li className="dropdown_list">
                            <a href="#" className="dropdown_link">
                                <span className="dropdown_span">
                                    Contacto
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
