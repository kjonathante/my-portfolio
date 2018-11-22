import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Parallax from "../../components/Parallax/Parallax";
import Container from "../../components/Container/Container";
import Main from "../../components/Main/Main";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

const style = {
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }
};
class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax
          filter
          image={require("../../assets/img/dark_background.jpg")}
        >
          <Container>
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

export default withStyles(style)(LandingPage);
