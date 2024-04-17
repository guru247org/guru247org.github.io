import React from 'react'
import Grid from '@mui/material/Grid';
import PageTitle from '../../../assets/images/sidepage_title.jpg'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Pages.css'
import Box from '@mui/material/Box';
import OnlineLearning from '../../../assets/images/services/online-learning.jpg'
import QuestonMark from '../../../assets/images/services/question-mark.jpg'
import { Card, CardMedia } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





function SubjectMatter() {
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
                <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> Resources</Link>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                <Link to="/resources/subject-matter" style={{ textDecoration: 'none', color: 'white' }}> Subject Matter Expert</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Subject Matter Expert
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
            <h2>Subject Matter Expert</h2>
          </center>
          <span>
            It's incredible on the off chance that you are a topic master (SME) in something else you need to know a little about a great deal of things.
          </span>
          <p>
            Topic master in business otherwise called s m e is a person with a profound comprehension of a specific interaction of capacity innovation machine material of sort of hardware. Their master experts who can peruse in the middle of the lines, have a place with the school of contemplations and have a wide scope of training under the summed up classification.
            <br />
            Guru 24x7 has a unique group of 100+ full time topic specialists (SMEs) who have applicable mastery and had thorough educating and active experience that motivates development, information and learning. Our group of (SMEs) can peruse in the middle of the lines and know about all STEM and Business protests and do have differed scope of skill under the summed up class.
          </p>
          <span>Ability of topic specialists (SMEs) at Guru 24x7</span>
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
                  Technical writing
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Asesment and creation of test bank services
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Creation and revision of instructor manual services
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Development of scripting workbooks
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Interactive content creation
                </li>
              </Grid>
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Research and development of content
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Development of academic or otherwise curriculums.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  K-12 education content development.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Higher education content development.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Article writing services.
                </li>
              </Grid>
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default SubjectMatter
