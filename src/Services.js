import React from 'react'
import videoeditor from "./images/videoeditor.gif"
import webdeveloper from "./images/webdeveloper.gif"
import servicesvideo from "./images/servicesvideo.mp4"

const Services = () => {
  return (
    <>
    <video autoPlay loop muted  className="video">
    <source src={servicesvideo} type="video/mp4" />
    </video>
    <div className="hero4">
      <h2 className='heading'>"Service to others is the rent you pay for your room here on earth</h2>
      <div className='services'>
     <div className="box1">
      <img className='videoeditor' src={videoeditor} alt="#" />
      <span>VIDEO EDITING</span>
      <p>Your search for a skilled video editor ends here! I specialize in professional video editing services, and guess what? Your first video edit comes completely FREE! Let's turn your raw footage into a captivating masterpiece together.</p>
     </div>
     <div className="box2">
      <img className='webdeveloper' src={webdeveloper} alt="#" />
      <span>WEB DEVELOPMENT</span>
      <p>Unlock the potential of a captivating online presence with my expertise as a frontend developer. Specializing in single-page applications powered by HTML, CSS, JavaScript, and React.js. I'm here to create a seamless user experience. Take advantage of a discounted offer on your first website and let's embark on a journey of innovative web solutions together.</p>
     </div>
     </div>
    </div>
    </>
  )
}

export default Services
