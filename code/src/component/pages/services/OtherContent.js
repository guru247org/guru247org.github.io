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

function OtherContent() {
    return (
        <div>
            <Grid container>
                <Grid
                    item
                    xs={12}>
                    <div style={{ backgroundImage: `url(${PageTitle})`, backgroundSize: 'cover', minHeight: '180px', width: '100%', alignSelf: 'center', backgroundPosition: 'center center', color: 'white', alignSelf: 'center' }} >

                        <div className="title-content" style={{ position: 'relative', top: '50px', left: '25px', width: '85vw', textDecoration: 'none', color: 'white' }}>
                            <span>
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home </Link> <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                                <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}> Services </Link>
                                <ArrowForwardIosOutlinedIcon style={{ fontSize: '17px', position: 'relative', top: '2px' }} />
                                <Link to="/services/other-content" style={{ textDecoration: 'none', color: 'white' }}> Other Content composing administrations</Link>
                            </span>
                            <div
                                style={{ width: '90vw' }}>
                                <Box fontSize={{
                                    xs: "24px",
                                    sm: "32px",
                                    md: "38px",
                                }}
                                    style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                                    Other Content Composing Administrations
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

                            {/* <Accordion sx={{ maxWidth: 350, mt: 2 }}>
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
              </Accordion> */}
                        </Grid>
                        <Grid item sm={8} xs={12} sx={{ p: 4 }}>
                            <h2>Other Substance Composing Administrations</h2>
                            <p>
                                There's no uncertainty that we've achieved new statures in substance area over the time frame and will keep on filling in as a main part in the substance crew. Our as of late added business measurements are: Technical composition, Research papers, Press-Release composing, Business composing, and Ghost composing.
                            </p>
                            <h3 style={{ color: 'black', fontWeight: 'bold' }}>ARTICLE/BLOG/SEO WRITING</h3>
                            <p>
                                It's critical to compose convincing, elegantly composed substance (with faultless SEO specs) to drive advanced showcasing endeavors. Our group of substance authors is effectively ready to manage a wide range of your substance composing prerequisites going from Article/blog composing, SEO keeping in touch with distribution work.
                                <br />
                                At Scorium, we additionally make substance to meet all your showcasing requires. Our group of substance essayists is outfitted with strong information about different areas. We are adroit at conveying instructive and excellent articles. We additionally offer article/blog composing administrations alongside on-page advancement and off-page enhancement administrations to complete sound SEO procedures for your promoting endeavors.

                            </p>
                            <h3 style={{ color: 'black', fontWeight: 'bold' }}>SPECIALIZED/PRESS-RELEASE/ REASEARCH PAPERS WRITITNG</h3>
                            <p>
                                It is extremely fundamental for an organization to employ an expert specialized substance essayist or entire group of authors to work for your organization. At Guru 24x7, we expect to deliver all the substance composing administrations under one rooftop. We've added new measurements in our business vertical as of late and cover Technical composition, Research papers, Press-Release composing, Business composing, and Ghost composing.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default OtherContent