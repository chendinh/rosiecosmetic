import React from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

class FavouriteTitle extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.row}>
          <div className={classes.FavouriteTitle}>
            Top Seller 
          </div>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      marginBottom: "40px",
      backgroundColor: "pink",
    }
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  FavouriteTitle: {
    color: "#a0015d",
    fontSize: "38px",
    fontWeight: "300",
    position: "relative",
    fontFamily: "Segoe UI",
    [theme.breakpoints.down("sm")]: {
      marginTop: "18px",
      marginBottom: "18px",
    }
  }
});

export default withStyles(styles)(FavouriteTitle);
