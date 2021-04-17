import React from 'react';
import '../../App.css';
import Navbar from "../Navbar/Navbar";
import HeaderConcept from "../HeaderConcept/HeaderConcept"
import "./Home.css";
import Accordion from "../Accordeon/Accordion";
import Slideshow from "../Carousel/Slideshow";
import site1 from "../ecransWeb/blogChartres.jpg";
import site2 from "../ecransWeb/livresEthiques.jpg";
import site3 from "../ecransWeb/serieNator.jpg";
import site4 from "../ecransWeb/partirauvert.jpg";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import moi from "./Avatar.png";

import img1 from "../Carousel/1.jpg";
import img2 from "../Carousel/2.jpg";
import img3 from "../Carousel/3.jpg";
import img4 from "../Carousel/4.jpg";
import img5 from "../Carousel/5.jpg";
import img6 from "../Carousel/6.jpg";
import img7 from "../Carousel/7.jpg";
import img8 from "../Carousel/8.jpg";
import img9 from "../Carousel/9.jpg";
import img10 from "../Carousel/10.jpg";
import img11 from "../Carousel/11.jpg";
import img12 from "../Carousel/12.jpg";
import img13 from "../Carousel/13.jpg";
import img14 from "../Carousel/14.jpg";
import img15 from "../Carousel/15.jpg";
import img16 from "../Carousel/16.jpg";
import img17 from "../Carousel/17.jpg";
import img18 from "../Carousel/18.jpg";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption one" },
  { src: img7, caption: "Caption two" },
  { src: img8, caption: "Caption three" },
  { src: img9, caption: "Caption four" },
  { src: img9, caption: "Caption five" },
  { src: img10, caption: "Caption one" },
  { src: img11, caption: "Caption two" },
  { src: img12, caption: "Caption three" },
  { src: img13, caption: "Caption four" },
  { src: img14, caption: "Caption five" },
  { src: img15, caption: "Caption three" },
  { src: img16, caption: "Caption four" },
  { src: img17, caption: "Caption five" },
  { src: img18, caption: "Caption six" }
];


