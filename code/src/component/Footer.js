import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './pages/Pages.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer'>
            <Grid
                container
                pt={5}
                pb={5}
                pl={2}
                pr={3}
                direction="row"
                bgcolor='#12141b'
                color='white'
                columnSpacing={1}
                justifyContent='space-evenly'
                alignItems='flex-start'
                flex-wrap='wrap'
            >
                <Grid item xs={12} sm={4} alignSelf='flex-start'>
                    <Box>
                        <h3 style={{ borderBottom: 'solid 2px #1890cc', paddingBottom: '15px', display: 'inline-block' }}>About Company</h3>
                        <p style={{ color: 'white', fontSize: '15px' }}>
                            Guru 24x7 is a leading content development company based in Kota, India. It was incorporated in the year 2020 with a vision to provide quality content development services to a variety of business organizations across the world.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} alignSelf='flex-start' >
                    <Box>
                        <h3 style={{ borderBottom: 'solid 2px #1890cc', paddingBottom: '15px', display: 'inline-block' }}>Useful Links</h3>
                        <List>
                            <Link
                                to="/about"
                                style={{ textTransform: "none", textDecoration: "none", color: "black" }}>
                                <ListItem style={{ paddingLeft: '0px', fontSize: '15px', color: 'white' }}>
                                    <CircleIcon p={3} style={{ color: '#1890cc', fontSize: '7px', marginRight: '7px' }} />About us
                                </ListItem>
                            </Link>
                            <Link
                                to="/services"
                                style={{ textTransform: "none", textDecoration: "none", color: "black" }}>
                                <ListItem style={{ paddingLeft: '0px', fontSize: '15px', color: 'white' }}>
                                    <CircleIcon
                                        style={{
                                            color: '#1890cc',
                                            fontSize: '7px',
                                            marginRight: '7px'
                                        }}
                                    />Services
                                </ListItem>
                            </Link>
                            <Link
                                to="/contact-us"
                                style={{ textTransform: "none", textDecoration: "none", color: "black" }}>
                                <ListItem style={{ paddingLeft: '0px', fontSize: '15px', color: 'white' }}>
                                    <CircleIcon
                                        style={{
                                            color: '#1890cc',
                                            fontSize: '7px',
                                            marginRight: '7px'
                                        }}
                                    />Contact Us
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} alignSelf='flex-start'>
                    <Box>
                        <h3 style={{ borderBottom: 'solid 2px #1890cc', paddingBottom: '15px', display: 'inline-block' }}>Contact Us</h3>
                        <List>
                            <ListItem style={{ paddingLeft: '0px', fontSize: '15px', color: 'white' }}>
                                <a
                                    href="https://www.google.com/maps/place/Affordable+Housing+Scheme/@25.14551,75.879362,18z/data=!4m5!3m4!1s0x0:0xe06a31aa0fc530d0!8m2!3d25.1452485!4d75.8788674?hl=en-US"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <FmdGoodOutlinedIcon fontSize='small' style={{
                                        marginRight: '7px',
                                        position: 'relative',
                                        top: '5px'
                                    }} />
                                    A18 Affordable Housing Scheme, Prem Nagar, Kota, Rajasthan, India - 324004
                                </a>
                            </ListItem>
                            <ListItem style={{ paddingLeft: '0px', fontSize: '15px' }}>
                                <a
                                    href="tel:+91-9131675429"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <CallIcon
                                        fontSize='small'
                                        style={{
                                            marginRight: '7px',
                                            position: 'relative',
                                            top: '5px'
                                        }}
                                    /> +91-9131675429
                                </a>
                            </ListItem>
                            <ListItem style={{ paddingLeft: '0px', fontSize: '15px' }}>
                                <a
                                    href='mailto:gurueducation27@gmail.com'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <MailOutlineOutlinedIcon
                                        fontSize='small'
                                        style={{
                                            marginRight: '7px',
                                            position: 'relative',
                                            top: '5px'
                                        }} />gurueducation27@gmail.com
                                </a>
                            </ListItem>
                            <ListItem style={{ paddingLeft: '0px', fontSize: '15px' }}>
                                <a
                                    href='https://www.facebook.com/GURU-247-108047504845851/'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <FacebookIcon
                                        fontSize='small' />
                                </a>
                                <span>   </span>
                                <a
                                    href='https://www.linkedin.com/in/guru-education-535537236'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    <LinkedInIcon fontSize='small' />
                                </a>
                                {/* <TwitterIcon fontSize='small' />  */}
                                {/* <InstagramIcon fontSize='small' />  */}
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
            <Box
                m={0}
                pt={0.7}
                color='white'
                bgcolor='black'
                textAlign='center'
                pb={0.7}
                fontSize='12px'>
                <CopyrightOutlinedIcon style={{ position: 'relative', top: '3px', fontSize: '15px' }} p={0} m={0} /> 2020 <a href="/" style={{ textDecoration: 'none', color: 'white' }}> Guru 24x7 Education</a> | All rights reserved.
            </Box>
        </div>
    )
}

export default Footer