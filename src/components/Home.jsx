import React from 'react'
import logo from '../assets/Logo.png'

const Home = () => {
  return (
    <div className = 'container'>
        <img src = {logo} alt = 'logo' className='centered' style = {{width: '20%'}}></img>
        <h1 style = {{fontSize: 'max(6vw, 60px)', textAlign: 'center'}}>
            ClockHacks
        </h1>
        <p style = {{textAlign: 'center', fontSize: 'max(2vw, 20px)'}}>
            A hackathon for 
            <gradient> time</gradient> 
        </p>
    </div>
  )
}

export default Home