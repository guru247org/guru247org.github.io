import './App.css';
import { BrowserRouter, NavLink, Route, useLocation, Routes } from 'react-router-dom';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import Resources from './component/pages/Resources';
import Guru24x7 from './component/pages/Guru24x7';
import Service from './component/pages/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ContentAuthor from './component/pages/resources/ContentAuthor';
import OnlineGuide from './component/pages/resources/OnlineGuide';
import SubjectMatter from './component/pages/resources/SubjectMatter';
import ContentEditorial from './component/pages/resources/ContentEditorial';
import ScholarlyContent from './component/pages/services/ScholarlyContent';
import WebBased from './component/pages/services/WebBased';
import ExerciseTypes from './component/pages/services/ExerciseTypes';
import OtherContent from './component/pages/services/OtherContent';
import ContentComposing from './component/pages/services/ContentComposing';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='gap' />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/services" element={<Service />}>
          </Route>
          <Route path="/services/scholarly-content" element={<ScholarlyContent />}>
          </Route>
          <Route path="/services/web-tutoring" element={<WebBased />}>
          </Route>
          <Route path="/services/content-composing" element={<ContentComposing />}>
          </Route>
          <Route path="/services/other-content" element={<OtherContent />}>
          </Route>
          <Route path="/services/exercise-types" element={<ExerciseTypes />}>
          </Route>
          <Route path="/guru-edge" element={<Guru24x7 />}>
          </Route>
          <Route path="#" element={<Resources />}>
          </Route>
          <Route path="/resources/subject-matter" element={<SubjectMatter />}>
          </Route>
          <Route path="/resources/content-editorial" element={<ContentEditorial />}>
          </Route>
          <Route path="/resources/online-guide" element={<OnlineGuide />}>
          </Route>
          <Route path="/resources/content-author" element={<ContentAuthor />}>
          </Route>
          <Route path="/contact-us" element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
