import React from 'react';
import './kahon-list-item.css';

const KahonListItem = ({ kahon, onAddedToCart }) => {
  const { title, model, price, coverImage } = kahon;
  return (
    <div className="kahon-list-item">
      <div className="kahon-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="kahon-details">
        <span className="kahon-title">{title}</span>
        <div className="kahon-model">{model}</div>
        <div className="kahon-price">{price} грн.</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default KahonListItem;
