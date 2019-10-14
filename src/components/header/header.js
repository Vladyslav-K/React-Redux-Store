import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ items, total }) => {
  const itemsCount = items.map(item => item.count)
  const count = itemsCount.reduce((accum, value) => accum + value, 0)

  return (
    <header className="shop-header row">

      <Link to="/">
        <div className="logo text-dark">Cajons Store</div>
      </Link>

      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {count} предмет(ов) в корзине на сумму ({total} грн.)
        </div>
      </Link>

    </header>
  );
};

const mapStateToProps = ({ cartList: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

export default connect(mapStateToProps)(Header);