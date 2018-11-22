import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

const style = {
  main: {}
}

function Main(props) {
  const { classes, children, className, ...rest } = props;
  return (
    <div {...rest} className={classNames(classes.main, classes.mainRaised)}>
      {children}
    </div>
  );
}

Main.defaultProps = {
  className: ""
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(Main);