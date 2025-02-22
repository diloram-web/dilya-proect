import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import myImage from '../assets/olimp.jpg';
import myVideo from '../assets/WhatsApp Video 2025-02-20 at 14.33.11.mp4';
const About =()=> {
    
    
        return (
            <div>
                <Navbar/>
                <div className='mektep-news'>
                <h1 className='mektep-jani'>Биздин 11 Б класс окуучубуз <br/>
                  Софиева Зарифа олимпиададан 2 орундун ээлеп облус туруна жолдонмо алды.</h1>
                  <img
          src={myImage}
          alt="Biz haqimizda"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '8px',  }}
        />
          <div style={{ marginTop: '20px' }}>
        
        <video controls style={{ maxWidth: '800px', height: 'auto', }}>
          <source src={myVideo} type="video/mp4" />
          Sizning brauzeringiz video tegi qo'llab-quvvatlamaydi.
        </video>
      </div>
                 </div>
                 
                <Footer/>
            </div>
        );
    }


export default About;