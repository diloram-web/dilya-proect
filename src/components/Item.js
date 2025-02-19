// // // import React from 'react';
// // // import Items from './Items';
// // // import ShowFullItem from './ShowFullItem';
// // // import ShowFullItem from './ShowFullItem';
// // // import Categories from './Categories';

// // // class Item extends React.Component {
// // //     constructor(props) {
// // //       super(props);
  
// // //       this.state = {
// // //         currentItems: [],

// // //  items: [
// // //         { id: 1, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 2, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// // //         { id: 3, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 4, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// // //         { id: 5, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// // //         { id: 6, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// // //         { id: 7, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 8, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// // //         { id: 9, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 10, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 11, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// // //         { id: 12, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 13, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// // //         { id: 14, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// // //         { id: 15, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// // //         { id: 16, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 17, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// // //         { id: 18, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 19, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 20, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// // //         { id: 21, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 22, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// // //         { id: 23, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// // //         { id: 24, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// // //         { id: 25, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 26, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// // //         { id: 27, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 28, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 29, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// // //         { id: 30, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// // //         { id: 31, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// // //         { id: 32, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// // //         { id: 33, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// // //         { id: 34, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //         { id: 35, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// // //         { id: 36, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// // //       ],
// // //       showFullItem: false,
// // //       fullItem: [],
// // //     };

// // //     this.state.currentItems = this.state.items;
// // //     this.chooseCategory = this.chooseCategory.bind(this);
// // //     this.onShowItem = this.onShowItem.bind(this);
// // //   }
// // //   onShowItem(item) {
// // //     this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
// // //   }

// // //   chooseCategory(category) {
// // //     if (category === "all") {
// // //       this.setState({ currentItems: this.state.items });
// // //       return;
// // //     }
// // //     this.setState({
// // //       currentItems: this.state.items.filter(el => el.category === category),
// // //     });
// // //   }
// // //     render(){

// // //         console.log("Item props:", this.props);

     
// // //         return (
            
// // //                 <div className='item'>
// // //                     <img src={'../images/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="foto"/>
// // //                     <h2>{this.props.item.title}</h2>
// // //                     <p>{this.props.item.desc}</p>
// // //                 </div>
// // //             )}
            




           
// //             // <div className='item'>
// //             //         <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
// //             //             {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/>}
// //             //  {/* <img src={'../assets/'+ this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="foto"/>  */}
// //             //  <img src={'../assets/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="foto"/>

// //             //   <h2>{this.props.item.title}</h2>
// //             //  <p>{this.props.item.desc}</p>
            
// //             //  {/* <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div> */}
             
// //             // </div>
            
    
// // //     }




// // // export default Item;



// // import React, { useState, useCallback } from "react";

// // const Item = (props) => {
// //     const [currentItems, setCurrentItems] = useState(props.items || []);
// //     const [showFullItem, setShowFullItem] = useState(false);
// //     const [fullItem, setFullItem] = useState(null);

    
          
// //               this.state = {
// //            currentItems: [],
        
// //          items: [
// //                 { id: 1, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 2, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// //                 { id: 3, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 4, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// //                 { id: 5, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// //                 { id: 6, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// //                 { id: 7, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 8, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// //                 { id: 9, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 10, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 11, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// //                 { id: 12, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 13, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// //                 { id: 14, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// //                 { id: 15, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// //                 { id: 16, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 17, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// //                 { id: 18, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 19, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 20, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// //                 { id: 21, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 22, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// //                 { id: 23, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// //                 { id: 24, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// //                 { id: 25, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 26, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// //                 { id: 27, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 28, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 29, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
// //                 { id: 30, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
// //                 { id: 31, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
// //                 { id: 32, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
// //                 { id: 33, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
// //                 { id: 34, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //                 { id: 35, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
// //                 { id: 36, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
// //               ],
// //               showFullItem: false,
// //               fullItem: [],
// //             };
        
// //             this.state.currentItems = this.state.items;
// //             this.chooseCategory = this.chooseCategory.bind(this);
// //             this.onShowItem = this.onShowItem.bind(this);
// //           }

// //     const chooseCategory = useCallback((category) => {
// //         if (category === "all") {
// //             setCurrentItems(props.items);
// //         } else {
// //             setCurrentItems(props.items.filter(el => el.category === category));
// //         }
// //     }, [props.items]);

// //     return (
// //         <div className='item'>
// //             {props.item && (
// //                 <>
// //                     <img src={'../assets/' + props.item.img} onClick={() => setFullItem(props.item)} alt="foto" />
// //                     <h2>{props.item.title}</h2>
// //                     <p>{props.item.desc}</p>
// //                 </>
// //             )}
// //         </div>
// //     );

// // }

// // export default Item;
// import React from "react";

// const Item = ({ item, onShowItem }) => {
//   return (
//     <div className="item">
//       <img
//         src={`../assets/${item.img}`}
//         onClick={() => onShowItem(item)}
//         alt="foto"
//       />
//       <h2>{item.title}</h2>
//       <p>{item.desc}</p>
//     </div>
   
//   );
//   console.log(item.img)
// };


// export default Item;
////////////////////////////////
/////////////////////////////////////
////////////////////////////////////////////////////
import React, { useState } from "react";
import "./Item.css";

const Item = ({ item }) => {
    const [showFull, setShowFull] = useState(false);

    const handleShow = () => {
        setShowFull(true);
    };

    const handleClose = () => {
        setShowFull(false);
    };

    return (
        <div className="item-container">
            <div className="item" onClick={handleShow}>
                <img src={`./${item.img}`} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </div>

            {showFull && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={handleClose}>X</button>
                        <img src={`./${item.img}`} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Item;
