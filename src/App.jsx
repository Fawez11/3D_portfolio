import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  // Loader,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <dir className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </dir>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0' >
          <Contact />
          <StarsCanvas />
          

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
