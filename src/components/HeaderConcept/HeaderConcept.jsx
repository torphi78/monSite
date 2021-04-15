import React from "react";
import "./HeaderConcept.css";
import leLog from "../logos/logoPHIL_T.png";


function HeaderConcept() {
  return (
    <div>
      {/* <div className="logoPartirHome" /> */}
      
      <div className="sectionHeaderConcept">
        <img src={leLog} className="lelogoDuHeader" alt="logoPhil"/>
      {/* <h1 className="titreHeader">Philip<span className="pointvert">.</span>T</h1>
      <h2 className="soustitre1">Graphiste Print <span className="andVert">&</span> Web</h2>
      <h2 className="soustitre2">Developpeur Web <span className="andVert">&</span> Mobile</h2> */}
      </div>
    </div>
  );
}

export default HeaderConcept;
