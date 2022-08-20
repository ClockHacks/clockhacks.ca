import Collaboration from '../assets/collaboration.svg'

const About = () => {

	return (
		<div id="about" className="container spaced" data-aos-duration = '1200'>

			<div>
			<h1>
				By <gradient> students,</gradient> for <gradient> students</gradient>
			</h1>
			<p>
				ClockHacks is a hackathon created by a group of high school students from Waterloo, Ontario.
				<br></br><br></br>
				Our mission is to make hackathons accessible and fun for high school students around the world. Themed around time, Clockhacks will take place online on DATE.
				<br></br><br></br>
				You will be able to work in teams of up to 4 to create a website, game, app, robot, or whatever tech-related product you want. Participate in activites, speeches, workshops, and events to learn more about the world of tech. At the end of the event, pitch your project to a panel of judges and compete for prizes. 
				<br></br><br></br>
				Join hackers from across North America this November for a weekend of fun and innovation at ClockHacks! 
			</p>
			</div>

			<img src = {Collaboration} alt = 'collabimg' className = 'img'></img>

		</div>
	)
}

export default About;
