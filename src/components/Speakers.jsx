import inspire from '../assets/inspiration.svg'
import headshot from '../assets/headshot.svg'

const Speakers = () => {
	return (
		<div id="speakers" className="container">

			<div className = 'container spaced' id = 'speaker' style = {{padding: '0'}} data-aos = 'fade-up' data-aos-duration = '1000'>
			<img src = {inspire} alt = 'inspireimg'></img>
			<h1 style = {{textAlign: 'right'}}>
			<gradient>Inspire</gradient> youth in tech
			<p>
				Sign up to be a guest speaker at ClockHacks and inspire the youth of the future. Give a speech or host a workshop during the event from November 4 to November 6, 2022.
				<br></br><br></br>
				Interested? Email us here: 
			</p>
			</h1>
			</div>

			<h1 style = {{textAlign: 'center'}}>
				Guest Speakers
				<div className = 'container spaced'>
					<h1>
						Bob Joe
						<p>This could be you!</p>
					</h1>
					<img src = {headshot} alt = 'headshot' style = {{width: 'max(25%, 100px)', borderRadius: '50px'}}></img>
				</div>
			</h1>
		</div>
	)
}

export default Speakers;
