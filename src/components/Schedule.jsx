import gear5 from '../assets/images/gear3.png'

const nov4 = [
	{
		'time': '5:00 PM',
		'name': 'Opening Ceremony'
	},
	{
		'time': '7:00 PM',
		'name': 'Hacking Starts!'
	},
]

// nov5 = [
// 	{
// 		'time': '7:00 PM',
// 		'name': 'Hacking Starts!'
// 	}
// ]

const nov6 = [
	{
		'time': '11:00 AM',
		'name': 'Hacking Ends!'
	},
]

const Schedule = () => {
	return (
		<div id="schedule" className = 'container' style = {{textAlign: 'center'}}>
			{/* <img loading = 'lazy' src = {gear5} alt = 'gear5' id = 'gear5'></img> */}
			<h1>Schedule</h1>

			{/* <div id = 'nov4'>
				{nov4.map(
					(i, index) => (
						<div className = 'wrapper'>
						<div className='left'>
							{i.time}
						</div>
						<div className='right'>
							{i.name}
						</div>						
						</div>
					)
				)
				}
			</div> */}
			November 4 | 7:00 PM | Hacking Starts!<br/>
			November 6 | 11:00 AM | Hacking Ends!

		</div>
	)
}

export default Schedule;
