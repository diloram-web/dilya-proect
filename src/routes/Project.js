import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import "../components/FooterStyle.css"


class Project extends Component {
    render() {
        return (
            <div className='project'>
                <Navbar/>
                <div className='akrwedit-container'>
                <img src='/ak1.jpeg' alt=''/>
                <img src='/ak3.jpeg' alt=''/>
                <img src='/ak2.jpeg' alt=''/>
                </div>
              <Footer/>
            </div>
        );
    }
}

export default Project;