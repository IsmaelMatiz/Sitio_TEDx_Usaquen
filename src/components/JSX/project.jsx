import img_proj from "../../assets/img_q_es_ted.png"
import '../CSS/project.scss'

export function ProjectSection() {
    return(
        <>
            <h1 className="pro-title">Conoce el proyecto</h1>
            <div className="container">
                <h2 className="por-sub-title">¿Que es TEDx?</h2>
                <p className="pro-main-txt">
                    Con el espíritu de ideas que vale la pena difundir, TEDx es un 
                    programa de eventos locales autoorganizados que reúnen a personas 
                    para compartir una experiencia similar a TED. En un evento TEDx, los 
                    oradores en vivo y las intervenciones artísticas se combinan para generar 
                    una discusión profunda y una conexión grupal en torno a la curiosidad y las 
                    ideas. Estos eventos locales auto organizados se denominan TEDx, donde x = evento 
                    TED organizado de forma independiente. Nuestro evento TEDx no está organizado 
                    por conferencias TED, pero se opera bajo una licencia que nos brinda esta 
                    organización.
                </p>
            </div>
            <h2 className="container por-sub-title">¿Que es TEDx Youth Usaquen?</h2>
            <div className="myContainer">
            <div className="pro-float-box">
                    <div className="txt_q_ted">
                    TEDxYouth@Usaquén es el evento más grande de Colombia organizado por voluntarios 
                    jóvenes, que tiene como objetivo dar voz a poderosas ideas de la comunidad que 
                    puedan contagiar e inspirar a la juventud bogotana. En TEDxYouth@Usaquén creemos 
                    que los jóvenes no somos los actores del futuro, sino que somos los actores del presente y por eso trabajamos para identificar ideas poderosas que estén transformando nuestro entorno. 
                    </div>
                </div>                
                <img src={img_proj} alt="Img que es ted" className="pro-img" />                
            </div>
                <h5 className="pro-txt-divisor">
                    Éste es el espacio para darles visibilidad a las grandes ideas, las que más resuenan, las 
                    que contagian a la gente y sobre todo que pueden mejorar el entorno en el que vivimos.
                </h5>
        </>
    )
}