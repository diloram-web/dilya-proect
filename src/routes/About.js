import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import myImage from '../assets/olimp.jpg';
import myImag from '../assets/sinov.jpeg';
import myVide from '../assets/maslinisa.mp4';
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
        
        <video controls style={{ maxWidth: '600px', height: 'auto', }}>
          <source src={myVideo} type="video/mp4" />
          Sizning brauzeringiz video tegi qo'llab-quvvatlamaydi.
        </video>
      </div>
      <div className='sinov'>
        <h1  className='mektep-jani'>Биздин Мектеп Манас тануу боюнча 2 орунду алды.</h1>
        <img
          src={myImag}
          alt="Biz haqimizda"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '8px',  }}
        />
         <div style={{ marginTop: '20px' }}>
         <h1  className='mektep-jani'>Биздин Мектепте Масленица.</h1>
        <video controls style={{ maxWidth: '700px', height: 'auto', }}>
          <source src={myVide} type="video/mp4" />
          Sizning brauzeringiz video tegi qo'llab-quvvatlamaydi.
        </video>
        </div>
      </div>
                 </div>
                 
                <Footer/>
            </div>
        );
    }


export default About;