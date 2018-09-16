import React from "react";

// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";
import Button     from "@material-ui/core/Button";

class Menu extends React.Component {
  handleClick = () => {
    console.log("menu props:",this.props);
    this.props.history.replace("/a");
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
      <Grid item md/>
        <Grid item 
              md={12}
              lg={12}
              xl={12}>
            <div className={classes.menuDesktop}>
              <Button onClick={this.handleClick}  className={classes.button}>BROWS</Button>
              <Button onClick={this.handleClick}   className={classes.button}>EYES</Button>
              <Button onClick={this.handleClick}  className={classes.button}>FACE</Button>
              <Button onClick={this.handleClick} className={classes.button}>SKIN CARE</Button>
              <Button onClick={this.handleClick} className={classes.button}>LIPS</Button>
              <Button color="secondary" onClick={this.handleClick} className={classes.button}>SALE</Button>
              <Button onClick={this.handleClick} className={classes.button}>BLOG</Button>
            </div>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "50px",
  },
  menuDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  button: {
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "Helvetica Neue",
    marginTop: "15px",
    textAlign: "center",
    margin: "8px",
  }
  
});

export default withStyles(styles)(Menu);
