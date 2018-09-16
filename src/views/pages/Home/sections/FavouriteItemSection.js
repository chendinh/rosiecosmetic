import React from "react";
import Slider from "react-slick";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//** import File */

class SmallBanners extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { classes } = this.props;
    return (
      <div>
      <div className={classes.sectionDesktop}>
        <div className={classes.box1}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box2}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box3}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box4}>
          <div className={classes.imageBanner}/>
        </div>
      </div>
      <div className={classes.sectionMobile}>
      <Slider {...settings}>
        <div className={classes.box1}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box2}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box3}>
          <div className={classes.imageBanner}/>
        </div>
        <div className={classes.box4}>
          <div className={classes.imageBanner}/>
        </div>
      </Slider>
    </div>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  sectionDesktop: {
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
      display: "none"
    }
  },
  box1: {
    marginRight: "5px",
    flexBasis: "25%",
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
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  box2: {
    marginRight: "5px",
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginBottom: "8px",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  box3: {
    marginRight: "5px",
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginBottom: "8px",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  box4: {
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      marginBottom: "8px",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  sectionMobile: {
    maxWidth: "300px",
    width: "100%",
    height: "280px",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  imageBanner: {
    display: "block",
    width: "100%",
    maxWidth: "300px",
    height: "250px",
    backgroundImage: "url(" + require("../../../../assets/img/hudabanner.jpg") + ")",  },
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    }
  }
);

export default withStyles(styles)(SmallBanners);