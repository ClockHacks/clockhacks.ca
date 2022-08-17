import './App.css'; 
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Team from './components/Team';

import Navbar from './components/Navbar'

function App() {
  return (
    <div id="app">
      <Navbar/>

      <About />
      <Contact />
      <FAQ />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Team />

    </div>
  );
}

export default App;
