import React from 'react';
import './kahon-list-item.css';

const KahonListItem = ({ kahon }) => {
  const { title, model, price, coverImage } = kahon;
  return (
    <div className="kahon-list-item">
      <div className="kahon-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="kahon-details">
        <a href="#" className="kahon-title">{title}</a>
        <div className="kahon-model">{model}</div>
        <div className="kahon-price">{price} грн.</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default KahonListItem;
