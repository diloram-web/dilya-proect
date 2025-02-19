import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 const Raspisaniya = () => {
    
    
        return (
            <div>
                <Navbar/>
                <div className='raspisaniya'>
                  <h1>Сабактардын ирети</h1>
                  <img src='/r1.jpeg' alt=''/>
                  <img src='/r2.jpeg' alt=''/>
                  <img src='/r3.jpeg' alt=''/>
                </div>
               
                <Footer/>
            </div>
        );
    }


export default Raspisaniya;