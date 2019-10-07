import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td> {index + 1} </td>
        <td> {title} </td>
        <td> {count} </td>
        <td> {total} грн. </td>
        <td>

          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>

          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>

          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>

        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Ваши заказы</h2>
      <table className="table">

        <thead>
          <tr>
            <th>#</th>
            <th>Предметов</th>
            <th>Количество</th>
            <th>Стоимость</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)}
        </tbody>

      </table>

      <div className="total">
        Сумма: {total} грн.
      </div>

    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {

    onIncrease: (id) => {
      console.log(`onIncrease ${id}`)
    },

    onDecrease: (id) => {
      console.log(`onDecrease ${id}`)
    },

    onDelete: (id) => {
      console.log(`onDelete ${id}`)
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);