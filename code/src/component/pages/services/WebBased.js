import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTitle from '../../../assets/images/sidepage_title.jpg'
import OnlineLearning from '../../../assets/images/services/online-learning.jpg'
import QuestonMark from '../../../assets/images/services/question-mark.jpg'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Pages.css'
import { Card, CardMedia } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const WebBased = () => {
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
                <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}> Services </Link>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                <Link to="/services/web-tutoring" style={{ textDecoration: 'none', color: 'white' }}> Web based Tutoring and Query addressing</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Web based Tutoring and Query Addressing
                </Box>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}>
          <Grid
            container
            justifyContent={'flex-start'}
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={4} xs={12} sx={{ pl: 3 }}>
              <ul className='sub-list' style={{ textIndent: '-40px', margin: '15px auto' }}>
                <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/scholarly-content'>
                  <span style={{ margin: '0px 10px' }}>
                    <ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '5px' }} />
                  </span>
                  Scholarly Content composition</NavLink>
                </li>
                <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/web-tutoring'>
                  <span style={{ margin: '0px 10px' }}>
                    <ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '5px' }} />
                  </span>
                  Web based Tutoring and Query addressing</NavLink>
                </li>
                <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/content-composing'>
                  <span style={{ margin: '0px 10px' }}>
                    <ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '5px' }} />
                  </span>
                  Content composing administrations</NavLink>
                </li>
                <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/other-content'>
                  <span style={{ margin: '0px 10px' }}>
                    <ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '5px' }} />
                  </span>
                  Other Content composing administrations</NavLink>
                </li>
                <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/exercise-types'>
                  <span style={{ margin: '0px 10px' }}>
                    <ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '5px' }} />
                  </span>
                  Exercise Types</NavLink>
                </li>
              </ul>

              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={OnlineLearning}></CardMedia>
              </Card>

              <Accordion sx={{ maxWidth: 350, mt: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 style={{ margin: '0px auto' }}>Web Based Tutoring</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>Our tutors have a vast teaching experience and are ready to help the students 24/7.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ maxWidth: 350, mt: 2, mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 style={{ margin: '0px auto' }}>Question Solving</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    We are actively engaged in solving asynchronous Q&A sessions of the students. Our Experts our available 24*7 as per client requirements..
                  </p>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item sm={8} xs={12} sx={{ p: 4 }}>
              <h2>Web based Tutoring and Query Solving</h2>
              <p>Web based Tutoring: Guru 24x7 Education fills in as a unique web based coaching space. Our online guides are adequately fruitful to help understudies for their assorted adapting needs. Our master online coaches are accessible 24 * 7.</p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>Web based Tutoring</h3>
              <p>Coaching is a lot of complex undertaking than creating reading material arrangements. We accept that separated from the subject information a mentor should likewise have an energy for educating on the grounds that as a coach one needs to see each uncertainty that is available in understudy mind and not simply give the arrangement.
                <br />
                Our mentors have a huge showing experience and are prepared to help the understudies every minute of every day.</p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>Question Solving</h3>
              <p>
                We likewise offer administrations identified with Query settling for understudies for Pre-k12 and advanced education in STEM and BUSINESS Subjects.<br />
                We are effectively occupied with addressing nonconcurrent Q&A meetings of the understudies. Our Experts our accessible 24*7 according to customer prerequisites.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default WebBased
