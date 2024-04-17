import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTitle from '../../assets/images/sidepage_title.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

function Guru24x7() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}>
          <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', height: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center' }} >
          <div className="title-content" style={{ position: 'relative', top: '50px', left: '50px', width: '80vw', textDecoration: 'none', color: 'white' }}>
              <span>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} /><Link to="/guru-edge" style={{ textDecoration: 'none', color: 'white' }}> Guru 24x7 Edge</Link>
              </span>
              <div style={{ width: '80vw' }}><h2 style={{ margin: '15px 0px' }}>Guru 24x7 Edge</h2></div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          p={3}
        >
          <h2>Guru 24x7 Edget</h2>
          <p>Here's some of our key attributes to help scorium learning stand as dominant player in the content writing domain:</p>
          <ul style={{ margin: '0px', padding: '0px', textIndent: '-45px' }} className='Page-list'>
            <Grid
              container
              spacingColumn={6}
              justifyContent='space-between'
              pl={4}
            >
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Quality content at cost effective price.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  All content development solutions under one roof.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Our constant client support (through chat or email).
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Software-Enabled Content (including Mathtype, MATLAB, STATISTICA etc.)
                </li>
              </Grid>
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Hardworking team having relevant expertise and experience.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Utmost assurance towards quality content.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Plagiarism free content and uptime delivery.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '7px' }} /></span>
                  Specific talent acquisition efforts.
                </li>
              </Grid>
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Guru24x7