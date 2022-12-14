import React from 'react'
import logo from '../assets/Logo.png'

import gear0 from '../assets/images/gear0.png'
import gear1 from '../assets/images/gearfull1.png'
import gear2 from '../assets/images/gearfull2.png'

const Home = () => {
  return (
    <div className = 'container' id = 'home'>

        <img loading = 'lazy' src = {gear0} alt = 'gear0' id = 'gear0'></img>
        <img loading = 'lazy' src = {gear1} alt = 'gear1' id = 'gear1'></img>
        <img loading = 'lazy' src = {gear1} alt = 'gear2' id = 'gear2'></img>
        <img loading = 'lazy' src = {gear2} alt = 'gear3' id = 'gearfull'></img>
        <img loading = 'lazy' src = {logo} alt = 'logo' class='centered hover:cursor-pointer' id = 'homelogo' onClick = {
          () => {
            document.getElementById('about').scrollIntoView();
          }
        }></img>
        <h1 id = 'title'>
            <gradient loading = 'lazy' >
              ClockHacks
            </gradient>
        </h1>
        <p style = {{textAlign: 'center', fontSize: 'max(2vw, 20px)'}} id ='desc'>
            A hackathon for time | <p style = {{fontSize: 'inherit', textDecoration: 'line-through', display: 'inline'}}>November 4 - 6, 2022</p>
            <br></br> 
            {/* <button class='bg-accent-dark cursor-not-allowed'>Registration Closed</button>{' '} */}
            <button onClick = {
              () => {
                let sponsor = document.getElementById('sponsors')
                sponsor.scrollIntoView({behavior: 'smooth'});
              }
            }>Sponsor Us</button>
            {/* <button onClick = {
              () => {window.open('https://discord.com/invite/UKjQBdy26S')}
            }
              >Join the Discord!</button> */}
              {' '}
                          <button onClick = {
              () => {window.open('https://clockhacks.devpost.com/')}
            }
              >View Projects</button>
              
        </p>


    </div>
  )
}

export default Home