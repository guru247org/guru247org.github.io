import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTitle from '../../assets/images/sidepage_title.jpg'


function Resources() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}>
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', height: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center' }} >

          </div>
        </Grid>
        <Grid
          item
          xs={12}>

        </Grid>
        </Grid>
    </div>
  )
}

export default Resources