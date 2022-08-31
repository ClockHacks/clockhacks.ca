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

			<div id = 'teamcontainer' data-aos = 'fade-up' data-aos-duration = '1000' >
			<div className = 'column'>
				<img className = 'headshot' loading = 'lazy' src = {sean} alt = 'headshot'></img>
				<h1>
					Sean Wang
					<p>Co-Founder</p>
					<p>
						<a href = 'https://www.linkedin.com/in/pilotprix/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/PilotPrix' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>

				<img className = 'headshot' loading = 'lazy' src = {jeffrey} alt = 'headshot'></img>
				<h1>
					Jeffrey Zang
					<p>Technical Lead</p>
					<p>
						<a href = 'https://www.linkedin.com/in/jeffreyzang2007/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/jeffrey-zang' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>

			</div>

			<div className = 'column'>
				<img className = 'headshot' loading = 'lazy' src = {jay} alt = 'headshot'></img>
				<h1>
					Jay Ren
					<p>Co-founder</p>
					<p>
						<a href = 'https://www.linkedin.com/in/jay-yuan-ren-107892211/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/JaryJay' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>

				<img className = 'headshot' loading = 'lazy' src = {cera} alt = 'headshot'></img>
				<h1>
					Cera Wang
					<p>Design Lead</p>
					<p>
						<a href = 'https://www.linkedin.com/in/cera-wang-171699240/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/orgs/ClockHacks/people/acrenw' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>
			</div>
			</div>

		</div>
	)
}

export default Sponsors;
