import React from 'react';
import './header.css';

const Header = ({ itemsNum, total }) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">Kahons Store</a>
      <a href="" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {itemsNum} предметов в корзине на сумму ({total} грн.)
      </a>
    </header>
  );
};

export default Header;