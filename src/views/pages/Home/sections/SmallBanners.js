import React      from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";

class SmallBanners extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.smallBanner}>
        <Grid container justify="center" className={classes.container}>
          <Grid item className={classes.row}>
            <div className={classes.box1}>
              <img item className={classes.img} src={require("../../../../assets/img/hotsale.png")} alt=""/>
            </div>
            <div className={classes.box2}>
              <img item className={classes.img} src={require("../../../../assets/img/freeshipping.png")} alt=""/>
            </div>
            <div className={classes.box3}>
              <a className={classes.authenticbox} href="product-details.html">
                
              </a>
              <img item className={classes.img} src={require("../../../../assets/img/authentic.jpg")} alt=""/>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  smallBanner: {
    display: "block",
    marginBottom: "10px",
  },
  container: {
    maxWidth: "1000px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
  },   
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "row wrap",
      height: "915px",
    },
  },
  box1: {
    marginRight: "0.5%",
    flexBasis: "33%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    background: "white",
    [theme.breakpoints.down("xs")]: {
      height: "300px",
      flexBasis: "100%",
      marginRight: "0px",
      marginBottom: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    }
  },
  box2: {
    marginRight: "0.5%",
    flexBasis: "33%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      background: "#d6b6be",
      height: "300px",
      flexBasis: "100%",
      marginRight: "0px",
      marginBottom: "10px",
      boxSizing: "border-box",
    },
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    }
    
  },
  box3: {
    flexBasis: "33%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    background: "white",
    [theme.breakpoints.down("xs")]: {
      background: "white",
      height: "300px",
      flexBasis: "100%",
      marginRight: "0px",
      marginBottom: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    }
  },
  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    zoom: 2,
    verticalAlign: "middle",
    borderStyle: "none",
    [theme.breakpoints.down("xs")]: {
      zoom: 2.2,
    }
  },
  authenticbox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "\'Amatic SC\', cursive",
    fontSize: "calc(25px + (30 - 25) * ((100vw - 600px) / (1000 - 600)))",
    transition: "1.3s color",
    textAlign: "center",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(30px + (30 - 30) * ((100vw - 320px) / (600 - 320)))",
    }
  },
  authentic: {
    display: "inline-block",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  }
});

export default withStyles(styles)(SmallBanners);


// class SmallBanners extends React.Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.section}>
//         <div className={classes.box1}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box2}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box3}>
//           <img src="https://static.wixstatic.com/media/1f3c0f_168e0be098c740d78ced89e94e9cf2df.jpg/v1/fill/w_300,h_305,al_c,q_80,usm_0.66_1.00_0.01/1f3c0f_168e0be098c740d78ced89e94e9cf2df.webp" alt=""/>
//         </div>
//       </div>
//     )
//   }
// }
// const styles = theme => ({
//   // for Desktop and Mobile
//   section: {
//     marginBottom: "8px",
//     maxWidth: "1000px",
//     width: "100%",
//     height: "350px",
//     display: 'flex',
//     marginLeft: "auto",
//     marginRight: "auto",
//     [theme.breakpoints.down("sm")]: {
//       flexFlow: "row wrap",
//       height: "910px",
//     }
//   },
//   box1: {
//     marginRight: "5px",
//     flexBasis: "33.33333333%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginRight: "0px",
//       marginBottom: "8px",
//     }
//   },
//   box2: {
//     marginRight: "5px",
//     flexBasis: "33.33333333%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginRight: "0px",
//       marginBottom: "8px",
//     }
//   },
//   box3: {
//     flexBasis: "33.33333333%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginBottom: "8px",

//     }
//   },
//   imageBanner: {
//     display: "block",
//     width: "auto",
//     height: "auto",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     zoom: 1.5,
//     verticalAlign: "middle",
//     backgroundImage: "url(" + require("../../../../assets/img/hudabanner.jpg") + ")",  },
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     marginLeft: "auto",
//     marginRight: "auto",
    
//   }
// );

// export default withStyles(styles)(SmallBanners);