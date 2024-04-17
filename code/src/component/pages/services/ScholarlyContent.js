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

function ScholarlyContent() {
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
                <Link to="/services/scholarly-content" style={{ textDecoration: 'none', color: 'white' }}> Scholarly Content composition</Link>
              </span>
              <div
                style={{ width: '90vw' }}>
                <Box fontSize={{
                  xs: "24px",
                  sm: "32px",
                  md: "38px",
                }}
                  style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                  Scholarly Content Composition
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
                  <h4 style={{ margin: '0px auto' }}>PRE K-12</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>We provide step by step solutions that are easy to understand with a self-explanatory manner with the target areas of grade 3 to 11. We develop test prep as well as class room materials.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ maxWidth: 350, mt: 2, mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 style={{ margin: '0px auto' }}>Advanced Education</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>The term ‘Solution’ is often confused with ‘Answer’. An answer to a question is the ultimate output obtained by simplifying or solving the question.</p>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item sm={8} xs={12} sx={{ p: 4 }}>
              <h2>Scholarly Content Writing</h2>
              <p>Guru 24x7 Education gives complete and bit by bit reading material arrangement. Reading material Solutions are exceptionally successful for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is incredibly useful while planning for tests.</p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>PRE K-12</h3>
              <p>We are among the top K12 schooling content improvement organizations in India. We endeavor to offer over aptitude administrations to a few lofty benefactors from perceived ventures, colleges, and schools. Our group of topic specialists, content scholars, duplicate editors, and experts in evaluation improvement administrations acquire the intuitive, simple to-appreciate, and expanded substance for all your instructive substance related necessities.
                <br />
                We furnish bit by bit arrangements with a clear as crystal way that is straightforward with the objective regions of evaluation 3 to 11. We create test prep just as homeroom materials. We carefully stick to the rules given by K12 instructive specialists while creating content for subjects, serious assessments, K12 courses, scholastic foundations and colleges.</p>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>Advanced Education</h3>
              <p>
                We give course reading answers for advanced education which implies that our answer will assist the understudy with understanding the idea as well as make the points intriguing with definite arrangements. We create understudy driven and personnel cordial online projects for your Institution.<br />
                The term 'Arrangement' is frequently mistaken for 'Answer'. A response to an inquiry is a definitive yield gotten by rearranging or addressing the inquiry. Thus, this may contain only a solitary sentence or a solitary word answer. The cycle or steps associated with contacting that end or answer isn't for the most part examined or clarified.<br />
                An Guru 24x7 created arrangement is set up so that it will assist an understudy with figuring out how to tackle the issue as opposed to simply offer the response.</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default ScholarlyContent
