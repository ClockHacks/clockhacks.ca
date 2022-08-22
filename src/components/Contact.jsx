import contact from '../assets/contact.svg'

const Contact = () => {
	return (
		<>
		<div id="contact" className="container spaced" data-aos = 'fade-right' data-aos-duration = '800'>
			<h1>
				Important Links and Contact
				<p>
					Inquiry Email: Coming Soon!
					<br></br>
					Business Email: Coming Soon!
					<br></br>
					Sponsorship Package: Coming Soon!
					<br></br> 
					Devpost: Coming Soon!
					<br></br> 
					<br></br>
					<a href = 'https://discord.gg/UKjQBdy26S' target = '_blank'><i class = 'bi bi-discord'></i> Discord</a>
					<br></br>
					<a href = 'https://github.com/ClockHacks' target = '_blank'><i class = 'bi bi-github'></i> GitHub Organization</a>
					<br></br>
					<a target = '_blank'><i class = 'bi bi-linkedin'></i> LinkedIn Organization</a>
				</p>
				<button>Sponsor Us (Coming Soon!)</button>
			</h1>
			<img src = {contact} alt = 'contactimg'></img>
		</div>

		</>
	)
}

export default Contact;
