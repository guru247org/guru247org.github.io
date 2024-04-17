import React from 'react'
import Grid from '@mui/material/Grid';
import PageTitle from '../../../assets/images/sidepage_title.jpg'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Pages.css'
import Box from '@mui/material/Box';

function ContentEditorial() {
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
                <Link to="/resources/content-editorial" style={{ textDecoration: 'none', color: 'white' }}> Content Editorial Manager</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Content Editorial Manager
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
            <h2>Content Editorial Manager</h2>
          </center>
          <span>
            A decent proofreader is somebody who minds somewhat less about the writer's did that the peruser's
          </span>
          <p>
            Content editors make, edit, and distribute content that utilized on sites and disconnected materials. Their liable for all parts of substance cover which incorporates improvement, plan, creation, introduction, assessment to examination.
            <br />
            The substance proofreader is entrusted with guaranteeing that all the substance keep an elevated expectation in quality, which will be related to the business' image. In the exhibition of this capacity, the substance manager edit and alters material through their different stages right from conceptualization to their distribution.
            <br />
            Guru 24x7has a great substance altering group (counting copyediting specialists and substance planner) who guarantees that content conveyance is liberated from any linguistic blunders and is good for distributing reason.
          </p>
          <span>Skill of substance editors at Guru 24x7learning</span>
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
                  Editing
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Formatting
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Enhanced coherence
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Adhering to editorial guidelines
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Flawless and impactful business documents
                </li>
              </Grid>
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Proofreading
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Efficient in removing language errors
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Clarity, style and impact
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Confidential, safe and secure service
                </li>
              </Grid>
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContentEditorial