import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import myImage from '../assets/m-r.asker.jpeg';
import myImag from '../assets/snow1.jpeg';
import myVide from '../assets/video.mp4';
import myVideo from '../assets/video.mp4';
const About =()=> {
    
    
        return (
            <div>
                <Navbar/>
                <div className='mektep-news'>
                <h1 className='mektep-jani'>Биздин Мектеп <br/>
                  окуучу олимпиададан 2 орундун ээлеп облус туруна жолдонмо алды.</h1>
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
      <div className='sinov'>
        <h1  className='mektep-jani'>Биздин Мектеп Манас тануу боюнча 2 орунду алды.</h1>
        <img
          src={myImag}
          alt="Biz haqimizda"
          style={{ maxWidth: '800px', height: 'auto', borderRadius: '8px',  }}
        />
         <div style={{ marginTop: '20px' }}>
         <h1  className='mektep-jani'>Биздин Мектепте .</h1>
        <video controls style={{ maxWidth: '800px', height: 'auto', }}>
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