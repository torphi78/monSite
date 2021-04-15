import React from "react";
import "./Footer.css";
import lk from "./imagesReseaux/logoLinkedin.png";
import git from "./imagesReseaux/logGithub1.png";


function Footer() {
  return (
    <div className="sectionFooter">
      <div className="containerFooter">
        
        {/* <div className="dividerFooter" /> */}
        <div className="divMilieu">
          <h2 className="titreFooter">Liens</h2>
          <p className="paraphFooter2">09 81 60 71 37</p>
          <p className="paraphFooter2">torphi78@gmail.com</p>
          <div className="containerReseaux">
            <a
              href="https://www.linkedin.com/in/phil-t-bb54291bb/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="lk" src={lk} alt="linkedin" />
            </a>
            
            <a href="https://https://github.com/torphi78" target="_blank" rel="noreferrer">
              <img className="github" src={git} alt="github" />
            </a>
          </div>
        </div>
        {/* <div className="dividerFooter" /> */}
        
      </div>
    </div>
  );
}

export default Footer;
