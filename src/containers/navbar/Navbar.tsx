import './navbar.css';
import 'animate.css';
import { logo } from '../../assets';
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Modal from '../../components/modal/Modal';


const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [active, setActive] = useState(false);


    return (
        <div className="container">
            <div className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="app__navbar-links">
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button type='button' className="btn" onClick={() => setActive(true)}>Get template</button>
                </div>

                <div className="app__navbar-burger">
                <FiAlignRight className='menu__burger open-icon'
                    onClick={() => setToggleMenu(true)}
                />
                {toggleMenu&&(
                    <div className="menu__burger menu__burger-open animate__animated  animate__slideInRight">
                        <IoMdClose className='menu__burger close-icon'
                            onClick={() => setToggleMenu(false)}
                        />
                        <div className="app__navbar-buger__links">
                            <ul>
                                <li><a href="#progects">Progects</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#news">News</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>

                            <button type='button' className="btn" onClick={() => setActive(true)}>Get template</button>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <Modal active={active} setActive={setActive}/>
        </div>
    )
}

export default Navbar;