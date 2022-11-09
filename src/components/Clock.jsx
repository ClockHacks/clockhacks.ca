import React from 'react'
import gear from '../assets/images/gear2.png'
import image from '../assets/programmer.svg'

const Clock = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("November 4, 2022 19:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("thingy").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("thingy").innerHTML = "Hacking starts now!";
    }
    }, 1000);

  return (
    <div className='container' id='clock'>
        <div data-aos = 'fade-down' data-aos-duration='800'>
            <h1>This year, <gradient loading = 'lazy' >ClockHacks</gradient> achieved</h1>
            {/* <h1 id = 'thingy'></h1> */}
            <h2 class='text-3xl leading-loose'>
              <i class='bi bi-people-fill text-4xl text-light-color'></i> 360 registered hackers<br/>
              <i class='bi bi-folder-fill text-4xl text-light-color'></i> 40 innovative projects<br/>
              <i class='bi bi-tools text-4xl text-light-color'></i> 14 workshops and activities<br/>
              <i class='bi bi-trophy-fill text-4xl text-light-color'></i> The largest online high-school hackathon of the 2023 season

            </h2>
            <img src = {image} loading = 'lazy' alt = 'programmer' id = 'programmerimg'></img>
        </div>
        <img src = {gear} alt = 'gear' id = 'clockgear' loading = 'lazy'></img>
    </div>
  )
}

export default Clock