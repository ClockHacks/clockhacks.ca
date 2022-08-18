import React from 'react'

const Home = () => {
  return (
    <div className = 'container'>
        <h1 style = {{fontSize: 'max(6vw, 60px)'}}>
            ClockHacks
        </h1>
        <p style = {{textAlign: 'center'}}>
            A hackathon for 
            <gradient> time</gradient> 
        </p>
    </div>
  )
}

export default Home