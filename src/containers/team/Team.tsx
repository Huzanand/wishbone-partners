import { people1, people2, people3, people4, people5 } from "../../assets";
import People from "../../components/people/People";
import "./team.css";

const Team = () => {

    return (
        <div className="container" id="team">
            <div className="app__team">
                <div className="app__team-info">
                    <h2>Meet our team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                    <button><a href="#">See team</a></button>
                </div>

                <div className="app__team-people">
                    <People imgSrc={people1} name="Stephen Collier" position="Senior Partner"/>
                    <People imgSrc={people4} name="Nolan Peters" position="Associate"/>
                    <People imgSrc={people2} name="Ferris Wonder" position="Associate Partner"/>
                    <People imgSrc={people5} name="Aria Stone" position="Senior Partner"/>
                    <People imgSrc={people3} name="Niko Ferry" position="Partner"/>
                </div>
            </div>
        </div>
    )
}

export default Team;