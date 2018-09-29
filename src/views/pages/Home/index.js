import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

//** Import file */
import BannerSection        from './sections/BannerSection';
import FavouriteTitle       from './sections/FavouriteTitle';
import FavouriteItemSection from './sections/FavouriteItemSection';
import FooterSection        from '../../components/FooterSection';
import HeaderSection        from '../../components/HeaderSection';

class index extends Component {
  render() {
    return (
      <div style={{backgroundColor: "rgb(253, 243, 249)"}}>
        <Grid container justify="center">
          <Grid item xs/>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <HeaderSection history={this.props.history}/>
            <BannerSection/>
            <FavouriteTitle/>
            <FavouriteItemSection/>
          </Grid>
          <Grid item xs/>
          <Grid item xs={12}>
            <FooterSection/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default index;
