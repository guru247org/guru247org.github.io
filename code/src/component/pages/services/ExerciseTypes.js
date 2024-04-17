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

function ExerciseTypes() {
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
                                <Link to="/services/exercise-types" style={{ textDecoration: 'none', color: 'white' }}>  Exercise Types</Link>
                            </span>
                            <div
                                style={{ width: '90vw' }}>
                                <Box fontSize={{
                                    xs: "24px",
                                    sm: "32px",
                                    md: "38px",
                                }}
                                    style={{ margin: '5px 0px', color: "white", fontWeight: "800" }}>
                                    Exercise Types
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

                            <h3 style={{ color: 'black', fontWeight: 'bold' }}>K-12</h3>
                            <p>
                                Our group has built up an assortment of inquiry types through their thorough information and ability of quite a while that are pointed toward focusing on evaluations 3 to 11.
                                <br />
                                The test-prep material of Guru 24x7 has been set up as certain time oversaw exercise manuals which eventually targets tending to the necessities and prerequisites of the understudy local area.

                            </p>
                            <h3 style={{ color: 'black', fontWeight: 'bold' }}>Advanced Education</h3>
                            <p>
                                Our substance is more understudies driven. It has been set up in a straightforward and clear organization so the understudies might have the option to work out their approaching questions in a problem free -way.
                                <br />
                                We do give worthwhile and functional examples which upgrade the nature of the substance and makes it simple for the understudy local area to peruse and see reasonably. We target giving substance to study hall just as test-prep materials.
                                <br />
                                Along these lines, the substance that has been created helps the understudy in their planning of a few serious tests relating to class level investigations just as expert courses.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ExerciseTypes