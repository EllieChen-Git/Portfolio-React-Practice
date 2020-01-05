import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ellie Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="order-2 order-sm-3"
        >
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <div className="d-flex flex-row order-3 order-sm-2">
            <ul className="navbar-nav flex-row ml-auto">
              {/* LinkedIn */}
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://www.linkedin.com/in/elliettchen/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </li>
              {/* Github */}
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://github.com/EllieChen-Git"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </li>
              {/* Resume */}
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="Ellie_Chen_Resume.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-file" aria-hidden="true" />
                </a>
              </li>
              {/* Email */}
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="mailto:ellie.tt.chen@gmail.com"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </li>
              {/* Medium */}
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://medium.com/@elliechen.etc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-medium" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
