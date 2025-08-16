import React, { useState } from "react";
import "./Administrasiya.css";

const admens = [
  { id: 1, title: "gggg", img: "a.fay.jpg", desc: "Мектеп директору" },
  { id: 2, title: "ggg", img: "a.fay.jpg", desc: "ОББ" },
  { id: 3, title: "jjj", img: "a.fay.jpg", desc: "ДТИБОБ" },
];

const Administrasiya = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="item-containe">
      <h1 className="admin-title">Мектеп администрациясы</h1>
      {admens.map((adm) => (
        <div key={adm.id} className="ite" onClick={() => handleShow(adm)}>
          <img src={`./${adm.img}`} alt={adm.title} />
          <h2>{adm.title}</h2>
          <p>{adm.desc}</p>
        </div>
      ))}

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleClose}>X</button>
            <img className="moda-img" src={`./${selectedItem.img}`} alt={selectedItem.title} />
            <h2 className="item-title">{selectedItem.title}</h2>
            <p>{selectedItem.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Administrasiya;
