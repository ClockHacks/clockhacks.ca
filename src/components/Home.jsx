import React from 'react'

const Home = () => {
  return (
    <div className = 'container'>
        <h1 style = {{marginTop: '10%', fontSize: 'max(6vw, 60px)'}}>
            ClockHacks
        </h1>
        <p style = {{textAlign: 'center'}}>
            A hackathon 
            <p className = 'gradient'> by students</p>, for students
        </p>
    </div>
  )
}

export default Home