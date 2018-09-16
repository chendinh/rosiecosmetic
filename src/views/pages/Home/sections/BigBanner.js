import React from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

class BigBanner extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.row}>
          <div className={classes.imageBanner}/>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    marginTop: "25px",
    marginBottom: "8px",
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "110px",
    }
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageBanner: {
    display: "block",
    width: "100%",
    maxWidth: "1000px",
    height: "500px",
    backgroundImage: "url(" + require("../../../../assets/img/hudabanner.jpg") + ")",  },
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }
);

export default withStyles(styles)(BigBanner);