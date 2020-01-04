import React from "react";
// import "./custom.scss";
import "./App.css";
import Main from "./components/main";

import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ellie Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main />
    </>
  );
}

export default App;
