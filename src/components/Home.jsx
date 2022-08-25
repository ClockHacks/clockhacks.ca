import React from 'react'
import logo from '../assets/Logo.png'

const Home = () => {
  return (
    <div className = 'container' id = 'home' style = {{paddingTop: '5vh'}}>
        <img src = {logo} alt = 'logo' className='centered' id = 'homelogo'></img>
        <h1 id = 'title'>
            <gradient>ClockHacks</gradient>
        </h1>
        <p style = {{textAlign: 'center', fontSize: 'max(2vw, 20px)'}} id ='desc'>
            A hackathon for time | November 4 - 6, 2022
            <br></br> 
            <button>Applications Open Soon</button>
            <br></br>
            {/* <button>Sponsor Us (Coming Soon!)</button> */}
            <button onClick = {
              () => {window.open('https://discord.com/invite/UKjQBdy26S')}
            }
              >Join the Discord!</button>
                          <button onClick = {
              () => {window.open('https://clockhacks.devpost.com/')}
            }
              >Devpost</button>
              
        </p>
    </div>
  )
}

export default Home