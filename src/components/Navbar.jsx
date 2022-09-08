import Logo from '../assets/Logo.png'

const Navbar = () => {

	const pages = ['About', 'FAQ', 'Schedule', 'Sponsors', 'Speakers', 'Team', 'Contact']

	function HandleClick() {
		var x = document.getElementById("nav");
		if (x.className === "nav") {
			x.className += " responsive";
		} else {
			x.className = "nav";
		}
	}

	return (
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
				<a id = 'mlh' 
				href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank">
					<img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" style={{width:'100%'}}></img>

					</a>
				<span className="material-icons menuicon" onClick={HandleClick}>menu</span>

			</div>
	)
}

export default Navbar;
