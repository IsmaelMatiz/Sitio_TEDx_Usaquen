import "../CSS/sponsors.scss"
import img_sponsor1 from "../../assets/sponsors/LOGO_sponsor1.png"
import img_sponsor2 from "../../assets/sponsors/LOGO_sponsor2.png"
import img_sponsor3 from "../../assets/sponsors/LOGO_sponsor3.png"

export function Sponsors() {
    
    return(
        <>
        <h1 className="sp-title">Patrocinadores de este evento</h1>
        <div className="row sp-row">
            <div className="col d-flex flex-column align-items-center">
                <img className="sp-logo" height={300} width={100} src={img_sponsor1}/>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <img className="sp-logo" src={img_sponsor2}/>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <img className="sp-logo" src={img_sponsor3}/>
            </div>
        </div>
        <p className="sp-devs">
            Desarrollo web: Ismael Matiz  |  Diseño web: Ana Sofia Matiz
        </p>
        </>
    )
}
