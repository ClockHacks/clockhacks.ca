import Apple from "../assets/companies/Apple.png"
import Google from "../assets/companies/Google.png"
import Twilio from "../assets/companies/Twilio.png"
import HE from "../assets/companies/highlanderengineering.jpg"

const goldCompanies = [
	{
		name: "Apple",
		img: Apple,
		link: "https://www.apple.com/ca/",
	},
	{
		name: "Google",
		img: Google,
		link: "https://www.google.ca/",
	},
]
const silverCompanies = [
	{
		name: "Twilio",
		img: Twilio,
		link: "https://www.twilio.com/",
	}
]
const bronzeCompanies = [
	{
		name: "Highlander Engineering",
		img: HE,
		link: "https://www.highlanderengineering.ca/",
	}
]

const Sponsors = () => {
	return (
		<div id="sponsors" className = 'container'>
			<h1 style = {{textAlign: 'center'}}>
				Our Sponsors
				<p>A special thanks to all our sponsors for making ClockHacks possible</p>
			</h1>

			<div className="tier" id = 'gold'>
				<h2>Gold sponsor #1</h2>
				{goldCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.link} target = '_blank' rel='noreferrer'>
								<img src={company.img} alt={company.name}></img>
							</a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			<div className="tier" id = 'silver'>
				<h2>Silver sponsors #2</h2>
				{silverCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.link} target = '_blank' rel='noreferrer'>
								<img src={company.img} alt={company.name}></img>
							</a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			<div className="tier" id = 'bronze'>
				<h2>Bronze sponsors #3</h2>
				{bronzeCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.link} target = '_blank' rel='noreferrer'><img src={company.img} alt={company.name}></img></a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			<hr/>

		</div>
	)
}

export default Sponsors;
