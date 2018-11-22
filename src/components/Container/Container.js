import React from "react";
import PropTypes from "prop-types";
// import withStyles from "@material-ui/core/styles/withStyles";

// const style = {
//   container: {}
// };

function Container(props) {
  const { classes, children, className, ...rest } = props;
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
}

// Container.defaultProps = {
//   className: ""
// };

Container.propTypes = {
  // classes: PropTypes.object.inRequired,
  classes: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};

//export default withStyles(style)(Container);
export default Container;
