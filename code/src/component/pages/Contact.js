import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PageTitle from '../../assets/images/sidepage_title.jpg'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import './Pages.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

const mapStyles = {
  width: '100%',
  height: '70vh',
  border: '0px'
};

const API_KEY = "AIzaSyBv8KxBOtSzbTUKr7JhJ4GSjX3QxEb - LLI";
function Contact() {
  // console.log(process.env.REACT_APP_MAP_API_KEY, API_KEY);

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}>
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', height: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center' }} >
            <div className="title-content" style={{ position: 'relative', top: '50px', left: '50px', width: '80vw', textDecoration: 'none', color: 'white' }}>
              <span>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} /><Link to="/contact-us" style={{ textDecoration: 'none', color: 'white' }}> Contact Us</Link>
              </span>
              <div style={{ width: '80vw' }}><h2 style={{ margin: '15px 0px' }}>Contact Us</h2></div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          p={6}>
          <Grid
            container
            // columnSpacing={5}
            rowSpacing={3}
            alignContent='center'
            justifyContent={'space-evenly'}
          // justifyItems='center'
          // justifySelf={'center'}
          >
            <Grid item sm={3} xs={12}>
              <Card sx={{ maxWidth: 300, minHeight: 200 }}>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="hovContactIcon" style={{ borderRadius: '50%', position: 'static' }}>
                      <span>
                        <MailOutlineOutlinedIcon fontSize='large' style={{ width: '50px', height: '50px', color: '#1890cc' }} />
                      </span>
                    </div>
                    <span style={{ fontWeight: '600', margin: '5px 0px' }}>E-Mail</span>
                    <a
                      href='mailto:gurueducation27@gmail.com'
                      style={{
                        textDecoration: 'none',
                        color: '#727695'
                      }}>gurueducation27@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={3} xs={12}>
              <Card sx={{ maxWidth: 300, minHeight: 200 }}>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="hovContactIcon" style={{ borderRadius: '50%', position: 'static' }}>
                      <span>
                        <FmdGoodOutlinedIcon fontSize='large' style={{ width: '50px', height: '50px', color: '#1890cc' }} />
                      </span>
                    </div>
                    <span style={{ fontWeight: '600', margin: '5px 0px' }}>Location</span>
                    <a
                      href="https://www.google.com/maps/place/Affordable+Housing+Scheme/@25.14551,75.879362,18z/data=!4m5!3m4!1s0x0:0xe06a31aa0fc530d0!8m2!3d25.1452485!4d75.8788674?hl=en-US"
                      style={{
                        textDecoration: 'none',
                        textTransform: "none",
                        textAlign: "center",
                      }}>
                      <span style={{
                        textDecoration: 'none',
                        color: '#727695',
                        fontSize: '16px',
                        textAlign: 'center'
                      }}>A-18 Affordable Housing Scheme, Prem Nagar, Kota, Rajasthan, India - 324004</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Card sx={{ maxWidth: 300, minHeight: 200 }}>
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="hovContactIcon" style={{ borderRadius: '50%', position: 'static' }}>
                      <span>
                        <CallIcon fontSize='large' style={{ width: '50px', height: '50px', color: '#1890cc' }} />
                      </span>
                    </div>
                    <span style={{ fontWeight: '600', margin: '5px 0px' }}>Call</span>
                    <a
                      href="tel:+91-9131675429"
                      style={{
                        textDecoration: 'none',
                        color: '#727695'
                      }}>+91-9131675429</a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
        <Grid
          item
          xs={12}
        >
          <iframe
            width="600"
            height="450"
            style={mapStyles}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/search?key=${API_KEY}&q=Affordable+Housing+Scheme,Prem+Nagar,Kota,Rajasthan,India&center=25.14551022646666, 75.879362068804&zoom=18`}>
          </iframe>
        </Grid>
      </Grid>

    </div>
  )
}

export default Contact