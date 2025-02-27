import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class Contact extends Component {
    render() {
      
        const position = [40.051485, 69.747641];
        return (
            <div>
                <Navbar/>
                <div className='map-container'>
                    
                <h1 className='map-title'>Биздин дарегибиз.Кыргыз Республикасы Баткен облусу <br/>
                Лейлек району Кайрагач айылы.<span>Teлефон номер:+996505551227</span></h1>
               
                <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
        Биздин дарегибиз.Кыргыз Республикасы<br/>
         Баткен облусу Лейлек району Кайрагач айылы
        </Popup>
      </Marker>
    </MapContainer>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;