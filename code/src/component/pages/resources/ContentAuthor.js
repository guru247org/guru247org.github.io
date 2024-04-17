import React from 'react'
import Grid from '@mui/material/Grid';
import PageTitle from '../../../assets/images/sidepage_title.jpg'
import { Link, NavLink } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../Pages.css'
import Box from '@mui/material/Box';

function ContentAuthor() {
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
                <Link to="/resources/content-author" style={{ textDecoration: 'none', color: 'white' }}> Content Author</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Content Author
                </Box>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ p: 3 }}
        >
          <center>
            <h3>RESOURCES</h3>
            <h2>Content Author</h2>
          </center>
          <span>The mystery of good composing is to say something old in another manner</span>
          <p>
            A substance essayist handles the ideation and making of convincing substance including sites duplicate, whitepapers, blog entry, web-based media substance and item/administration portrayal. A substance author is liable for adding an incentive by effectively captivating clients/partners and keeping a durable brand voice.
            <br />
            It's critical to compose convincing, elegantly composed substance (with faultless SEO specs) to drive advanced showcasing endeavors. Our group of substance composing is effectively ready to manage a wide range of your substance composing necessities going from article/blog composing SEO keeping in touch with distribution work.
            <br />
            At Scorium, we have a group of 10 or more substance authors who make substance to meet all your promoting requires. Our group of substance authors is outfitted with powerful information about different space. We are proficient at conveying data with excellent articles. We additionally offer article/blog composing administrations alongside on page enhancement and off page streamlining administrations to do sound SEO procedures for your advertising endeavors.
          </p>
          <span>Aptitude administrations offered by our substance:</span>
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
                  Website copywriting services
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Corporate profiles and brochures.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Marketing collaterals and product catalogues
                </li>
                <li >
                  <i class="fa fa-check fa-fw" />
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Social media marketing content
                </li>

              </Grid>
              <Grid item sm={5}>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Web content development services.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  Web sales letters and emailers.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  SEO content writing services.
                </li>
                <li >
                  <span style={{ margin: '0px 10px' }}><ArrowForwardIcon style={{ color: '#1890cc', position: 'relative', top: '6px' }} /></span>
                  SEO copyright services.
                </li>
              </Grid>
            </Grid>
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContentAuthor
