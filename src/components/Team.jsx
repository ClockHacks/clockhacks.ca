import jay from '../assets/team/jay.jpg'
import jeffrey from '../assets/team/jeffrey.jpg'
import sean from '../assets/team/sean.jpg'
import cera from '../assets/team/cera.jpg'
import zhuo from '../assets/team/zhuoen.jpg'
import nathan from '../assets/team/nathanwong.jpg'

import gear8 from '../assets/images/gear0.png'
import gear9 from '../assets/images/gear2.png'

const Sponsors = () => {
	return (
		<div id="team" className = 'container' >
			<h1 style = {{textAlign: 'center'}}>
				Our Team
				<p>The people behind the scenes at ClockHacks</p>
			</h1>
			<img src = {gear8} alt = 'gear8' id = 'gear8' loading = 'lazy'></img>
			<img src = {gear9} alt = 'gear9' id = 'gear9' loading = 'lazy'></img>

			<div id = 'teamcontainer' data-aos = 'fade-up' data-aos-duration = '1000' >
			<div className = 'column'>
				<img className = 'headshot' loading = 'lazy' src = {sean} alt = 'headshot'></img>
				<h1>
					Sean Wang
					<p>Co-founder</p>
					<p>
						<a class='mr-3' href = 'https://www.linkedin.com/in/pilotprix/' target = '_blank' rel = 'noreferrer'>
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
						<a class='mr-3' href = 'https://www.linkedin.com/in/jeffreyzang2007/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/jeffrey-zang' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>

				<img className = 'headshot' loading = 'lazy' src = {zhuo} alt = 'headshot'></img>
				<h1>
					Zhuo En Chua
					<p>Marketing and Outreach</p>
					<p>
						<a class='mr-3' href = 'https://www.linkedin.com/in/ze2/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/ze-2' target = '_blank' rel = 'noreferrer'>
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
						<a class='mr-3' href = 'https://www.linkedin.com/in/jay-yuan-ren-107892211/' target = '_blank' rel = 'noreferrer'>
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
						<a class='mr-3' href = 'https://www.linkedin.com/in/cera-wang-171699240/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/orgs/ClockHacks/people/acrenw' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-github' ></i>
						</a>
					</p>
				</h1>

				<img class = 'headshot disabled:pointer-events-none' loading = 'lazy' src = {nathan} alt = 'headshot'></img>
				<h1>
					Nathan Wong
					<p>Finance and Sponsorship</p>
					<p>
						<a class='mr-3' href = 'https://www.linkedin.com/in/nathan-wong-03362696/' target = '_blank' rel = 'noreferrer'>
							<i class = 'bi bi-linkedin' ></i>
						</a>{' '}
						<a href = 'https://github.com/TheLoneMoonRat' target = '_blank' rel = 'noreferrer'>
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
