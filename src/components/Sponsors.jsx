import sponsor from '../assets/sponsor.svg'

const goldCompanies = [
]
const silverCompanies = [
]
const bronzeCompanies = [
]

const Sponsors = () => {
	return (
		<div id="sponsors" className = 'container'>
			
			<div className = 'container spaced' style = {{padding: '0'}}>
			<h1>
				Sponsor the <gradient>future</gradient>
				<p>
					Sponsors like you are what makes ClockHacks possible. Without sponsors, we wouldn't be able to have prizes, workshops, speakers, or even the event at all. 
					<br></br><br></br>
					By sponsoring, not only do you allow ClockHacks to run, you help to inspire many youth to pursue a career in tech. You will make a long-lasting impression on the future inventors, innovators, and entrepreneurs.
					<br></br><br></br>
					Interested in sponsoring? If you're a business or organization, you can check out our <a>sponsor package</a> or email our business email: 
					<br></br><br></br>
					<button>Sponsor Us</button>
				</p>
			</h1>
			<img src = {sponsor} alt = 'sponsorimg'></img>
			</div>

			{/* <div className="tier" id = 'gold'>
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
			<hr/>*/}

		</div> 
	)
}

export default Sponsors;
