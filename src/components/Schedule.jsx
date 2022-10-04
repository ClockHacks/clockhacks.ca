import gear5 from '../assets/images/gear3.png'

const nov4 = [
	{
		'name': 'Wrapping your mind around Python',
		'time': '17:00 - 18:00',
		'type': 'workshop',
		'height': 2,
	},
	{
		'name': 'Opening Ceremony',
		'time': '18:00 - 20:00',
		'type': 'ceremony'
	},
	{
		'name': 'Hacking Starts!',
		'time': '20:00',
		'type': 'event',
		'height': 1
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
		'name': 'Hacking Ends!',
	},
]

const Schedule = () => {
	return (
		<div id="schedule" className = 'container' style = {{textAlign: 'center'}}>
			{/* <img loading = 'lazy' src = {gear5} alt = 'gear5' id = 'gear5'></img> */}
			<h1>Schedule</h1>
			<p>All the workshops, events, and activities you'll find at ClockHacks<br/> All times are in EST</p>

			<div id = 'nov4'>
				{nov4.map(
					(i, index) => {

						let icon = ''
						if (i.type === 'workshop') {
							icon = 'bi bi-tools'
						}
						else if (i.type === 'ceremony') {
							icon = 'bi bi-megaphone'
						}
						else if (i.type === 'event') {
							icon = 'bi bi-exclamation-lg'
						}

						return (
							<div className='wrapper'>

							<div className='left'>
								{i.time}
							</div>
							<div className='right'>
								<i class = {icon}></i>
								<h2>{i.name}</h2>
							</div>

							</div>
						)
					}
				)	
				}
			</div>
			{/* November 4 | 7:00 PM | Hacking Starts!<br/>
			November 6 | 11:00 AM | Hacking Ends! */}

		</div>
	)
}

export default Schedule;
