import React, { Fragment } from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import {
  cajonAddedToCart,
  cajonRemovedFromCart,
  allCajonsRemovedFromCart
} from '../../actions';
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const ShoppingCartTable = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item) => {
    const { id, title, count, total, img } = item;
    return (
      <Container style={{ paddingBottom: '5%' }}>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <Card key={id} className="text-center" style={{ width: '18.4rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {count} шт. </Card.Text>
                <Card.Text> {total} грн. </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex flex-column">
                  <ButtonGroup className="mt-3">
                    <Button
                      variant="light"
                      onClick={() => onDelete(id)}
                      className="btn btn-outline-danger btn-md float-right delete">
                      <i className="fa fa-trash-o" />
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => onDecrease(id)}
                      className="btn btn-outline-warning btn-md float-right minus">
                      <i className="fa fa-minus-circle" />
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => onIncrease(id)}
                      className="btn btn-outline-success btn-md float-right plus">
                      <i className="fa fa-plus-circle" />
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };


  return (
    <Fragment>
      {items.map(renderRow)}
      <Button variant="dark" block disabled>
        Общая стоимость: {orderTotal} грн.
      </Button>
    </Fragment>
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