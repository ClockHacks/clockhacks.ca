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
		'time': '18:00 - 19:00',
		'type': 'ceremony',
		'description': `Welcome to ClockHacks! We'll be introducing how the event works, some of the activities and workshops that we'll be having, and we'll thank our sponsors. Steven Puri, our guest speaker, will speak about hackathons and students, as well as productivity. Stay for a Q/A session at the end!`
	},
	{
		'name': 'Hacking Starts!',
		'time': '19:00',
		'type': 'event',
		'description': 'The official time for creating your website, app, robot, or design starts now!'
	},
	{
		'name': 'Idea Crafting: We help you invent and improve ideas',
		'time': '19:00 - 19:30',
		'type': 'activity',
		'description': 'Need an idea for your ClockHacks project? Hop in a discord call with us and we\'ll give you ideas, inspiration, and guidance!'
	},
	{
		'name': 'Making very Versatile websites with Vue',
		'time': '19:30 - 20:30',
		'type': 'workshop',
		'description': 'Websites are some of the best projects for hackathons, and Vue is one of the most versatile web frameworks out there. If you already know a framework like React or Angular, Vue will be a valuable part on your web dev resume. We\'ll cover components, templates, form and event handling, and much more. Join us to learn Vue: The progressive JavaScript framework.'
	},
]

const nov5 = [
	{
		'name': 'Among the ClockHacks',
		'time': '10:30 - 11:30',
		'type': 'game',
		'description': 'Ready to unwind after a night of coding? Come join us in a Discord channel to play Among Us.'
	},
	{
		'name': 'Lunch Chat',
		'time': '12:00 - 13:00',
		'type': 'activity',
		'description': 'Come talk to the organizers and other hackers while you eat lunch! Get together with your team in person and hop on a Discord call with us. Tell us what\'s going well, what you need help with, and what questions you might have.'
	},
	{
		'name': 'Organizer Project - Live!',
		'time': '13:15 - 16:15',
		'type': 'activity',
		'description': 'Watch the organizers of ClockHacks suffer by creating a hackathon project in just THREE HOURS! Link to the Twitch stream will be posted on Discord at the time of the event. This is just for fun and we will not be winning any of the prizes :)'
	},
	{
		'name': 'How to make your UI/UX GREAT',
		'time': '17:00 - 18:00',
		'type': 'workshop',
		'description': 'Do you ever get physically ill looking at the design of your project? Well, fear no more: in this workshop, we will go over the thinking process of design as well as how to apply these elements and principles using Figma to solve user problems and create intuitive, aesthetically pleasing interfaces :). Presented by Cera Wang'
	},
	{
		'name': '!Light',
		'time': '19:00 - 20:30',
		'type': 'minigame',
		'description': 'Participants remake a chosen website using their best (or worst) HTML and CSS skills in a limited amount of time. Brought to you by MLH!'
	},
	{
		'name': 'Augmented Reality Workshop with echo3D',
		'time': '21:00 - 22:00',
		'type': 'workshop',
		'description': 'Workshop about AR/VR, provided by echo3D. Learn about the current and future technologies in virtual reality and what echo3D provides.'
	}
]

const nov6 = [
	{
		'name': 'How to Polish and Present your final Project',
		'time': '9:00 - 9:30',
		'type': 'workshop',
		'description': `As the end of ClockHacks approaches, pitching and judging time comes ever nearer. In this workshop, you will learn how to design a stunning presentation for your project, as well as polishing up the frontend and how to pitch to judges. Learn important skills presented by hackathon veterans here at ClockHacks.`
	},
	{
		'name': 'FREE Moral Support from the Organizers',
		'time': '10:00 - 11:00',
		'type': 'activity',
		'description': 'Need that final motivation boost to finish your project? Hop in a Discord call with the organizers and get some FREE moral support!'
	},
	{ 
		'name': 'Hacking Ends!',
		'time': '11:00',
		'type': 'event',
		'description': 'Stop hacking! The official time for creating your project has ended. Submit your pitch on Devpost!'
	},
	{
		'name': 'Closing Ceremony',
		'time': '14:00 - 15:00',
		'type': 'ceremony',
		'description': `Thanks for attending ClockHacks and making the event as awesome as it is! We'll be thanking sponsors, giving out prizes, and watching the winning projects demo videos.`
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
	else if (i.type === 'activity') {
		icon = 'bi bi-mic-fill'
	}
	else if (i.type === 'game') {
		icon = 'bi bi-controller'
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

	let button = document.getElementById(newdate + 'button')
	button.style.backgroundColor = '#4F9265';
	document.getElementById(currentdate + 'button').style.backgroundColor = '#78B68C'
}

const Schedule = () => {

	return (
		<div id="schedule" className = 'container' style = {{textAlign: 'center'}}>
			<h1>Schedule</h1>
			<p>All the workshops, events, and activities you'll find at ClockHacks | All times are in EST</p>
			
			<div className='selectors'>
				<button id = 'nov4button' onClick = {() => switchDate('nov4')} style = {{backgroundColor: '#4F9265'}}>November 4</button>
				<button id = 'nov5button' onClick = {() => switchDate('nov5')}>November 5</button>
				<button id = 'nov6button' onClick = {() => switchDate('nov6')}>November 6</button>
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
			<img loading = 'lazy' src = {gear5} alt = 'gear5' id = 'gear5'></img>
		</div>
	)
}

export default Schedule;
