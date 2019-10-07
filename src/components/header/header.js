import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = ({ itemsNum, total }) => {
  return (
    <header className="shop-header row">

      <Link to="/">
        <div className="logo text-dark">Kahons Store</div>
      </Link>

      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {itemsNum} предмет(ов) в корзине на сумму ({total} грн.)
        </div>
      </Link>

    </header>
  );
};

export default Header;