import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container >
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
            </Nav>
            <Form className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0 removeTextDec"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action1"><Link to='/customerhome'> Home </Link></Nav.Link>
              <Nav.Link href="#action1"><Link to='/transactionamount'>Transfer Amount </Link></Nav.Link>
              <Nav.Link href="#action1"><Link to='/transactionhistory'>Transaction History </Link></Nav.Link>
            </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
