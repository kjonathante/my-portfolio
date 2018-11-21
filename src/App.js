import React, { Component } from "react";

import Parallax from "./components/Parallax/Parallax";
import Container from "./components/Container";
import Main from "./components/Main/Main";
import GridContainer from "./components/Grid/GridContainer";
import GridItem from "./components/Grid/GridItem";

class App extends Component {
  render() {
    return (
      <div>
        <Parallax filter image={require("./assets/img/dark_background.jpg")}>
          <Container>
            <GridContainer>
              <GridItem xs={12} md={6}>
                <h1>Kit Jonathan Te</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
              </GridItem>
            </GridContainer>
          </Container>
        </Parallax>
        <Main>
          <Container>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
            <h1>Testing</h1>
          </Container>
        </Main>
      </div>
    );
  }
}

export default App;
