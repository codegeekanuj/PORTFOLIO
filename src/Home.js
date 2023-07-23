import React from "react";
import MYgif from "./images/Mygif.gif";
import { TypeAnimation } from "react-type-animation";
import backgroundvideo1 from './images/backgroundvideo1.mp4'


const Home = () => {
  return (
    
    <>
    <video autoPlay loop muted  id="video1">
    <source src={backgroundvideo1} type="video/mp4" />
    </video>
      <div className="hero1">
        
        <div className="texts">
          <span>
            <b>Welcome!</b>
            <br />
            <br />
          </span>
          <h1>
            I am a
            <TypeAnimation
              sequence={[" web Developer", 1000, " Video Editor", 1000]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: ".8em" }}
            />
          </h1>
          <br />
          <p>
            I'm a freelance web developer with expertise in video editing,
            crafting visually appealing websites that skillfully incorporate
            captivating videos.
          </p>
          <div className="iconshero">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <img className="gif" src={MYgif} alt="gif" />
        <br />
      </div>
    </>
  );
};

export default Home;
