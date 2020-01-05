import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 sticky-bottom">
      <Container>
        <Row className="border-top justify-content-between p-3">
          {/* Footer - Copyright  */}
          <Col className="p-0 d-flex justify-content-end" sm={9} lg={12}>
            <p>
              &copy;{new Date().getFullYear()} Ellie Chen - All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
