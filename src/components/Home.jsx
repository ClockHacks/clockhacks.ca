import React from 'react'
import logo from '../assets/Logo.png'

import gear0 from '../assets/images/gear0.png'
import gear1 from '../assets/images/gearfull1.png'
import gear2 from '../assets/images/gearfull2.png'

const Home = () => {
  return (
    <div className = 'container' id = 'home' style = {{paddingTop: '5vh'}}>

        <img loading = 'lazy' src = {gear0} alt = 'gear0' id = 'gear0'></img>
        <img loading = 'lazy' src = {gear1} alt = 'gear1' id = 'gear1'></img>
        <img loading = 'lazy' src = {gear1} alt = 'gear2' id = 'gear2'></img>
        <img loading = 'lazy' src = {gear2} alt = 'gear3' id = 'gearfull'></img>
        <img loading = 'lazy' src = {logo} alt = 'logo' className='centered' id = 'homelogo'></img>
        <h1 id = 'title'>
            <gradient loading = 'lazy' >ClockHacks</gradient>
        </h1>
        <p style = {{textAlign: 'center', fontSize: 'max(2vw, 20px)'}} id ='desc'>
            A hackathon for time | November 4 - 6, 2022
            <br></br> 
            <button onClick = {
              () => {
                window.open('https://forms.gle/3YWYgnWdzHLvpDa66');
              }
            }>Register Now!</button>{' '}
            <button onClick = {
              () => {
                let sponsor = document.getElementById('sponsors')
                sponsor.scrollIntoView({behavior: 'smooth'});
              }
            }>Sponsor Us</button>
            <br></br>
            <button onClick = {
              () => {window.open('https://discord.com/invite/UKjQBdy26S')}
            }
              >Join the Discord!</button>
              {' '}
                          <button onClick = {
              () => {window.open('https://clockhacks.devpost.com/')}
            }
              >Devpost</button>
              
        </p>


    </div>
  )
}

export default Home