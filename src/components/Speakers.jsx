import insp from '../assets/inspiration.svg'
import puri from '../assets/puri.jpg'

const Speakers = () => {
	return (
		<div id="speakers" className="container" >

			<h1 style={{textAlign: 'center'}}>Keynote Speaker</h1>
			<div className = 'container spaced' id = 'steven' data-aos = 'fade-up' data-aos-duration ='1000'>
				<div>
				<h1 id = 'stevendesc'>
					Steven Puri
					<p>
						<em>Co-Founder, Chief Strategy Officer - Centered</em><br/>
						Steven has founded and worked with multiple tech companies. He studied at the University of Southern California, and he is the Co-Founder and CSO of Centered, an app designed to increase focus and productivity.
						<br/><br/><a href='https://www.centered.app/' target='_blank'>Centered</a> is the perfect tool for staying focused and getting stuff done. During the opening ceremony on November 4, Steven will speak about hackathons and their effect on students, as well as Flow State and how Centered helps with focus.
					</p>
				</h1>
				</div>
				<img loading = 'lazy' src = {puri} alt = 'puri'></img>
			</div>

			{/* <div className = 'container spaced' style = {{padding: '0'}}>
				<img src = {insp} alt = 'inspiration'></img>

				<div>
				<h1 style = {{textAlign: 'right'}}>
				<gradient>Inspire</gradient> youth in tech
				<p>
					Sign up to be a guest speaker at ClockHacks and inspire the youth of the future. Give a speech or host a workshop during the event from November 4 to November 6, 2022.
					<br></br><br></br>
					Interested? Email us <a href = 'mailto:business.clockhacks@gmail.com'>here</a>.
				</p>
				</h1>
				</div>

			</div> */}

		</div>
	)
}

export default Speakers;
