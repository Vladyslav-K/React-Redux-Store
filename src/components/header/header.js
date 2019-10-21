import React from 'react';
import './header.css';
import { Navbar, Nav, Container, NavbarBrand, Row, Col, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';

const menu = (

  <Navbar bg="dark" variant="dark" className="justify-content-center">
    <Row style={{ width: '100%', heigth: '100%' }}>

      <Col xs={4} sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Navbar>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>
                  <Button variant="dark">
                    <i class="fas fa-chevron-right" fa-xs />
                    <Badge variant="ligth">О нас</Badge>
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Col>

      <Col xs={4} sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Navbar>
            <Nav>
              <LinkContainer to="/shop">
                <Nav.Link>
                  <Button variant="dark">
                    <i class="fas fa-hammer" fa-xs />
                    <Badge variant="ligth">Товары</Badge>
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Col>

      <Col xs={4} sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Navbar>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <Button variant="dark">
                    <i class="fas fa-shopping-cart" fa-xs />
                    <Badge variant="dark">Корзина</Badge>
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Col>

    </Row>
  </Navbar>


);

const Header = () => {
  return (
    <>
      <Container style={{ paddingBottom: '7rem' }}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Dropdown
            trigger={['click']}
            overlay={menu}
            animation="slide-up"
          >
            <Navbar.Collapse className="justify-content-center" style={{ paddingLeft: '1%' }}>
              <Navbar>
                <Nav>
                  <Nav.Link>
                    <NavbarBrand>
                      Cajon
                      {` `}
                      <i className="fas fa-store" />
                      {` `}
                      Store
                    </NavbarBrand>
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Navbar.Collapse>
          </Dropdown>
        </Navbar>

      </Container>
    </>
  );
};

export default Header;