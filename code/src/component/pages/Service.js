import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTitle from '../../assets/images/sidepage_title.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Service1 from '../../assets/images/services/service1.jpg'
import Service2 from '../../assets/images/services/service2.jpg'
import Service3 from '../../assets/images/services/service3.jpg'
import Service4 from '../../assets/images/services/service4.jpg'
import './Pages.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function Service() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}>
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', height: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center' }} >
            <div className="title-content" style={{ position: 'relative', top: '50px', left: '50px', width: '80vw', textDecoration: 'none', color: 'white' }}>
              <span>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} /><Link to="/services" style={{ textDecoration: 'none', color: 'white' }}> Services</Link>
              </span>
              <div style={{ width: '80vw' }}><h2 style={{ margin: '15px 0px' }}>Services</h2></div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          p={3}
          justifyContent={"center"}
          xs={12}>
          <center>
            <h3>OUR SERVICES</h3>
            <h2>What We Can Offer You</h2>
          </center>
          <Grid
            container
            alignContent={'flex-start'}
            justifyContent={'space-around'}
            spacing={3}
            pt={3}>
            <Grid
              item
            >
              <Card sx={{ maxWidth: 400, minHeight: 670 }}>
                <CardMedia
                  component='img'
                  height='100%'
                  image={Service1} />
                <CardContent>
                  <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '25px' }}>Scholarly Content composition</h3>
                  <p>Guru 24x7 gives complete and bit by bit reading material arrangement. Course book Solutions are exceptionally compelling for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is amazingly useful while planning for tests.</p>
                  <Box>
                    <Link to="/services/scholarly-content" style={{ textDecoration: 'none', color: 'black' }}>
                      <ArrowForwardIcon style={{ borderRadius: '50%', backgroundColor: "#1890cc", color: 'white', position: 'relative', top: '10px', margin: '5px' }} />Read More
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
            >
              <Card sx={{ maxWidth: 400, minHeight: 670 }}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Service2} />
                <CardContent>
                  <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '25px' }}>Web based Tutoring and Query addressing</h3>
                  <p>Guru 24x7 fills in as a unique web based mentoring space. Our online coaches are adequately effective to help understudies for their different adapting needs. Our master online guides are accessible 24 * 7.</p>
                  <Box>
                    <Link to="/services/web-tutoring" style={{ textDecoration: 'none', color: 'black' }}>
                      <ArrowForwardIcon style={{ borderRadius: '50%', backgroundColor: "#1890cc", color: 'white', position: 'relative', top: '10px', margin: '5px' }} />Read More
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
            >
              <Card sx={{ maxWidth: 400, minHeight: 670 }}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Service3} />
                <CardContent>
                  <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '25px' }}>Content composing administrations</h3>
                  <p>It's imperative to compose convincing, elegantly composed substance (with perfect SEO specs) to drive computerized promoting endeavors. Our group of substance journalists is effectively ready to manage a wide range of your substance composing prerequisites going from Article/blog composing, SEO keeping in touch with distribution work.</p>
                  <Box>
                    <Link to="/services/content-composing" style={{ textDecoration: 'none', color: 'black' }}>
                      <ArrowForwardIcon style={{ borderRadius: '50%', backgroundColor: "#1890cc", color: 'white', position: 'relative', top: '10px', margin: '5px' }} />Read More
                    </Link></Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
            >
              <Card sx={{ maxWidth: 400, minHeight: 670 }}>
                <CardMedia
                  component='img'
                  height='250'
                  image={Service4} />
                <CardContent>
                  <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '25px' }}>Other Content composing administrations</h3>
                  <p>There's no uncertainty that we've achieved new statures in substance space over the time frame and will keep on filling in as a main part in the substance brotherhood. Our as of late added business measurements are: Technical composition, Research papers, Press-Release composing, Business composing, and Ghost composing.</p>
                  <Box>
                    <Link to="/services/other-content" style={{ textDecoration: 'none', color: 'black' }}>
                      <ArrowForwardIcon style={{ borderRadius: '50%', backgroundColor: "#1890cc", color: 'white', position: 'relative', top: '10px', margin: '5px' }} />Read More
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Service