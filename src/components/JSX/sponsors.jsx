import "../CSS/sponsors.scss"

export function Sponsors() {
    
    return(
        <>
        <h1 className="sp-title">Patrocinadores de este evento</h1>
        <div className="row sp-row">
            <div className="col d-flex flex-column align-items-center">
                <div className="sp-logo">‎</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <div className="sp-logo">‎</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <div className="sp-logo">‎</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <div className="sp-logo">‎ </div>
            </div>
        </div>
        <p className="sp-devs">
            Desarrollo web: Ismael Matiz  |  Diseño web: Ana Sofia Matiz
        </p>
        </>
    )
}
