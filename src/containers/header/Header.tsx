import './header.css';

import { preview } from '../../assets';
import Subtitle from '../../components/subtitle/Subtitle';

const Header = () =>{

    return (
        <div className="container-l">
            <div className="app__header">
                <div className="app__header-content">
                    <div className='app__header-content__container'>
                        <Subtitle text='Wishbone+Partners'/>
                        <h1>The home of beautiful architecture.</h1>
                        <p>We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.</p>
                        <button type='button'><a href="#about">Read more</a></button>
                    </div>
                </div>

                <div className="app__header-img">
                    <img src={ preview } alt="preview" />
                </div>
            </div>
        </div>
    )
}

export default Header;