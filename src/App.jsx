import React from 'react';
import Home from './Home';
import About from './Component/aboutUs/about';
import TermsCondition from './Component/TermsCondition/TermsCondition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FaqPage from './Component/FaqPage/FaqPage';
import Privacy from './Component/Privacy-Policy/Privacy';
import Contact from './Component/ContactUs/Contact';
import AllDeparts from './Component/AllDeparts/AllDeparts';
import Certificates from './Component/All-sub-pages/Certificates/certificates';
import Checkcertificate from './Component/All-sub-pages/Checkcertificate/checkcerttificate';
import Career from './Component/All-sub-pages/Career/Career';
import CampusAmb from './Component/All-sub-pages/CampusAmb/CampusAmb';
import CSE from './Component/All-sub-pages/course-deatils/CSE';
import ECE from './Component/All-sub-pages/course-deatils/ECE';
import Civil from './Component/All-sub-pages/course-deatils/Civil';
import Mechanical from './Component/All-sub-pages/course-deatils/Mechanical';
import Management from './Component/All-sub-pages/course-deatils/Management';
import BioTechnology from './Component/All-sub-pages/course-deatils/Biotechnology';
import Refundpolicy from './Component/All-sub-pages/refundPolicy/Refundpolicy';
import Dev from './Component/All-sub-pages/ComputerScience/Dev';


function App() {
  const PropsDetails = [
    {
      id: 1,
      title: "App Development",
      course_desc: "Crafting seamless and responsive web applications for an enhanced user experience",
      objective: (
        <>
          Android app development aims to create functional and user-friendly applications for the Android operating system, catering to various needs such as entertainment, productivity, and communication.
          <br /><br />
          One of the key aspects of Android app development is the emphasis on diversity and customization. The Android ecosystem supports a vast array of devices with different screen sizes, resolutions, and hardware specifications. Developers strive to create applications that offer a seamless and responsive user experience across this diverse landscape.
        </>
      ),
      eligibility: "There are no specific eligibility criteria for Android app development. However, a strong understanding of programming languages such as Java or Kotlin, familiarity with development tools like Android Studio, and knowledge of app design principles are beneficial.",
      course_outline: "",
      check_curriculum: "The app development curriculum encompasses programming, UI/UX design, and backend development using Swift and Flutter, guiding learners through cross-platform deployment and API integration for a comprehensive skill set.",
      download: "https://drive.google.com/uc?export=download&id=1p65EP0fM3E8txn71uRlE3UO3wG5e490B"
    },
    {
      id: 2,
      title: "Web Development",
      course_desc: "Crafting responsive and dynamic websites for an enhanced user experience",
      objective: (
        <>
          Web development aims to create functional and user-friendly websites, catering to various needs such as information dissemination, e-commerce, and communication.
          <br /><br />
          One of the key aspects of web development is the emphasis on responsive design and dynamic content. Developers strive to create websites that offer a seamless and engaging user experience across different devices and screen sizes.
        </>
      ),
      eligibility: "There are no specific eligibility criteria for web development. However, a strong understanding of programming languages such as HTML, CSS, and JavaScript, familiarity with web development tools, and knowledge of design principles are beneficial.",
      course_outline: "",
      check_curriculum: "The web development curriculum encompasses front-end and back-end development, guiding learners through the creation of dynamic and interactive websites.",
      download: "https://drive.google.com/uc?export=download&id=1p65EP0fM3E8txn71uRlE3UO3wG5e490B"
    }
  ];
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/TermsCondition' element={<TermsCondition />} />
        <Route path='/FaqPage' element={<FaqPage />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AllDeparts' element={<AllDeparts />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/checkcertificate' element={<Checkcertificate />} />
        <Route path='/career' element={<Career />} />
        <Route path='/campusAmb' element={<CampusAmb />} />
        <Route path='/computerscience' element={<CSE />} />
        <Route path='/ece' element={<ECE />} />
        <Route path='/civil' element={<Civil />} />
        <Route path='/mechanical' element={<Mechanical />} />
        <Route path='/management' element={<Management />} />
        <Route path='/biotechnology' element={<BioTechnology />} />
        <Route path='/refundpolicy' element={<Refundpolicy />} />
        <Route path='/computerscience/appdevelopment' element={<Dev
          title={PropsDetails[0].title}
          course_desc={PropsDetails[0].course_desc}
          objective={PropsDetails[0].objective}
          eligibility={PropsDetails[0].eligibility}
          course_outline={PropsDetails[0].course_outline}
          check_curriculum={PropsDetails[0].check_curriculum}
          download={PropsDetails[0].download}
        />
        } />
        <Route path='/computerscience/webdevelopment' element={<Dev 
          title={PropsDetails[1].title}
          course_desc={PropsDetails[1].course_desc}
          objective={PropsDetails[1].objective}
          eligibility={PropsDetails[1].eligibility}
          course_outline={PropsDetails[1].course_outline}
          check_curriculum={PropsDetails[1].check_curriculum}
          download={PropsDetails[1].download}
          />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
