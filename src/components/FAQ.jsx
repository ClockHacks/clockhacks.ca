const FAQ = () => {
	return (
		<div id="faq" className = 'container'>
			<h1 style = {{textAlign: 'center'}}>Frequently Asked Questions</h1>

			<div className = 'faqdiv' data-aos = 'fade-up' data-aos-duration = '800'>

				<div>

				<h1 className = 'header'>Before</h1>

				<details open>
					<summary>What is a hackathon?</summary>
					<p>A hackathon is an event where designers, programmers, engineers, and tech enthusiasts gather to create something within a given time limit.</p>
				</details>
				<details>
					<summary>Who can participate?</summary>
					<p>Students of any age from any part of the world are welcome to participate in ClockHacks. We are aiming for this to be a hackathon targeted toward high school students.</p>
				</details>
				<details>
					<summary>Is ClockHacks in person or online?</summary>
					<p>ClockHacks 2022 will be online. Unfortunately, we simply do not have the resources to host ClockHacks in person.</p>
				</details>
				<details>
					<summary>When is ClockHacks 2022?</summary>
					<p>ClockHacks 2022 will be November 4, 2022 to November 6, 2022. Hacking will start at 7:00 pm on November 4 and will end at 11:00 pm on November 6.</p>
				</details>
				<details>
					<summary>How much does it cost to attend ClockHacks?</summary>
					<p>It costs nothing! ClockHacks is completely free to attend.</p>
				</details>
				<details>
					<summary>How do I become a sponsor?</summary>
					<p>Applying to be a sponsor will be available soon.</p>
				</details>
				<details>
					<summary>What if I've never been to a hackathon before?</summary>
					<p>That's okay! If you choose not to code, you will be able to connect with other participants, attend workshops, listen to guest speakers, and learn about the world of tech.</p>
				</details>

				</div>

				<div className = 'faqcolumn'>

				<h1 className = 'header'>During</h1>

				<details open>
					<summary>What if I don't know how to code?</summary>
					<p>It's okay! Hackathons aren't just about coding. There is also an aspect of business, design, and presentation. You can also attend workshops and listen to guest speakers talk about the world of tech.</p>
				</details>
				<details>
					<summary>What if I don't have a team?</summary>
					<p>You will be able to find a team in the ClockHacks discord before the event starts, or choose to work by yourself. </p>
				</details>
				<details>
					<summary>How will we communicate during the event?</summary>
					<p>Announcements during and before ClockHacks will be through Discord. We strongly recommend that you talk to your teammates on Discord as well. Join the ClockHacks Discord: https://discord.com/invite/UKjQBdy26S</p>
				</details>
				<details>
					<summary>What project should I make?</summary>
					<p>You can make any type of project you would like! An app, a website, blockchain, hardware, design, or anything that your heart desires. However, since our hackathon is themed around time, we strongly encourage you to base your project around time as well.</p>
				</details>
				<details>
					<summary>What kind of workshops, talks, and events will there be?</summary>
					<p>Events and activities will be determined at a later date.</p>
				</details>
				<details>
					<summary>What if I need help?</summary>
					<p>If you need help or have questions regarding the event, you can ask an organizer in the Discord. If you have technical questions, good luck.</p>
				</details>
				<details>
					<summary>How long does the event last?</summary>
					<p>The creating portion of ClockHacks lasts 40 hours, from 7:00 pm on November 4 to 11:00 am on November 6.</p>
				</details>

				</div>

				<div className = 'faqcolumn'>

				<h1 className = 'header'>After</h1>

				<details open>
					<summary>How does judging work?</summary>
					<p>You will submit a pitch video on Devpost, which will be reviewed by a panel of judges. </p>
				</details>
				<details>
					<summary>What prizes are there?</summary>
					<p>Prizes will be determined at a later date.</p>
				</details>
				<details>
					<summary>What if my question isn't listed here?</summary>
					<p>If you have more questions, you can ask one of the organizers on our Discord: https://discord.com/invite/UKjQBdy26S</p>
				</details>
				<details>
					<summary>What if I can't, or haven't made anything?</summary>
					<p>That's okay! Nobody is forcing you to make something at ClockHacks. We just hope that you can learn something, have fun, or make some new friends.</p>
				</details>

				</div>

			</div>
		</div>
	)
}

export default FAQ;
