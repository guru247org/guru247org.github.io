import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Guru24x7 from '../assets/logo/guru-logo.png';
import Guru24X7 from '../assets/logo/guru-logo2.png';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const HeaderContact = () => {
  return (
    <div className="contact">
      <Grid container
        width={'95%'}
        m={'auto'}
        pt={'0.1rem'}
        pb={'0.2rem'}
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <Grid item>
          <Grid
            container
            columnSpacing={2}
            height={'100%'}
          >
            <Grid item pt={0.3}>
              <Box><a href="tel:+91-8209324629" className='remove-a'><CallIcon fontSize='small' className='icon' style={{ fontSize: '15px' }} />: +91-8209324629 </a></Box>
            </Grid>
            <Grid item pt={0.3}>
              <Box><a href="mailto:gurueducation27@gmail.com" className='remove-a' ><MailOutlineOutlinedIcon className='icon' fontSize='small' style={{ fontSize: '15px' }} />: gurueducation27@gmail.com</a></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box>
            <span className='follow-us'>Follow us:  </span>
            <a href='https://www.facebook.com/GURU-247-108047504845851/' ><FacebookIcon fontSize='small' className='icon remove-a' style={{ fontSize: '16px' }} /></a>
            {/* <TwitterIcon fontSize='small' className='icon' style={{ fontSize: '15px' }} /> */}
            {/* <InstagramIcon fontSize='small' className='icon' style={{ fontSize: '15px' }} />  */}
            <span>   </span>
            <a href='https://www.linkedin.com/in/guru-education-535537236/'><LinkedInIcon fontSize='small' className='icon remove-a' style={{ fontSize: '16px' }} /></a>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

const Navbar = () => {
  const location = useLocation();
  // const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    // if (location.pathname !== currentPath) {
      hideNavMenu();
      // setCurrentPath(location.pathname);
    // }
    // console.log(location, currentPath);
  }, [location]);

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }
  return (
    <div className='sticky-navbar'>
      <HeaderContact />
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href="/" className='brand-title'><img src={Guru24X7} width='180' /></a>
          <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div ref={navbarLinks} className='navbar-links menu-collapse'>
            <ul className='links-list'>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/about'>About Us</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services'>Services <KeyboardArrowDownOutlinedIcon style={{ position: 'relative', top: '2px', fontSize: '17px' }} /></NavLink>
                <ul className='sub-list'>
                  <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/scholarly-content'>Scholarly Content composition</NavLink> </li>
                  <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/web-tutoring'>Web based Tutoring and Query addressing</NavLink> </li>
                  <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/content-composing'>Content composing administrations</NavLink> </li>
                  <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/other-content'>Other Content composing administrations</NavLink> </li>
                  <li className='nav-item'><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/services/exercise-types'>Exercise Types</NavLink> </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/guru-edge'>Guru Edge</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='#'>Resources<KeyboardArrowDownOutlinedIcon style={{ position: 'relative', top: '2px', fontSize: '17px' }} /> </NavLink>
                <ul className="sub-list">
                  <li className="nav-item"><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/resources/subject-matter'>Subject Matter Expert</NavLink></li>
                  <li className="nav-item"><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/resources/content-editorial'>Content Editorial Manager</NavLink></li>
                  <li className="nav-item"><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/resources/online-guide'>Online Guide</NavLink></li>
                  <li className="nav-item"><NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/resources/content-author'>Content Author</NavLink></li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink activeclassname='is-active' exact={`${true}`} className='nav-link' to='/contact-us'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div >
  )
}

export default Navbar
