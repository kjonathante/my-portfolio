import React, { Component } from "react";

import Parallax from "./components/Parallax/Parallax";
import Container from "./components/Container";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Parallax filter image={require("./assets/img/dark_background.jpg")}>
          <Container style={{ color: "white" }}>
            <h1>Kit Jonathan Te</h1>
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
