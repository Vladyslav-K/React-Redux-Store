import React from 'react';
import './header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <Container style={{ paddingBottom: '6rem' }}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Collapse
            className="justify-content-start"
            style={{ paddingLeft: '10%' }}
          >
            <Navbar style={{ fontSize: 20 }}>
              <Nav className="padding-left">
                <LinkContainer to="/">
                  <Nav.Link>
                    Товары
                </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar>
          </Navbar.Collapse>

          <Navbar.Collapse
            className="justify-content-end"
            style={{ paddingRight: '10%' }}
          >
            <Navbar style={{ fontSize: 20 }}>
              <Nav className="mr-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    Корзина
                </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;