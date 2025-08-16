import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Item from '../components/Item';
//import Items from '../components/Items';
//import Categories from '../components/Categories';
// import Item from '../components/Item';
 //import ShowFullItem from '../components/ShowFullItem';
 const items= [
  { id: 8, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
    { id: 1, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 2, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'Англис тили мугалим', category: 'Англис тили мугалим' },
    { id: 3, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'Баштапгыч класс мугалим', category: 'Баштапгыч класс мугалим' },
    { id: 4, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'Тарых мугалим', category: 'Тарых мугалим' },
    { id: 5, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'Баштапгыч класс мугалим', category: 'Баштапгыч класс мугалим' },
    { id: 6, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
    { id: 7, title: "Ахмадалиева Дилорам ", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
   
    { id: 9, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 10, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 11, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
    { id: 12, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 13, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
    { id: 14, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
    { id: 15, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
    { id: 16, title: "Ахмадалиева Дилорам ", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 17, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
    { id: 18, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 19, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 20, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
    { id: 21, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 22, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
    { id: 23, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
    { id: 24, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
    { id: 25, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 26, title: "Ахмадалиева Дилорам ", img:  'dil.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
    { id: 27, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 28, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 29, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
    { id: 30, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
    { id: 31, title: "Ахмадалиева Дилорам ", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
    { id: 32, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
    { id: 33, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
    { id: 34, title: "Ахмадалиева Дилорам", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
    { id: 35, title: "Ахмадалиева Дилорам", img:  'dil.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
    
  ];

 const Mugalim = () => {
   
    
        return (
            <div>
                  <Navbar/>
                 <h1 className='mugalim-title'>Биздин ардагер мугалимдер.</h1> 
                 
                 <div className="items-wrapper">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
                  
                 {/* <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/>} */}
        {/* <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/>} */}
                  <Footer/>
               
            </div>
        );
    }
    // onShowItem(item) {
    //     this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
    //   }
    
    //   chooseCategory(category) {
    //     if (category === "all") {
    //       this.setState({ currentItems: this.state.items });
    //       return;
    //     }
    //     this.setState({
    //       currentItems: this.state.items.filter(el => el.category === category),
    //     });
    // }


export default Mugalim;