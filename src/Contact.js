import React from 'react'
import contactvideo from "./images/contactvideo .mp4"

const Contact = () => {
  return (
    <>
     <video autoPlay loop muted  className="video">
    <source src={contactvideo} type="video/mp4" />
    </video>
    <div className="hero2">
    <form id="form">
      <div class="firstrow">
        <span
          >First Name <br />
          <input id="first" placeholder="First Nmae"/>
        </span>
        <span
          >Last Name <br />
          <input id="second" placeholder="Last Name" />
        </span>
      </div>
      <div class="rest">
        <div>
          <p>email</p>
          <input id="third" class="inputvalues" placeholder="email"/>
        </div>
        <div>
          <p>Contact</p>
          <input id="fourth" class="inputvalues" placeholder="Contact"/>
        </div>
        <div>
          <p>password</p>

          <input id="fifth" class="inputvalues" placeholder="Password"/>
        </div>
        <div>
          <p>Message</p>
          <input id="sixth" class="inputvalues" placeholder="Message"/>
        </div>
        <input type="submit" id="submit" value="submit" />
      </div>
    </form>
    </div>
    </>
  )
}

export default Contact
