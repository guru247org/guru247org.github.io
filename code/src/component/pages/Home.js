import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AboutPic from '../../assets/images/about-pic.jpg'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Slider1 from '../../assets/images/slider1.jpg'
import Slider2 from '../../assets/images/slider2.jpg'
import Slider3 from '../../assets/images/slider3.jpg'
import BannerImg from '../../assets/images/banner-img3.jpg'
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import './Pages.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { BiBookReader, BiEdit, BiVideo, BiEditAlt } from 'react-icons/bi';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Link } from 'react-router-dom';

const TitleSection = () => {
  const data = [
    {
      pic: Slider1,
      title: 'Instruction and realizing is the thing that makes due in what has been realized has been failed to remember.',
      content: 'We are situated among driving substance advancement organizations in India by guaranteeing appropriate quality guidelines and offering adaptable substance improvement answer for our customers.'
    },
    {
      pic: Slider2,
      title: "CONTENT is whatever increases the value of the READER'S life.",
      content: 'Guru24x7 taking in aides association from across the world accomplish their business objectives through its top notch instructive substance and other substance composing related administrations all under one rooftop.'
    },
    {
      pic: Slider3,
      title: 'Alone we can do so minimal together we can accomplish such a great deal',
      content: 'We are a group of devoted experts (counting 70 or more topic specialists and advanced substance journalists) who have a thorough pertinent encounter it that motivates development, information and learning.'
    }
  ]
  const [ind, setInd] = useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setInd(ind == 2 ? 0 : ind + 1);
    }, 6000);
  })

  // console.log(ind, data[ind].pic.AniPic);
  return (
    <div style={{ backgroundImage: `url(${data[ind].pic})`, backgroundSize: 'cover', minHeight: '450px', width: '100%', color: 'white', padding: '20px 0px 20px 0px', textAlign: 'center', backgroundPosition: 'center center' }}>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        minHeight='450px'
      >
        <Grid item xs={1}>
          <IconButton p={0} onClick={() => { setInd(ind === 0 ? 2 : ind - 1) }} style={{ color: 'white' }}><ArrowBackIcon /></IconButton>
        </Grid>
        <Grid item xs={10} alignSelf='center'>
          <div
            style={{
              // margin: '0px 60px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignContent: 'space-around',
              flexDirection: 'column',
            }}>
            <h1 style={{ marginTop: '0px' }}>{data[ind].title}</h1>
            <p style={{ color: 'white' }}>{data[ind].content}</p>
          </div>
        </Grid>
        <Grid item xs={1}>
          <IconButton p={0} onClick={() => setInd(ind === 2 ? 0 : ind + 1)} style={{ color: 'white', padding: '0px' }}><ArrowForwardIcon /></IconButton>
        </Grid>
      </Grid>
    </div >
  )
}
const AboutUs = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        pl={2}
        columnSpacing={5}
      // flex-wrap='wrap'
      >
        <Grid item md={5} xs={12}>
          <center><img src={AboutPic} id="AboutPic" alt={AboutPic} /></center>
        </Grid>
        <Grid item md={7} xs={12}>
          <Box><h3 style={{ color: '#1890cc' }}>About Us</h3>
            <h2 style={{ marginTop: '2px' }}>Guru 24x7</h2>
            <p>Guru 24x7 is a main substance advancement organization situated in Kota, India. It was fused in the year 2020 with a dream to give quality substance improvement administrations to an assortment of business associations across the world. The organization has effectively situated themselves as the prevailing part in the scholarly substance composing administrations up until this point and growing its extent of activities in other substance composing related administrations over the time frame.</p></Box>
        </Grid>
      </Grid>
    </>
  )
}



