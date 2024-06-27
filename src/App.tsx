import './App.css';

import {AboutUs, Feedbacks, Footer, Gallery, Header, Navbar, Progress, Team, CTA } from './containers';
import Fullscreen from './components/fullscreen/Fullscreen';
import { fs1, fs2, fs3 } from './assets';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <Modal/> */}
      <AboutUs /> 
      <Fullscreen imgScr={fs1} title='Reeding House' subtitle='Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.'/>
      <Progress />
      <Fullscreen imgScr={fs2} title='Reeding house' subtitle='Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.'/>
      <Feedbacks />
      <Fullscreen imgScr={fs3} title='Reeding house' subtitle='Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.' contentPosition='start'/>
      <Gallery />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
