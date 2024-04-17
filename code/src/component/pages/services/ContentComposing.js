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


function ContentComposing() {
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
                <Link to="/services/content-composing" style={{ textDecoration: 'none', color: 'white' }}> Content composing administrations</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Content composing administrations
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
            </Grid>
            <Grid item sm={8} xs={12} sx={{ p: 4 }}>
              <h2>Content composing administrations (Educational)</h2>
              <p>
                We are the imaginative appraisal composing specialist co-op for customers situated in India. We are one of the thorough appraisal composing organizations disseminating evaluation advancement administrations to our regarded customers from presumed business firms, higher schools, and universities and colleges.
              </p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>Appraisal and Test Bank Creation</h3>
              <p>
                Appraisal of substance improvement program is an exceptionally creative work that requires insight, examination, and ability regarding the matter. Guru 24x7 offers types of assistance of creating tests and evaluation that can assist associations with estimating abilities and information.
                <br />
                Our group of topic specialists, scientists, educated substance essayists, duplicate editors, and quality investigators has pertinent mastery and information to complete the intuitive, simple to perceive, and enlarged substance for all your appraisal composing administration related prerequisites.
                <br />
                The tests we create are useful in for school affirmation assessments in territories, for example, English Verbal thinking, Reading appreciation, Logical thinking, Analytical Reasoning, and Quantitative thinking.
              </p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>Curriculam development</h3>
              <p>
                Our educational program advancement experts fastidiously build the educator coordinates and preparing segments that wrap all the huge subjects of the scholastic prospectus. The advanced education educational plan improvement administrations are an essential division of each school, school, establishment or any business that prepare or instruct their workers.
                <br />
                Our group of topic specialists and substance journalists have sound information on STEM and Business subjects including Chemistry, Mathematics, Biology, and Finance and Accounts educational plan. It is the aftereffect of our persevering group and sound administration framework that we can convey upto the imprint educational program improvement administrations and that too explicitly according to our customer's necessities.
                <br />
                We map the substance of the schedules as needs be to the accreditation principles with the goal that it is extremely significant.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContentComposing