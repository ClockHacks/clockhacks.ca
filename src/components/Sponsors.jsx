import sponsor from '../assets/sponsor.svg'

import watch from '../assets/images/watch.png'

import hackclub from '../assets/sponsors/hackclub.png'
import mlh from '../assets/sponsors/mlh.png'
import triviaimg from '../assets/sponsors/triviaclub.png'
import standout from '../assets/sponsors/standout.png'
import certopus from '../assets/sponsors/certopus_original.png'
import taskade from '../assets/sponsors/taskade.png'
import cake from '../assets/sponsors/cake_logo_blue_gray.png'
import aops from '../assets/sponsors/aops.svg'
import desmos from '../assets/sponsors/desmos.png'

const partners = {
	hc: {
		img: hackclub,
		href: 'https://hackclub.com/',
		alt: 'hackclub'
	},
	mlh: {
		img: mlh,
		href: 'https://mlh.io/',
		alt: 'mlh'
	},
	trivia: {
		img: triviaimg,
		href: 'https://www.instagram.com/lhss.trivia/',
		alt: 'lhsstrivia'
	}
}
const goldCompanies = [
	{
		img: taskade,
		href: 'https://www.taskade.com/',
		alt: 'taskade'
	},
	{
		img: cake,
		href: 'https://www.interviewcake.com/',
		alt: 'cake'
	}
]
const silverCompanies = [
	{
		img: standout,
		href: 'https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro',
		alt: 'standoutstickers'
	},
	{
		img: aops,
		href: 'https://artofproblemsolving.com/',
		alt: 'aops'
	}
]
const bronzeCompanies = [
	{
		img: certopus,
		href: 'https://certopus.com/',
		alt: 'certopus'
	},
	{
		img: desmos,
		href: 'https://www.desmos.com/',
		alt: 'desmos'
	},

]
let PartnerList = []

for (let company in partners) {
	PartnerList.push(
		<div className="partner">
			<a href={partners[company].href} style = {{display: 'block'}} target = '_blank' rel='noreferrer'>
				<img src={partners[company].img} width = '100%' alt={partners[company].alt}></img>
			</a>
		</div>
	)
}

const Sponsors = () => {

	return (
		<div id="sponsors" className = 'container'>
			<img loading = 'lazy' src = {watch} alt = 'watch' id = 'watch'></img>
			
			<div className = 'container spaced' style = {{padding: '0'}} data-aos = 'fade-right' data-aos-duration = '1000'>
			<h1>
				Sponsor the <gradient>future</gradient>
				<p>
					Sponsors like you are what makes ClockHacks possible. Without sponsors, we wouldn't be able to have prizes, workshops, speakers, or even the event at all. 
					<br></br><br></br>
					By sponsoring, not only do you allow ClockHacks to run, you help to inspire many youth to pursue a career in tech. You will make a long-lasting impression on the future inventors, innovators, and entrepreneurs.
					<br></br><br></br>
					Interested in sponsoring? If you're a business or organization, you can check out our <a href = 'https://drive.google.com/file/d/1yl3QcwDGCNNPabv4qlJwmaHEyJbUhIhg/view?usp=sharing' target = '_blank'>sponsor package</a> or email our <a href = 'mailto: business.clockhacks@gmail.com'>business email</a>.
				</p>
			</h1>
			<img loading = 'lazy' src = {sponsor} alt = 'sponsorimg'></img>

			</div>

			<h1>Sponsors</h1>

			<div className="tier" id = 'gold'>
				{goldCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.href} target = '_blank' rel='noreferrer'>
								<img src={company.img} alt={company.name}></img>
							</a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			<div className="tier" id = 'silver'>
				{silverCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.href} target = '_blank' rel='noreferrer'>
								<img src={company.img} alt={company.name}></img>
							</a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			
			<div className="tier" id = 'bronze'>
				{bronzeCompanies.map((company, i) => {
					return (
						<div className="company">
							<a href={company.href} target = '_blank' rel='noreferrer'><img src={company.img} alt={company.name}></img></a>
							<p>{company.name}</p>
						</div>
					)
				})}
			</div>
			<hr/>

			<h1>Partners</h1>
				<div style = {{display: 'grid'}}>
				</div>
			{PartnerList}

		</div> 
	)
}

export default Sponsors;
