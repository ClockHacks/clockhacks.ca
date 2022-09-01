import gear5 from '../assets/images/gear3.png'

const Schedule = () => {
	return (
		<div id="schedule" className = 'container' style = {{textAlign: 'center'}}>
			<img loading = 'lazy' src = {gear5} alt = 'gear5' id = 'gear5'></img>
			<h1>Schedule</h1>
			<p>
				November 4
				7:00 PM - Hacking Starts!
				<br></br>
				November 6
				11:00 AM - Hacking Ends!
			</p>
		</div>
	)
}

export default Schedule;