const OurServices = () => {
  return (
    <>
      <Grid container
        alignItems="flex-start"
        justifyContent='space-around'
        // columnSpacing={5}
        pl={2}
      >
        <Grid item sm={12}>
          <center><h2 style={{ position: 'relative', top: '40px' }}>Our Services</h2></center>
        </Grid>
        <Grid item sm={5} xs={11}>
          <Box className='hovIcon' pl={3}>
            <span className='border-animation'><BiEdit /></span>
            <h3>Scholarly Content composition</h3>
            <p>Guru 24x7 gives complete and bit by bit reading material arrangement. Course book Solutions are exceptionally compelling for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is amazingly useful while planning for tests.</p>
          </Box>
        </Grid>
        <Grid item sm={5} xs={11}>
          <Box className='hovIcon' pl={3}>
            <span className='border-animation'><BiVideo /></span>
            <h3>Web based Tutoring and Query addressing</h3>
            <p>Guru 24x7 gives complete and bit by bit reading material arrangement. Course book Solutions are exceptionally compelling for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is amazingly useful while planning for tests.</p>
          </Box>
        </Grid>
        <Grid item sm={5} xs={11}>
          <Box className='hovIcon' pl={3}>
            <span className='border-animation'><BiEditAlt /></span>
            <h3>Content composing administrations</h3>
            <p>Guru 24x7 gives complete and bit by bit reading material arrangement. Course book Solutions are exceptionally compelling for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is amazingly useful while planning for tests.</p>
          </Box>
        </Grid>
        <Grid item sm={5} xs={11}>
          <Box className='hovIcon' pl={3}>
            <span className='border-animation'><BiBookReader /></span>
            <h3>Other Content composing administrations</h3>
            <p>Guru 24x7 gives complete and bit by bit reading material arrangement. Course book Solutions are exceptionally compelling for Exam Preparation, Test Preparation and Homework Help. The example of inquiries in course book arrangements is amazingly useful while planning for tests.</p>
          </Box>
        </Grid>

      </Grid>
    </>
  )
}



const Guru24x7Edge = () => {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='space-around'
        alignItems='flex-start'
        pl={2}
      >
        <Grid item sm={6} xs={12}
        >
          <b><h2>Guru 24x7 Edge</h2></b>
          <p>Here's some of our key attributes that help Guru 24x7 stand as a dominant player in the content writing domain:-</p>
          <ul style={{ margin: '0px', padding: '0px', textIndent: '-25px', paddingLeft: "15px" }}>
            <li className='hovSelect'><span><CheckRoundedIcon /></span>Quality content at cost effective price.</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> Hardworking team having relevant expertise and experience.</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> All content development solutions under one roof.</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> Utmost assurance towards quality content</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> Our constant client support (through chat or email).</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> Software-Enabled Content (including MathType, MATLAB, STATISTICA etc.)</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span> Plagiarism free content and uptime delivery.</li>
            <li className='hovSelect'><span><CheckRoundedIcon /></span>Specific Talent Acquisition efforts</li>
          </ul>
          <Link
            to="/guru-edge"
            style={{ textTransform: "none", textDecoration: "none", color: "black" }}>
            <Box >
              <ArrowForwardIcon style={{ borderRadius: '50%', backgroundColor: "#1890cc", color: 'white', position: 'relative', top: '10px', margin: '5px 10px 5px 0px' }} />
              Know More
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          alignSelf='center'
          pt={1}>
          <span className='border-design'><img src={BannerImg} width='100%' height='80%' /></span>
        </Grid>
      </Grid>
    </>
  )
}
function Home() {
  return (
    <div>
      <Grid
        container
        justifyContent='center'
        alignItems="center"
      // maxWidth={'98vw'}
      // columnSpacing={2}
      // pl={3}
      >
        <Grid item md={12} alignSelf='center'>
          <TitleSection />
        </Grid>
        <Grid item md={12} p={2} mt={5}>
          <AboutUs />
        </Grid>
        <Grid item md={12} p={2} mt={0}>
          <OurServices />
        </Grid>
        <Grid item md={12} p={2} mt={5}>
          <Guru24x7Edge />
        </Grid>
      </Grid>
    </div >
  )
}

export default Home