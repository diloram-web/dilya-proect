import "./NavbarStyle.css";
import { FaBars, FaSchool, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";



 const Navbar = () => {
       const location = useLocation();
       const { pathname } = location;
    
        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);


        let currentPage = "";
  switch (pathname) {
    case "/":
      currentPage = "Home";
      break;
    case "/project":
      currentPage = "Project";
      break;
    case "/about":
      currentPage = "About";
      break;
    case "/contact":
      currentPage = "Contact";
      break;
    case "/mugalim":
      currentPage = "Mugalim";
      break;
    case "/raspisaniya":
      currentPage = "Raspisaniya";
      break;
    default:
        currentPage = "Page";
  }
        return (
            <div className="header">
                <Link to="/">
                <div className="logo-flex">
                <div className="logo-school"><FaSchool className="logo-school"/></div>
                <h1 className="logo-title"> A.Momunov</h1>
                </div>
             
                </Link>
                <ul className={click ? "nav-menu active":"nav-menu"}>
                    <li className={pathname === "/" ? "active" : ""}>
                        <Link to="/">Негизги </Link>
                    </li>
                    <li className={pathname === "/project" ? "active" : ""}>
                        <Link to="/project">Аккредитация 2020-2021</Link>
                    </li>
                    <li className={pathname === "/about" ? "active" : ""}>
                        <Link to="/about">Мектеп жаңылыктары</Link>
                    </li>
                    <li  className={pathname === "/contact" ? "active" : ""}>
                        <Link to="/contact">Биздин дарегибиз</Link>
                    </li>
                    <li className={pathname === "/mugalim" ? "active" : ""}>
                        <Link to="/mugalim">Мугалимдер жөнүндө</Link>
                    </li>
                    <li className={pathname === "/raspisaniya" ? "active" : ""}>
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
                <div className="current-page">
               Сиз азыр: <strong>{currentPage} <br/>бөлүмдө.</strong>
                </div>
            </div>
        );
    }


export default Navbar;