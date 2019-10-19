import './cajon-list-item.css';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CajonListItem = ({ cajon, onAddedToCart }) => {
  const { title, model, price, coverImage } = cajon;

  return (
    <Container style={{ paddingBottom: '5%' }}>
      <Row>
        <Col md={{ span: 6, offset: 4 }} xs={1}>
          <Card className="text-center" style={{ width: '18.4rem' }}>
            <Card.Img variant="top" src={coverImage} />
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Text>  {model} </Card.Text>
              <Card.Title> {price} грн. </Card.Title>
              <Button onClick={onAddedToCart} variant="dark" block> Купить </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  );
}

export default CajonListItem;