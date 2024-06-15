import img_spk from "../../assets/img_speaker.png"
import "../CSS/speaker.scss"

export function Speaker() {
    
    return(
        <>
            <div className="spk-container">
                <h3 className="spk-title">
                ¿Quieres ser speaker?
                </h3>
                <div className="row">
                    <div className="col">
                        <p>
                        Antes de presentar la solicitud, familiarízate con nuestras pautas para asegurarte de que su charla se alinee con la misión de TED: Ideas que vale la pena difundir.
                        <br />
                        <br />
                        Aquí hay algunos puntos clave para recordar
                        </p>
                        <ul>
                            <li>
                            <strong>Centrarse en las ideas, no en la afiliación:</strong> TED es una plataforma para ideas, no para creencias religiosas, promoción de empresas o agendas políticas
                            </li>
                            <li>
                            <strong>Manténte fundamentado en la ciencia:</strong> respalda tus ideas con evidencia y manténte alejado de la pseudociencia
                            </li>
                            <li><strong>Promover acciones positivas:</strong> inspirar y empoderar, evitando cualquier contenido que incite a actividades ilegales.</li>
                            <li><strong>La acción habla más que las palabras:</strong> una gran idea necesita acción detrás de ella. Cuéntanos qué has hecho para hacer realidad tu idea.</li>
                        </ul>
                    </div>
                    <div className="col">
                        <img src={img_spk} alt="imagen speaker ted" />
                    </div>
                </div>
                <p className="spk-desc">
                ¡Nuestro equipo de curaduría está aquí para ayudar! Trabajarán contigo para perfeccionar tu concepto, asegurándose de que tu charla sea clara, impactante y lista para atraer a la audiencia.
                </p>
            </div>
        </>
    )
}
