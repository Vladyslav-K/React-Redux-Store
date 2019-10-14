import React from 'react';
import './cajon-list-item.css';

const CajonListItem = ({ cajon, onAddedToCart }) => {
  const { title, model, price, coverImage } = cajon;
  return (
    <div className="cajon-list-item">
      <div className="cajon-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="cajon-details">
        <span className="cajon-title">{title}</span>
        <div className="cajon-model">{model}</div>
        <div className="cajon-price">{price} грн.</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default CajonListItem;
