import React from "react";
import backgroundvideo from './images/backgroundvideo.mp4'
import Myimage from "./images/Myimage.JPG"

const About = () => {
  return (
    <>
    <video autoPlay loop muted  className="video">
    <source src={backgroundvideo} type="video/mp4" />
    </video>

      <div className="hero3">
        <h3>ABOUT ME <hr /></h3>
        <div className="containerone">
          <img className="myimage" src={Myimage} alt="#" />

          <div className="text1">
              <span>Hi there!</span>
              <p>
                Fuelled by a passion for developing websites,I have a deep desire to excel and continuosly improve in my work.Learn more about my journey below.
              </p>
          </div>

        <div class="circle"></div>
          
        </div>

          <div className="containertwo">
          <div className="para">
            <span> About My Career</span>
            <p>
            Greetings to Everyone! I'm on a desire to learn new things and expand my knowledge of HTML, CSS, and JavaScript. I'm committed to developing and engaging user experiences as a passionate frontend developer. Follow me as I explore the world full of web development, where I'm always looking to get better at what I do. In order to have a major effect on the development of digital experiences, let's connect and work together.
            </p>
          </div>
          <div className="skills">
            <span>SKILLS</span>
            <ul>
            <li className="box"><a href="#.com">Html</a></li>
            <li className="box"><a href="#.com">CSS</a></li>
            <li className="box"><a href="#.com">Javascript</a></li>
            <li className="box"><a href="#.com">node.js</a></li>
            <li className="box"><a href="#.com">React</a></li>
            <li className="box"><a href="#.com">Tailwind CSS</a></li>
            <li className="box"><a href="#.com">Java</a></li>
            <li className="box"><a href="#.com">C++</a></li>
            <li className="box"><a href="#.com">C</a></li>
            <li className="box"><a href="#.com">Video Editting</a></li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
