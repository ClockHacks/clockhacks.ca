import {React, useEffect, lazy, Suspense} from "react";
import Collaboration from '../assets/collaboration.svg'

const About = () => {

	return (
		<>
		<div id="about" className="container spaced" >

			<div data-aos = 'fade-up' data-aos-duration = '1200'>
			<h1>
				By <gradient loading = 'lazy' > students,</gradient> for <gradient loading = 'lazy' > students</gradient>
			</h1>
			<p>
				ClockHacks is a hackathon created by a group of high school students from Waterloo, Ontario. It is a 40 hour long event themed around time.
				<br></br><br></br>
				Our mission is to make hackathons accessible and fun for high school students around the world. Clockhacks will take place online from November 4, 2022, to November 6, 2022.
				<br></br><br></br>
				At ClockHacks, you will be able to work in teams of up to 4 to create a website, game, app, robot, or whatever tech-related product you want. Activities, speeches, and workshops will be available for you to learn more about the world of tech. At the end of the event, you will pitch your project to a panel of judges and compete for prizes. 
				<br></br><br></br>
				Join hackers from across North America this November for a weekend of fun and innovation at ClockHacks! 
			</p>
			</div>

			<img loading = 'lazy' data-aos = 'fade-up' data-aos-duration = '1200' src = {Collaboration} alt = 'collabimg' className = 'img'></img>

		</div>
		</>
	)
}

export default About;
