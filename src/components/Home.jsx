import React from 'react'

const Home = () => {
  return (
    <div className = 'container'>
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