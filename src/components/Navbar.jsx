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

				<span className="material-icons menuicon" onClick={HandleClick}>menu</span>

			</div>
	)
}

export default Navbar;
