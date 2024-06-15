import { Ted_Header } from "../components/JSX/header";
import { ProjectSection } from "../components/JSX/project";
import { RedForm } from "../components/JSX/redForm";
import img_redForm_1 from "../assets/img_unete.png"
import img_redForm_2 from "../assets/img_inscribete.png"
import { PathSection } from "../components/JSX/path";
import { Sponsors } from "../components/JSX/sponsors";
import { Speaker } from "../components/JSX/speaker";

export function HomeScreen() {

    return (
        <>
            <div className="top-pic">
                <div>
                    <Ted_Header></Ted_Header>
                </div>
                <div className="layer-bg-dark">
                    <h1 className="txt-top-pic">Ideas change everything</h1>
                </div>
            </div>

            <ProjectSection />

            <RedForm 
                bigImg={1}
                title={"¡Únete a nosotros en un evento que no querrás perderte!"}
                paragraph={"Estamos emocionados de invitarte a este evento lleno de inspiración, aprendizaje y diversión. Conéctate con personas apasionadas y expertos en diversos campos mientras exploramos temas fascinantes y compartimos ideas innovadoras.¡Reserva tu lugar ahora mismo para asegurarte de no perderte esta experiencia única!"}
                buttonLink={""}
                emailLink={"mailto:tedxyouthusaquen@gmail.com"}
                instaLink={"https://www.instagram.com/tedxyouthusaquen/?hl=es"}
                showIcons={true}
            />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />



            <PathSection />

            <Sponsors />
            
            <Speaker />

            <RedForm 
                bigImg={2}
                title={"¡Estamos ansiosos por escuchar tus ideas! "}
                paragraph={"¿Te apasiona compartir tus conocimientos y experiencias con una audiencia ávida de aprender? ¡Esta es tu oportunidad para ser speaker en nuestro próximo evento! Buscamos voces inspiradoras y líderes en sus campos que estén dispuestos a compartir ideas innovadoras, perspectivas únicas y consejos prácticos.¡Presenta tu solicitud para ser speaker hoy y únete a la conversación!"}
                buttonLink={""}
                emailLink={"mailto:tedxyouthusaquen@gmail.com"}
                instaLink={"https://www.instagram.com/tedxyouthusaquen/?hl=es"}
                showIcons={false}
            />
        </>
    )
}