import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Form, Col, Button } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ellie Chen</h2>
            <img src="myAvatar.png" alt="avatar" className="avatar-img" />
            <p>
              Hello world! I'm Ellie and I'm passionate about coding.
              <br />I have an inquisitive mind and enjoy turning challenges into
              adventures!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Details</h2>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    ellie.tt.chen@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-github-alt" aria-hidden="true" />
                    GitHub id: EllieChen-Git
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (AUS +61) 0475-255-677
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <hr />
          <Cell col={12}>
            <Form>
              <h2>Contact Form</h2>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control required type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control required type="email" placeholder="Email" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  required
                  placeholder="Message"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <Button variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
