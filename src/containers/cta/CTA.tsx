import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Subtitle from "../../components/subtitle/Subtitle";
import "./cta.css";

const CTA = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="app__cta">
            <div className="container">
                <div className="app__cta-info">
                    <Subtitle text="Get in touch" />
                    <h2>Think we would be a good fit for your next project?</h2>
                </div>

                <button
                    type="button"
                    className="app__cta-button"
                    onClick={() => setActive(true)}
                >
                    Get in touch
                </button>
            </div>
            <Modal active={active} setActive={setActive} />
        </div>
    );
};

export default CTA;
