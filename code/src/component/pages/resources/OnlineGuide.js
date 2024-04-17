import React from 'react'
import Grid from '@mui/material/Grid';
import PageTitle from '../../../assets/images/sidepage_title.jpg'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Pages.css'
import Box from '@mui/material/Box';

function OnlineGuide() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}>
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', minHeight: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center', color: 'white', alignSelf: 'center' }} >

            <div className="title-content" style={{ position: 'relative', top: '50px', left: '25px', width: '80vw', textDecoration: 'none', color: 'white' }}>
              <span>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home </Link>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> Resources </Link>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                <Link to="/resources/online-guide" style={{ textDecoration: 'none', color: 'white' }}> Online Guide</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Online Guide
                </Box>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ p: 3 }}>
          <center>
            <h3>RESOURCES</h3>
            <h2>Online Guide</h2>
          </center>
          <span>
            There is an incredible distinction among knowing and understanding you can know alot about something and not actually get it.
          </span>
          <p>
            The web based mentoring business complex undertaking than creating course reading arrangements. We accept that separated from the subject information coach should likewise have an energy for educating on the grounds that as a guide one needs to see each uncertainty that is available in understudy mind and not Just give the arrangement.
            <br />
            The part of an online coach can shift from assisting understudies with schoolwork for zeroing in on assessment arrangements to showing full online courses.
            <br />
            Guru 24x7has an armada of online guides, instructing STEM and business subjects. We give internet mentoring administrations that prepare coaches having huge subject information; quality experience and have prepared more than thousands understudies in the online a peruser. Our guides are additionally prepared to help the understudies day in and day out.
          </p>
          <span>Skill of online coaches at Guru 24x7</span>
          <ul style={{ margin: '0px', padding: '0px', textIndent: '-45px' }} className='Page-list'>
            <Grid
              container
              spacingColumn={6}
              justifyContent='space-between'
              pl={4}
            >
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Providing text, video, and whiteboard tutoring
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Students can catch up tutors round the clock
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Cost effective online tutoring services
                </li>

              </Grid>
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  24/7 online tutoring service
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Sharing tutors' profile with clients
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Providing online tutoring services to groups and one-on-one student.
                </li>

              </Grid>
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default OnlineGuide