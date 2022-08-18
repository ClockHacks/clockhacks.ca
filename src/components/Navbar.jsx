const Navbar = () => {

	const pages = ['About', 'Contact', 'FAQ', 'Schedule', 'Speakers', 'Sponsors', 'Team']

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
				<a style={{marginLeft: '0px'}}>
					logo
				</a>
				{
					pages.map((page, index) => (
							<a href={`#${page.toLowerCase()}`} key={index}>{page} </a>
					))
				}

				<span className="material-icons menuicon" onClick={HandleClick}>menu</span>

			</div>
	)
}

export default Navbar;
