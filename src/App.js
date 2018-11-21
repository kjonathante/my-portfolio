import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Parallax from "./components/Parallax/Parallax";
import Container from "./components/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <div>
        <Parallax filter image={require("./assets/img/dark_background.jpg")}>
          <Container style={{ color: "white" }}>
            <h1>Kit Jonathan Te</h1>
          </Container>
        </Parallax>
        <Paper style={{zIndex: 3}} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
