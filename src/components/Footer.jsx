import banner from '../assets/banner.png'
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer>
		
		<img src = {banner} alt = 'banner' style = {{width: '100%'}}></img>
		<div className = 'spaced' id = 'footerspaced'>
			<h1>
			<img src = {logo} alt = 'banner' style = {{width: '2%', marginRight: '10px'}}></img>
			Copyright © 2022 ClockHacks
			</h1>
			<h1>
      
			<a href = 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target = '_blank' rel = 'noreferrer'>MLH Code of Conduct</a>
			<a href = 'https://github.com/ClockHacks/clockhacks-website/blob/main/LICENSE' target = '_blank' rel = 'noreferrer'>License</a>
			<a href = 'https://discord.gg/UKjQBdy26S' target = '_blank'><i class = 'bi bi-discord'></i></a>
      <a href = 'https://github.com/ClockHacks' target = '_blank'><i class = 'bi bi-github'></i></a>
      <a target = '_blank'><i class = 'bi bi-linkedin'></i></a>
			</h1>
		</div>

		</footer>

  )
}

export default Footer