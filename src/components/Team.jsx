import jay from '../assets/team/jay.jpg'
import jeffrey from '../assets/team/jeffrey.jpg'
import sean from '../assets/team/sean.jpg'
import cera from '../assets/team/cera.jpg'

const Sponsors = () => {
	return (
		<div id="team" className = 'container' >
			<h1 style = {{textAlign: 'center'}}>
				Our Team
				<p>The people behind the scenes at ClockHacks</p>
			</h1>

			<div id = 'teamcontainer' data-aos = 'fade-up' data-aos-duration = '1200'>
			<div className = 'column'>
				<a href = 'https://www.linkedin.com/in/pilotprix/' target = '_blank' rel = 'noreferrer'>
				<img src = {sean} alt = 'headshot'></img>
				<h1>
					Sean Wang
					<p>Co-Founder</p>
				</h1>
				</a>

				<a href = 'https://www.linkedin.com/in/jeffrey-zang-49b872246/' target = '_blank' rel = 'noreferrer'> 
					<img src = {jeffrey} alt = 'headshot'></img>
					<h1>
						Jeffrey Zang
						<p>Technical Lead</p>
					</h1>
				</a>

			</div>

			<div className = 'column'>
				<a href = 'https://www.linkedin.com/in/jay-yuan-ren-107892211/' target = '_blank' rel = 'noreferrer'>
					<img src = {jay} alt = 'headshot'></img>
					<h1>
						Jay Ren
						<p>Co-Founder</p>
					</h1>
				</a>

				<a href = 'https://www.linkedin.com/in/cera-wang-171699240/' target = '_blank' rel = 'noreferrer'>
					<img src = {cera} alt = 'headshot'></img>
					<h1>
						Cera Wang
						<p>Design Lead</p>
					</h1>
				</a>
			</div>
			</div>

		</div>
	)
}

export default Sponsors;
