import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Ваши заказы</h2>
      <table className="table">

        <thead>
          <th>#</th>
          <th>Предметов</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Действие</th>
        </thead>

        <tbody>
          <td>1</td>
          <td>"Весельчак"</td>
          <td>2</td>
          <td>2000 грн.</td>
          <td>
            <button className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tbody>

      </table>

      <div className="total">
        Сумма: 4000 грн.
      </div>

    </div>
  );
};

export default ShoppingCartTable;