import contact from '../assets/contact.svg'
import gear2 from '../assets/images/gear1.png'

const Contact = () => {
	return (
		<>
		<div id="contact" className="container spaced">
			<h1>
				Inspire, create, <gradient loading = 'lazy' >innovate</gradient>
				<p>
					Hackathons are a great place to not only learn about tech, but to meet and connect with other likeminded people. If you're a high schooler interested in tech, business, design, or just free merch, ClockHacks is for you.
					<br></br>
					<br></br>
					Interested in Sponsoring? Email our <a href = 'mailto:business.clockhacks@gmail.com'>business email</a>.
					<br></br>
					Have questions? Reach out to us <a href = 'mailto:hello.clockhacks@gmail.com'>here</a> or join the <a href = 'https://discord.com/invite/UKjQBdy26S'>Discord</a>
				</p>
			</h1>
			<img loading = 'lazy' src = {contact} alt = 'contact'></img>
		</div>

		</>
	)
}

export default Contact;
