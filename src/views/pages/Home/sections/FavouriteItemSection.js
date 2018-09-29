import React      from "react";
import Slider     from "react-slick";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";
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
        <div className={classes.smallBanner}>
          <Grid container justify="center" className={classes.container}>
            <Grid item className={classes.row}>
              <div className={classes.boxone}>
                <img item className={classes.img} src="https://static.wixstatic.com/media/1f3c0f_168e0be098c740d78ced89e94e9cf2df.jpg/v1/fill/w_300,h_305,al_c,q_80,usm_0.66_1.00_0.01/1f3c0f_168e0be098c740d78ced89e94e9cf2df.webp" alt=""/>
              </div>
              <div className={classes.boxtwo}>
                <img item className={classes.img} src="https://static.wixstatic.com/media/1f3c0f_168e0be098c740d78ced89e94e9cf2df.jpg/v1/fill/w_300,h_305,al_c,q_80,usm_0.66_1.00_0.01/1f3c0f_168e0be098c740d78ced89e94e9cf2df.webp" alt=""/>
              </div>
              <div className={classes.boxthree}>
                <img item className={classes.img} src="https://static.wixstatic.com/media/1f3c0f_168e0be098c740d78ced89e94e9cf2df.jpg/v1/fill/w_300,h_305,al_c,q_80,usm_0.66_1.00_0.01/1f3c0f_168e0be098c740d78ced89e94e9cf2df.webp" alt=""/>
              </div>
              <div className={classes.boxfour}>
                <img item className={classes.img} src="https://static.wixstatic.com/media/1f3c0f_168e0be098c740d78ced89e94e9cf2df.jpg/v1/fill/w_300,h_305,al_c,q_80,usm_0.66_1.00_0.01/1f3c0f_168e0be098c740d78ced89e94e9cf2df.webp" alt=""/>
              </div>
            </Grid>
          </Grid>
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
  smallBanner: {
    display: "block",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
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
  },
  boxone: {
    marginRight: "1.33333333333333%",
    flexBasis: "24%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
  },
  boxtwo: {
    marginRight: "1.33333333333333%",
    flexBasis: "24%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
  },
  boxthree: {
    marginRight: "1.33333333333333%",
    flexBasis: "24%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
  },
  boxfour: {
    flexBasis: "24%",
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    zoom: 1.5,
    verticalAlign: "middle",
    borderStyle: "none",
    [theme.breakpoints.down("xs")]: {
      zoom: 1.7,
    }
  },


  // for Mobile
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

// class SmallBanners extends React.Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     const { classes } = this.props;
//     return (
//       <div>
//       <div className={classes.sectionDesktop}>
//         <div className={classes.box1}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box2}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box3}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box4}>
//           <div className={classes.imageBanner}/>
//         </div>
//       </div>
//       <div className={classes.sectionMobile}>
//       <Slider {...settings}>
//         <div className={classes.box1}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box2}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box3}>
//           <div className={classes.imageBanner}/>
//         </div>
//         <div className={classes.box4}>
//           <div className={classes.imageBanner}/>
//         </div>
//       </Slider>
//     </div>
//     </div>
//     )
//   }
// }
// const styles = theme => ({
//   // for Desktop and Mobile
//   sectionDesktop: {
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
//       display: "none"
//     }
//   },
//   box1: {
//     marginRight: "5px",
//     flexBasis: "25%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginBottom: "8px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }
//   },
//   box2: {
//     marginRight: "5px",
//     flexBasis: "25%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginBottom: "8px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }
//   },
//   box3: {
//     marginRight: "5px",
//     flexBasis: "25%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginBottom: "8px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }
//   },
//   box4: {
//     flexBasis: "25%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     overflow: "hidden",
//     position: "relative",
//     [theme.breakpoints.down("sm")]: {
//       flexBasis: "100%",
//       marginBottom: "8px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     }
//   },
//   sectionMobile: {
//     maxWidth: "300px",
//     width: "100%",
//     height: "280px",
//     marginLeft: "auto",
//     marginRight: "auto",
//     alignItems: "center",
//     justifyContent: "center",
//     [theme.breakpoints.up("md")]: {
//       display: "none"
//     }
//   },
//   imageBanner: {
//     display: "block",
//     width: "100%",
//     maxWidth: "300px",
//     height: "250px",
//     backgroundImage: "url(" + require("../../../../assets/img/hudabanner.jpg") + ")",  },
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     marginLeft: "auto",
//     marginRight: "auto",
//     [theme.breakpoints.down("sm")]: {
//       maxWidth: "300px",
//     }
//   }
// );