import React from 'react'
import logo from '../assets/Logo.png'

const Home = () => {
  return (
    <div className = 'container' id = 'home' style = {{paddingTop: '5vh'}}>
        <img src = {logo} alt = 'logo' className='centered' id = 'homelogo'></img>
        <h1 id = 'title'>
            <gradient>ClockHacks</gradient>
        </h1>
        <p style = {{textAlign: 'center', fontSize: 'max(2vw, 20px)'}}>
            A hackathon for time | November 4 - 6, 2022
            <br></br> 
            <button>Applications Open Soon</button>{' '}
            <button>Sponsor Us</button>
        </p>
    </div>
  )
}

export default Home