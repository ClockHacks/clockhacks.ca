import gear5 from '../assets/images/gear3.png'

const nov4 = [
	{
		'name': 'Wrapping your mind around Python',
		'time': '17:00 - 18:00',
		'type': 'workshop',
		'description': `Join us for a "first-time-coding" workshop to warm up your keyboard before ClockHacks starts. We will be using the Python programming language. We'll go through basic datatypes, input/output, syntax, conditionals, and end with functions and loops. Whether you've never seen a computer in your life or you're a seasoned developer, this workshop is for you! Come hang out and learn some new things before the opening ceremony.`
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
								
								<div className='right' onClick = {
									(e) => {
										let display = document.getElementById(index).style.display;
										if (display === 'block') {
											console.log('yes')
											document.getElementById(index).style.display = 'none';
										}
										else {
											document.getElementById(index).style.display = 'block';
										}
									}
								}>
									<h2>
										<i class = {icon}></i>
										{i.name}
									</h2>

									<p style = {{display: 'block'}} id = {index}>
										{i.description}
									</p>
								</div>

							</div>
						)
					}
				)	
				}
			</div>
		</div>
	)
}

export default Schedule;
