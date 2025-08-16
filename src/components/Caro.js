// import React, { useState } from "react";
// import { FaLessThan } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa";
// import "../components/CarouselStyle.css";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Keyingi slayderga o'tish
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Oldingi slayderga o'tish
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div>
//          <h1 className="my-h1">Мектебим менин сыймыгым!!!</h1>
//     <div className="carousel-container">
//       <div className="carousel">
//         <button className="carousel-button" onClick={handlePrevious}>
//           <FaLessThan />
//         </button>
//         <div className="carousel-image">
//           <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </div>
//         <button className="carousel-button" onClick={handleNext}>
//         <FaGreaterThan />
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Carousel;

///////////////////////
////////////////////////
//////////////////////////////

import React from "react"; 
import { Carousel } from 'react-responsive-carousel';
import "../components/CaroStyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Caro= () => {

  const carouselImages = [
    "mektep.jpeg",
    "mektep.ichi.jpeg",
    "mektep.ashk.jpeg",
    "mektep.jpeg",
    "mektep.ichi.jpeg",
    "mektep.ashk.jpeg",
   
  ];
  console.log(carouselImages)

    return (
      <>
      <h1 className="caro-title">Мектебим менин сыймыгым!!!</h1>
        
             <div className="carousel-section">
        <div className='carusel1'>
        <Carousel className="ma" showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img className="carousel-img" src={img} alt={`Carousel ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        </div>
        <div className='carusel2'>
        <Carousel className="ma" showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img className="carousel-img" src={img} alt={`Carousel ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        </div>
      </div>
      </>
    )
}
export default Caro



/////////////////////////////
//////////////////////////////
//////////////////////////////



// const CarouselComponent = () => {
//   const images = [
//     "https://via.placeholder.com/800x400?text=Slide+1",
//     "https://via.placeholder.com/800x400?text=Slide+2",
//     "https://via.placeholder.com/800x400?text=Slide+3"
//   ];

//   return (
//     <div className="carousel-container">
//       <Carousel
//         showThumbs={false} // Pastdagi mayda rasmchalarni yo‘q qiladi
//         autoPlay={true} // Slideshow avtomatik ishlaydi
//         infiniteLoop={true} // Doimiy ravishda aylantirib turadi
//         showStatus={false} // Slide tartib raqamini olib tashlaydi
//       >
//         {images.map((img, index) => (
//           <div key={index}>
//             <img src={img} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselComponent;

