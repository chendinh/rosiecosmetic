import React from "react";
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

//** import File */
import BigBanner    from './BigBanner';
import SmallBanners from './SmallBanners';

class BannerSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
          <div className={classes.BigBanner}>
            <BigBanner/>
          </div>
        </Grid>
        <Grid item xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>
            <div className={classes.SmallBanner}>
              <SmallBanners/>
            </div>
          </Grid>
      </Grid>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    marginBottom: "15px",
    backgroundColor: "",
  },
  BigBanner: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  SmallBanner: {
    marginLeft: "auto",
    marginRight: "auto",
  }
});

export default withStyles(styles)(BannerSection);