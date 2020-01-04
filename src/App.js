import React from "react";
import "./App.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
// import { Link } from "react-router-dom";
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
    // <div>
    //   <Layout fixedHeader>
    //     <Header className="header-color" title="Ellie Chen" scroll>
    //       <Navigation>
    //         <Link to="/">Home</Link>
    //         <Link to="/projects">Projects</Link>
    //         <Link to="/contact">Contact</Link>
    //       </Navigation>
    //     </Header>
    //     <Drawer title="Ellie Chen">
    //       <Navigation>
    //         <Link to="/">Home</Link>
    //         <Link to="/projects">Projects</Link>
    //         <Link to="/contact">Contact</Link>
    //       </Navigation>
    //     </Drawer>
    //     <Content>
    //       <div className="page-content" />
    //       <Main />
    //     </Content>
    //   </Layout>
    // </div>
  );
}

export default App;
