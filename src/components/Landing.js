import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landing-body">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="myAvatar.png" alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              {/* Tech Stacks */}
              <p>HTML5 | CSS3 | Ruby on Rails | JavaScript | MERN Stack</p>

              {/* Skills*/}
              <div className="skill-icons">
                <i
                  title="Database"
                  className="fa fa-database"
                  aria-hidden="true"
                />

                <i title="Server" className="fa fa-server" aria-hidden="true" />

                <i
                  title="Source Control"
                  className="fa fa-github"
                  aria-hidden="true"
                />

                <i
                  title="Communication"
                  className="fa fa-comments"
                  aria-hidden="true"
                />

                <i
                  title="User-centred"
                  className="fa fa-user-circle"
                  aria-hidden="true"
                />

                <i
                  title="Planning & Documentation"
                  className="fa fa-file-text"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
