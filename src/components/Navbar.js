import "./NavbarStyle.css";
import { FaBars, FaSchool, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import {Link} from "react-router-dom";



 const Navbar = () => {
    
        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        return (
            <div className="header">
                <Link to="/">
                <div className="logo-flex">
                <div className="logo-school"><FaSchool className="logo-school"/></div>
                <h1 className="logo-title"> A.Fayziev</h1>
                </div>
             
                </Link>
                <ul className={click ? "nav-menu active":"nav-menu"}>
                    <li>
                        <Link to="/">Негизги </Link>
                    </li>
                    <li>
                        <Link to="/project">Аккредитация 2020-2021</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">Биз жөнүндө</Link>
                    </li> */}
                    <li>
                        <Link to="/contact">Биздин дарегибиз</Link>
                    </li>
                    <li>
                        <Link to="/mugalim">Мугалимдер жөнүндө</Link>
                    </li>
                    <li>
                        <Link to="/raspisaniya">Сабактардын ирети</Link>
                    </li>
                </ul>
                <div className="humberger" onClick={handleClick}>
                    {click ? (

                        <FaTimes size={20} style={{color:"#fff"}} />
                    ) : (

                    <FaBars size={20} style={{color:"#fff"}} />
                    )}
                </div>
            </div>
        );
    }


export default Navbar;