import './footer.css';

import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { logo } from '../../assets';

const Footer = () => {

    return (
    <div className="container">
        <div className="app__footer" id='contact'>
                <div className="app__footer-info">
                    <div className="app__footer-info_logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>Powered by Webflow. <br /> All rights reserved Wishbone+Partners, Inc. Licensing.</p>
                </div>

                <div className="app__footer-links">
                    <FaTwitter fontSize={25} cursor={'pointer'}/>
                    <FaInstagram fontSize={25} cursor={'pointer'}/>
                    <FaFacebookF fontSize={25} cursor={'pointer'}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;