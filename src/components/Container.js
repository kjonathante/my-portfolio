import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const style = {
  container: {
    ...container
  }
}

function Container(props) {
  const {children, classes} = props
  console.log(props)
  return(
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default withStyles(style)(Container)