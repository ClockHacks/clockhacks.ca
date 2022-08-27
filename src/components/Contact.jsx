import contact from '../assets/contact.svg'

const Contact = () => {
	return (
		<>
		<div id="contact" className="container spaced" data-aos = 'fade-right' data-aos-duration = '800'>
			<h1>
				Inspire, create, <gradient>innovate</gradient>
				<p>
					Hackathons are a great place to not only learn about tech, but to meet and connect with other likeminded people. If you're a high schooler interested in tech, business, design, or just free merch, ClockHacks is for you.
					<br></br>
					<br></br>
					Interested in Sponsoring? Email us at: (Coming Soon!)
					<br></br>
					Have questions? Reach out to us (here) or join the <a href = 'https://discord.com/invite/UKjQBdy26S'>Discord</a>
				</p>
			</h1>
			<img loading = 'lazy' src = {contact} alt = 'contact'></img>
		</div>

		</>
	)
}

export default Contact;
