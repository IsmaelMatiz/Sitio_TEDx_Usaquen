import { Ted_Header } from "../components/JSX/header";
import { ProjectSection } from "../components/JSX/project";

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
        </>
    )
}