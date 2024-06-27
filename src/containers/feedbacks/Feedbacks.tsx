import './feedbacks.css';

import { customer1, customer2, customer3, customer4 } from '../../assets';

const Feedbacks = () => {

    return (
        <div className="app__feedbacks">
            <div className="container">
                <div className="app__feedbacks-content">
                    <h3>prior clients</h3>
                    <h2>Happy customers.</h2>
                    <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                </div>

                <div className="app__feedbacks-images">
                    <div className="app__feedbacks-images_container">
                        <img src={customer1} alt="customer" />
                    </div>
                    <div className="app__feedbacks-images_container">
                        <img src={customer2} alt="customer" />
                    </div>
                    <div className="app__feedbacks-images_container">
                        <img src={customer3} alt="customer" />
                    </div>
                    <div className="app__feedbacks-images_container">
                        <img src={customer4} alt="customer" />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Feedbacks;