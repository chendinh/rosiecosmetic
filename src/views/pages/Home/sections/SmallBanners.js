import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

class SmallBanners extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.box1}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box2}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box3}>
          <div className={classes.imageBanner}/>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    marginBottom: "8px",
    maxWidth: "1000px",
    width: "100%",
    height: "350px",
    display: 'flex',
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row wrap",
      height: "910px",
    }
  },
  box1: {
    marginRight: "5px",
    flexBasis: "33.33333333%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginRight: "0px",
      marginBottom: "8px",

    }
  },
  box2: {
    marginRight: "5px",
    flexBasis: "33.33333333%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginRight: "0px",
      marginBottom: "8px",
    }
  },
  box3: {
    flexBasis: "33.33333333%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginBottom: "8px",

    }
  },
  imageBanner: {
    display: "block",
    width: "100%",
    maxWidth: "280px",
    height: "300px",
    backgroundImage: "url(" + require("../../../../assets/img/hudabanner.jpg") + ")",  },
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }
);

export default withStyles(styles)(SmallBanners);