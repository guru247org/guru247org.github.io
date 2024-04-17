import React, { Component } from 'react'
import './Pages.css'
import PageTitle from '../../assets/images/sidepage_title.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AboutPic from '../../assets/images/about-pic.jpg'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
        >
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', height: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center', color: 'white', alignSelf: 'center' }} >

            <div className="title-content" style={{ position: 'relative', top: '50px', left: '50px', width: '200px', textDecoration: 'none', color: 'white' }}>
              <span>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} /><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}> About Us</Link>
              </span>
              <div style={{ width: '200px' }}><h2 style={{ margin: '15px 0px' }}>About Us</h2></div>
            </div>

          </div>
        </Grid>
        <Grid
          item
          xs={12}
          pt={4}
          pb={3}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            pl={2}
            columnSpacing={5}
          // flex-wrap='wrap'
          >
            <Grid item md={5} xs={12}>
              <center><img src={AboutPic} id="AboutPic" alt={AboutPic} /></center>
            </Grid>
            <Grid item md={7} xs={12} p={2}>
              <Box><h3 style={{ color: '#1890cc' }}>ABOUT US</h3>
                <h2 style={{ marginTop: '2px' }}>Guru 24x7</h2>
                <p>
                  Guru 24x7 is a leading content development company which helps organizations from across the world achieve their business goals through its world class educational content and other content writing related services all under one roof.
                  <br /> <br />
                  Guru 24x7 develops content keeping in mind the students which means our content is student driven. Our team of subject matter experts has relevant expertise and experience, which they draw upon to create content that inspires learning.
                  <br /> <br />
                  It is the result of the team of dedicated professionals (including 100+ Subject Matter experts, and Digital content writers) who works round the clock to help company attain its overall organizational goals along with attaining new heights in the content development industry. This dynamic team possesses rigorous teaching and hands on experience that inspires innovation, knowledge and learning.
                  <br /> <br />
                  At Guru 24x7 we keep our focus on lowering the cost for development of quality content. We always prefer being dynamic by adapting to the changing needs of our clients and make sure that the any feedback from client is valued and implemented promptly.
                </p>
                <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', margin: '5px 0px 0px 0px' }}>Some of our Strengths are:</h3>
                <hr style={{ color: '#727695' }} />
                <ul style={{ listStyle: 'none', margin: '0px', padding: '0px' }}>
                  <Grid container>
                    <Grid sm={6} xs={12} item>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span>Quality content at cost effective price.</li>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span> Hardworking team having relevant expertise and experience.</li>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span> All content development solutions under one roof.</li>

                    </Grid>
                    <Grid sm={6} xs={12} item>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span>Quality content at cost effective price.</li>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span> Hardworking team having relevant expertise and experience.</li>
                      <li className='hovSelect'><span><CheckRoundedIcon /></span> All content development solutions under one roof.</li>

                    </Grid>
                  </Grid>
                </ul>

              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}
export default About;
