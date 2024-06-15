import '../CSS/path.scss'
import img_path1 from "../../assets/pathPics/path_1.png"
import img_path2 from "../../assets/pathPics/path_2.png"
import img_path3 from "../../assets/pathPics/path_3.png"
import img_path4 from "../../assets/pathPics/path_4.png"
import img_path5 from "../../assets/pathPics/path_5.png"
import img_path6 from "../../assets/pathPics/path_6.png"

export function PathSection() {
    
    return(
        <>
        <div className="container-path-sec">
            <div className="row-container-path-sec">
            Conoce nuestro recorrido
            </div>
            <div className="row">
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path1} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Persiguiendo Utopías - Trascendencia
                2019 - 2020
            </h4>
            <p className="path-sec-paragraph">
                Persiguiendo utopías fue nuestra primera edición. Este evento tenía una licencia para sólo 100 personas, pero gracias a lo bien que salió, pudimos obtener una licencia para eventos TEDx a gran escala, como lo fue Trascendencia en el 2020.
            </p>
        </div>
    </div>
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path2} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Berraquera
                2020
            </h4>
            <p className="path-sec-paragraph">
                Durante la pandemia decidimos adaptarnos al duro nuevo entorno que nos rodeaba y llevar a cabo nuestro primer evento virtual con una temática muy colombiana y poco común.
            </p>
        </div>
    </div>
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path3} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Perspectivas
                2021
            </h4>
            <p className="path-sec-paragraph">
                Para nuestra cuarta edición decidimos traer al escenario nuevas formas de ver el mundo. Hicimos incluso charlas de parejas, que contaban una misma historia pero desde la forma en que cada uno de ellos la vivió.
            </p>
        </div>
    </div>
</div>
<div className="row">
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path4} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Contracorriente
                2022
            </h4>
            <p className="path-sec-paragraph">
                En esta edición presentamos a nuestro público ideas que lucharan contra lo establecido y que, como los peces koy, tuvieran que luchar contra la corriente para poder llegar a su objetivo.
            </p>
        </div>
    </div>
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path5} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Revoluciones
                2023
            </h4>
            <p className="path-sec-paragraph">
                Este último evento se realizó en el teatro del Gimnasio Moderno y tuvo como protagonistas a personas que se han atrevido a desafiar paradigmas de nuestra sociedad.
            </p>
        </div>
    </div>
    <div className="col">
        <div className="gr-container-path-sec text-center d-flex flex-column align-items-center">
            <img src={img_path6} alt="" className="path-sec-pics mb-3"/>
            <h4 className="path-sec-title">
                Ideas ambulantes
                2024
            </h4>
            <p className="path-sec-paragraph">
                Para nuestra sexta edicion, queremos hacer un evento que salga de nuestra cotidianidad. Vamos a salir a buscar “Ideas ambulantes” por Bogotá que no hayan sido fuertemente escuchadas para poderles dar voz.
            </p>
        </div>
    </div>
</div>

        </div>

        <div className="path-sec-footer"></div>
        </>
    )
}
