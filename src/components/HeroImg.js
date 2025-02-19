import "./HeroImgStyle.css";
import React, {useState, useEffect} from 'react';
import {FaAngleDown } from 'react-icons/fa';

const HeroImg = () => {
    const [isVisible, setVisible] = useState(true);


     const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(false);
         } else {
            setVisible(true)
         }
     };

     useEffect(() => {
        window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }
        },[]);
     
        return (
            // <div className="hero">
            //    <div className="mask">
            //       <img className="into-img" src="../assets/Dilya.jpg" alt="fhoto1"/>
            //    </div>
            // </div>
            <section className="hero-section">
            <div className="hero-content">
              <h1 className={`title ${isVisible ? 'visible' : 'hidden'}`}>Мектеп миссиясы: "Алган билимин пайдалана билген, 
                <br/>коомдо өзүнүн ордун таба алган активдүү, <br/>
              билимдүү окуучуларды тарбиялайт"</h1>
             <div><FaAngleDown /></div>
            </div>
          </section>
        );
    }

export default HeroImg;


