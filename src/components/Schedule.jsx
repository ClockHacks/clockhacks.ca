import gear5 from '../assets/images/gear3.png'
import { useState } from 'react'

const nov4 = [
	{
		'name': 'Wrapping your mind around Python: the very basics of programming',
		'time': '17:00 - 18:00',
		'type': 'workshop',
		'description': `Join us for a "first-time-coding" workshop to warm up your keyboard before ClockHacks starts. We will be using the Python programming language. We'll go through basic datatypes, input/output, syntax, conditionals, and end with functions and loops. Whether you're here to learn or here to have fun, this workshop is for you! Come hang out and learn some new things before the opening ceremony.`
	},
	{
		'name': 'Opening Ceremony',
		'time': '18:00 - 20:00',
		'type': 'ceremony',
		'description': ''
	},
	{
		'name': 'Hacking Starts!',
		'time': '20:00',
		'type': 'event',
	},
]

const nov5 = [
	{
		'name': 'Opening Ceremony',
		'time': '18:00 - 20:00',
		'type': 'ceremony'
	},
]

const nov6 = [
	{
		'name': 'MOOEYKN',
		'time': '18:00 - 20:00',
		'type': 'ceremony'
	},
]

function makeDate(i, index, type='') {

	let icon = ''
	if (i.type === 'workshop') {
		icon = 'bi bi-tools'
	}
	else if (i.type === 'ceremony') {
		icon = 'bi bi-people-fill'
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
					let display = document.getElementById(index + type).style.display;
					if (display === 'block') {
						document.getElementById(index + type).style.display = 'none';
					}
					else {
						document.getElementById(index + type).style.display = 'block';
					}
				}
			}>
				<h2>
					<i class = {icon}></i>
					{i.name}
				</h2>

				<p id = {index + type}>
					{i.description}
				</p>
			</div>

		</div>
	)
}

const dates = ['nov4', 'nov5', 'nov6']
function switchDate(newdate) {

	let currentdate;
	dates.forEach( (i) => {
		let item = document.getElementById(i);
		
		if (window.getComputedStyle(item, null).display == 'block') {
			currentdate = i
		}
	})

	if (newdate === currentdate) {
		return
	}

	document.getElementById(currentdate).style.display = 'none';
	document.getElementById(newdate).style.display = 'block';
}

const Schedule = () => {

	return (
		<div id="schedule" className = 'container' style = {{textAlign: 'center'}}>
			{/* <img loading = 'lazy' src = {gear5} alt = 'gear5' id = 'gear5'></img> */}
			<h1>Schedule</h1>
			<p>All the workshops, events, and activities you'll find at ClockHacks<br/> All times are in EST</p>
			
			<div className='selectors'>
				<button onClick = {() => switchDate('nov4')}>November 4</button>
				<button onClick = {() => switchDate('nov5')}>November 5</button>
				<button onClick = {() => switchDate('nov6')}>November 6</button>
			</div>

			<div id = 'nov4'>
				{nov4.map((i, index) => {return (makeDate(i, index, 'nov4')) })}
			</div>

			<div id = 'nov5'>
				{nov5.map((i, index) => {return (makeDate(i=i, index=index, 'nov5')) })}
			</div>

			<div id = 'nov6'>
				{nov6.map((i, index) => {return (makeDate(i=i, index=index, 'nov6')) })}
			</div>
		</div>
	)
}

export default Schedule;
