import React from 'react'
//Constant
import TEXT from 'constants/stringConstants'
//Components
import Grid from '@material-ui/core/Grid'
//Style
import 'components/footer/FooterStyle.css'
//Images
import BatatabitFooter from 'images/BatatabitFooter1.png'


const FooterContent = () => {
    return (
        <footer className="footerContent">
            <Grid container alignItems="center" justify="space-around" className="gridContainer">
              <Grid container item xs={6} direction="column">
                  <Grid item>{TEXT.footer.linkedin}</Grid>
                  <Grid item>{TEXT.footer.crunchbase}</Grid>
                  <Grid item>{TEXT.footer.hackernews}</Grid>
              </Grid>
              <Grid container item xs={6} direction="column">
                  <Grid item>
                      <img src={BatatabitFooter} alt="" />
                  </Grid>
                  <Grid item>{TEXT.footer.copyRight}</Grid>
              </Grid>
            </Grid>
        </footer>
    )
}

export default FooterContent
