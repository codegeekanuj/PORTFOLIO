import React from "react";
import MYgif from "./images/Mygif.gif";
import { TypeAnimation } from "react-type-animation";
import backgroundvideo1 from "./images/backgroundvideo1.mp4";

const Home = () => {
  return (
    <>
      <video autoPlay loop muted id="video1">
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
            <a  href="https://www.hackerrank.com/atripathi1253?hr_r=1">
              <i class="fa-brands fa-hackerrank"></i>
            </a>
            <a href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114791_asid.148989926143_crid.662526548040_kw.www%20linkedin_d.c_tid.kwd-296759856208_n.g_mt.p_geo.9040183">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/anuj_tripathiii/?next=%2F">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/codegeekanuj">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <img className="gif" src={MYgif} alt="gif" />
        <br />
      </div>
    </>
  );
};

export default Home;
