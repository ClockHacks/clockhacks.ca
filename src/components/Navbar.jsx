import Logo from '../assets/Logo.png'
import { SiDevpost } from 'react-icons/si'

const Navbar = () => {

	const pages = ['About', 'FAQ', 'Schedule', 'Sponsors', 'Team', 'Contact']

	function HandleClick() {
		var x = document.getElementById("nav");
		if (x.className === "nav") {
			x.className += " responsive";
		} else {
			x.className = "nav";
		}
	}

	return (
		<div class='sticky top-0 z-10'>
			<div class='text-center bg-black w-full text-md p-1 border-b-accent-color'>Thanks for coming to ClockHacks and making it as awesome as it was!</div>
			<div className='nav' id='nav'>
				<a onClick = {
					() => {
						window.scrollTo(0,0);
					}
				}>
					<img src = {Logo} alt = 'navlogo'></img>
				</a>
				<div id = 'links'>
				{
					pages.map((page, index) => (
						<a href={`#${page.toLowerCase()}`} key={index}>{page} </a>
						))
				}
				</div>

				{/* <div id = 'socials'>
					<a href = 'https://discord.gg/UKjQBdy26S' target = '_blank'><i class = 'bi bi-discord'></i></a>
					<a href = 'https://github.com/ClockHacks' target = '_blank'><i class = 'bi bi-github'></i></a>
					<a href = 'https://www.linkedin.com/company/clockhacks/' target = '_blank'><i class = 'bi bi-linkedin'></i></a>
					<a href = 'https://www.instagram.com/clockhacks/' target = '_blank'><i class = 'bi bi-instagram'></i> </a>
					<a href = 'https://clockhacks.devpost.com/' target = '_blank' class='flex items-center justify-center mb-1'><SiDevpost id = 'devposticon'/></a>
				</div> */}

				<a id = 'mlh'
				href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank">
					<img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" style={{width:'100%'}}></img>
				</a>


				<span className="material-icons menuicon" onClick={HandleClick}>menu</span>

			</div>
		</div>
	)
}

export default Navbar;
