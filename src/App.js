import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import FAQ from './components/FAQ.jsx';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Navbar from './components/Navbar'

function App() {
	AOS.init()
	return (
		<div id="app" className="bg-dark-color">
			<Navbar/>

			<Home/>
			<About/>
			<FAQ/>
			<Schedule/>
			<Speakers/>
			<Sponsors/>
			<Team/>
			<Contact/>
			<Footer/>

		</div>
	);
}

export default App;