export default function Home() {
  return (
    <>
    <div id="haut"></div>
    <Navbar />
    <HeaderConcept />
    <section id="presentation" className="presentation">
      <br></br>
      <br></br>
      <h2 className="titrePresentation">Qui suis-je ?</h2>
      <div className="portrait">
        <img src={moi} className="moiAvatar" alt="moi"/>
      </div>
      <div className="containerPresentation">
        <div className="textDePresentation">
          <p className="maPresentation">
            Je suis un <b>Graphiste Multimédia (Web et Print)</b> depuis 2001.<br></br><br></br>
            Je touche aux logiciels de retouche d'images et vectoriels tels que : Photoshop, Illustrator, InDesign...<br></br>
            Je disais Web par le biais du WebDesign avec Dreamweaver, WordPress...et participé à la rédaction d'articles en qualité de Webmaster.<br></br>
            Je touche aussi à la Photo et durant mon parcours j'ai également été amené à faire du Montage Vidéo (Vegas Pro...)<br></br><br></br>
            Depuis Septembre 2021, j'ai articulé mes compétences dans le Web avec une formation en qualité de <b>Développeur Fullstack Web et Mobile</b>,
            où j'ai pût voir les langages et outils tels que :<br></br><br></br>
            <i>Html, CSS , React JS, Node Js, Express JS, SQL, Github, Figma, ...</i><br></br>
          </p>
          </div>
        <div className="lesAscenseurs">
          <div className="accordeons">
              <Accordion
              title="Mon CV"
              
              content="
              <p>
              Pour plus d'informations sur mon parcours professionnel ou mes skills...n'hésitez pas à télécharger mon CV <i>(en cliquant dessus)</i>.</p><br></br>
              <p><b>1994:</b> BAC S</p>
              <p><b>2000:</b> BAC +2 : Graphiste Publicitaire et Artistique <i>(Photoshop, Illustrator, Xpress, Indesign...)</i></p>
              <p><b>2003:</b> Niv. BAC +2 : Formation Webdesigner</p>
              <p><b>2020:</b> BAC +2 : Développeur Web et Mobile <i>(Html, Css, JS, ReactJS, NodeJS, ExpressJS, Figma, Github...)</i></p><br></br>
              <p><b>langues :</b> anglais, Espagnol, Portugais</i></p><br></br>
              "
                         
            />
            
            <Accordion
              title="Skills"
              content="
              <p><b>Curieux :</b> De nature, j'aime apprendre de nouvelles technos et de manière générale découvrir des choses utiles.</p><br></br>
              <p><b>Rigoureux :</b> J'ai de bonnes capacités d'organisation et d'analyse.</p><br></br>
              <p><b>Créatif :</b> Je suis force de proposition et aime apporter une touche stylisée et des nouvelles idées de Marketing.</p><br></br>
              
              
              "
            />
            <Accordion
              title="Mes aspirations"
              content="
              <p>Passionné, j'ai besoin de me retrouver dans un contexte polyvalent : du Design, de la Fonctionnalité, de la Créativité, de l'Art, de la Disposition, de la Cohérence, de l'Opérationnel.</p>
              </br>
              
              "
            />
            <Accordion
              title="Mes centres d'intérêts"
              content="
              <p><b>le Design :</b> print et web, photo, vidéo. avec une certaine senbilité aux prises de vue.</p>
              <p><b>le sport :</b> collectif ou individuel, j'en ai pratiqué pendant de nombreuses années et je continue à titre personnel.</p>
              <p><b>les voyages :</b> j'aime découvrir d'autres horizons et cultures, besoin d'évasion.</p>
              <p><b>la lecture :</b> tous types</p>
              "
            />
            </div>   
        </div>
      </div>
    </section>

    <div className="containerDivider">
      <div className="divider"></div>
    </div>

    <section className="leCarousel" id="elCarousel">
      <br></br>
      <br></br>
    <h2 className="titrePresentation2">Mon Portfolio <i>(Print)</i></h2>
    <h3 className="sousTitrePresentation2">Quelques exemples de mon travail</h3>
     <div className="containerSlide">
          <div className="gauche">
          <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`5000`}
        />
        </div>
        <div className="droite">
          
          <p><b>Graphiste Print</b> (Edition),<br></br>  
            Je réalise donc tous types de travaux graphiques :<br></br>  <br></br>
            <ul className="listeGraphiste">
            <li>
            Du logo aux plaquettes professionnelles<br></br><br></br> 
            </li>
            <li>
            en passant par les cartes de visite,<br></br><br></br>  
            </li>
            <li>
            les dépliants, les Menus restaurants (ou autres),<br></br><br></br>  
            </li>
            <li>
            les flyers promotionnels, affiches (pour soirées, ouvertures professionnelles, autres promos...),<br></br><br></br>  
            </li>
            <li>
            Pochettes CD artistes, E-Cards...<br></br> <br></br> 
            </li>
          </ul>       
            J'apporte des idées de Rédaction et Marketing intéressantes pour rafraîchir votre Communication.<br></br> <br></br> 
            j'élabore également des éléments pour le Multimédia.</p>
        </div>
      </div>      
    </section>
    <div className="containerDivider">
      <div className="divider"></div>
    </div>
    <section className="portFolioWeb" id="webPortfolio">
    <br></br>
    <br></br>
    <h2 className="titrePresentation2">Mon Portfolio (Web)</h2>
    <h3 className="sousTitrePresentation2">Quelques exemples de mon travail</h3>
    <div className="containerWeb">

      <div className="site">
        <div className="cardSite">
          <div className="imageSite">
              <a href="https://blog2chartres.netlify.app/" ><img src={site1} alt="imagesSite" className="imagesSite"/></a>
          </div>
          <div className="textSite">
              <p className="prezSite">Blog de présentation de Chartres</p>
              <p className="prezSite"><i>Equipe Web'dev': 4 personnes</i></p>
              <p className="prezSite">Projet Html, Css, JS</p>
          </div>
          </div>
      </div>

      <div className="site">
        <div className="cardSite">
          <div className="imageSite">
                <a href="https://projet2serinator.netlify.app/" target="_blank" rel="noreferrer"><img src={site3} alt="imagesSite" className="imagesSite"/></a>
          </div>
          <div className="textSite">
                <p className="prezSite">Sérinator : Application du choix de série</p>
                <p className="prezSite"><i>Equipe Web'dev': 4 personnes</i></p>
              <p className="prezSite">Projet React Js</p>
          </div>
          </div>
      </div>

      <div className="site">
          <div className="cardSite">
              <div className="imageSite">
                  <a href="http://livres-enfants-ethiques.fr/" target="_blank" rel="noreferrer"><img src={site2} alt="imagesSite" className="imagesSite"/></a>
              </div>
              <div className="textSite">
                  <p className="prezSite">Livres éthiques pour enfants</p>
                  <p className="prezSite"><i>Equipe Web'dev': 4 personnes</i></p>
              <p className="prezSite">Projet Fullstack: React JS, Node JS, Express JS</p>
              </div>
          </div>
      </div>      

      <div className="site">
          <div className="cardSite">
              <div className="imageSite">
                  <a href="http://partirauvert.fr/" target="_blank" rel="noreferrer"><img src={site4} alt="imagesSite" className="imagesSite"/></a>
              </div>
              <div className="textSite">
                  <p className="prezSite">Partir au vert : Séjours dans la nature</p>
                  <p className="prezSite"><i>Equipe Web'dev': 2 personnes</i></p>
              <p className="prezSite">Projet Fullstack: React JS, Node JS, Express JS</p>
              </div>
          </div>
      </div>

    </div>
    </section>
    <br></br>
    <section id="contactPartie">
      <br></br>
      <br></br>
    < ContactForm />
    </section>
    <section id="footerPartie">
      
      <Footer/>
    </section>
    
    </>
  );
}
