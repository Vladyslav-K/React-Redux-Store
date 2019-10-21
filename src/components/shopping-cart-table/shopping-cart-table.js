import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import {
  cajonAddedToCart,
  cajonRemovedFromCart,
  allCajonsRemovedFromCart
} from '../../actions';
import { ButtonGroup, Button, Table } from 'react-bootstrap';

const ShoppingCartTable = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item) => {
    const { id, title, count, total } = item;
    return (
      <tr>
        <td> {title} </td>
        <td> {total} <i class="fa fa-hryvnia" fa-xs /> </td>
        <td>
          <ButtonGroup size="sm" style={{ width: '100%' }}>
            <Button
              sm
              variant="light"
              onClick={() => onDecrease(id)}
              className="btn btn-outline-warning minus">
              <i className="fa fa-sm fa-minus-circle" />
            </Button>
            <Button variant="dark" disabled>{count}</Button>
            <Button
              sm
              variant="light"
              onClick={() => onIncrease(id)}
              className="btn btn-outline-success plus">
              <i className="fa fa-sm fa-plus-circle" />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  };


  return (
    <>

      <Table striped bordered hover variant="dark" size="sm"
        className="text-center justify-content-center"
        style={{ width: '100%', height: '100%', fontSize: '1rem' }}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Стоимость</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </Table>

      <Button variant="dark" block disabled>
        Общая стоимость: {orderTotal} грн.
      </Button>
    </>
  );
};

const mapStateToProps = ({ cartList: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    orderTotal: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: cajonAddedToCart,
  onDecrease: cajonRemovedFromCart,
  onDelete: allCajonsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);