const Navbar = () => {
    
    const pages = ['About', 'Contact', 'FAQ', 'Schedule', 'Speakers', 'Sponsors', 'Team']

	return (
	<div className = 'nav'>
		logo
        
        <div>
        {
            pages.map(page => (
                <a href={`#${page.toLowerCase()}`}>{page} </a>
            ))
        }
        </div>

	</div>
	)
}

export default Navbar;
