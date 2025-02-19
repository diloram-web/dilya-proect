import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg"
import Caro from '../components/Caro';
import Footer from '../components/Footer';
import Administrasiya from '../components/Administrasiya';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                 <HeroImg/>
                 <Caro/> 
                 <Administrasiya/> 
                <Footer/>
            </div>
        );
    }
}

export default Home;