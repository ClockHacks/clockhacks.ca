import insp from '../assets/inspiration.svg'

const Speakers = () => {
	return (
		<div id="speakers" className="container">

			<div className = 'container spaced' id = 'speaker' style = {{padding: '0'}} data-aos = 'fade-up' data-aos-duration = '1000'>
				<div style = {{width: '40vw'}}>
					<img src = {insp} alt = 'inspiration'></img>
				</div>

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

			</div>

			<h1 style = {{textAlign: 'center'}}>
				Guest Speakers
				<p>This could be you!</p>
				{/* <div className = 'container spaced'>
					<h1>
						Bob Joe
					</h1>
					<img src = {headshot} alt = 'headshot' style = {{width: 'max(25%, 100px)', borderRadius: '50px'}}></img>
				</div> */}
			</h1>
		</div>
	)
}

export default Speakers;
