import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Team from './components/Team';

import Navbar from './components/Navbar'

function App() {
	return (
		<div id="app" className="bg-dark-color">
			<Navbar/>

			<Home/>
			<About/>
			<FAQ/>
			<Schedule/>
			<Sponsors/>
			<Speakers/>
			<Team/>
			<Contact/>

		</div>
	);
}

export default App;
