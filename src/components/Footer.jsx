import banner from '../assets/banner.jpg'

const Footer = () => {
  return (
    <footer>
		
		<img src = {banner} alt = 'banner' style = {{width: '100%'}}></img>
		<div className = 'spaced' id = 'footerspaced'>
			<p>
			Copyright © 2022 ClockHacks
			</p>

			<p>
      
			<a target = '_blank' rel = 'noreferrer' onClick = {
				() => {
				window.scrollTo(0,0)
				}
			}>Back to Top</a>
			<a href = 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target = '_blank' rel = 'noreferrer'>MLH Code of Conduct</a>
			<a href = 'https://github.com/ClockHacks/clockhacks-website/blob/main/LICENSE' target = '_blank' rel = 'noreferrer'>License</a>
			</p>
			
			<p>
			<a href = 'https://discord.gg/UKjQBdy26S' target = '_blank'><i class = 'bi bi-discord'></i></a>
			<a href = 'https://github.com/ClockHacks' target = '_blank'><i class = 'bi bi-github'></i></a>
			<a target = '_blank'><i class = 'bi bi-linkedin'></i></a>
			</p>
		</div>

		</footer>

  )
}

export default Footer