import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

import Parallax from "../../components/Parallax/Parallax";
import Container from "../../components/Container/Container";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Portfolio from "./Sections/Portfolio/Portfolio";

import landingPageStyle from "./landingPageStyle";

class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax
          filter
          image={require("../../assets/img/dark_background.jpg")}
        >
          <Container className={classes.container}>
            <GridContainer>
              <GridItem xs={12} md={6}>
                <h1 className={classes.title}>Kit Jonathan Te</h1>
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
        <Container className={classNames(classes.main, classes.mainRaised)}>
          <Container className={classes.container}>
            <Portfolio />
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
        </Container>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
