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
import print from "../pictos/print.png";
import webby from "../pictos/globe.png";


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
            Je suis un <b>Graphiste Multim??dia (Web et Print)</b> depuis 2001.<br></br><br></br>
            Je touche aux logiciels de retouche d'images et vectoriels tels que : Photoshop, Illustrator, InDesign...<br></br>
            Je disais Web par le biais du WebDesign avec Dreamweaver, WordPress...et particip?? ?? la r??daction d'articles en qualit?? de Webmaster.<br></br>
            Je touche aussi ?? la Photo et durant mon parcours j'ai ??galement ??t?? amen?? ?? faire du Montage Vid??o (Vegas Pro...)<br></br><br></br>
            En Septembre 2021, j'ai articul?? mes comp??tences dans le Web avec une formation en qualit?? de <b>D??veloppeur Fullstack Web et Mobile</b>,
            o?? j'ai p??t voir les langages et outils tels que :<br></br>
            <i>Html, CSS , React JS, Node Js, Express JS, SQL, Github, Figma, ...</i><br></br><br></br>
            J'ai aussi suivi une formation au <b>Montage Vid??o</b> et <b>Motion Designer</b> sur Adobe Premiere et After Effects.
          </p>
          </div>
        <div className="lesAscenseurs">
          <div className="accordeons">
              <Accordion
              title="Mon CV"
              
              content="
              <p>
              Pour plus d'informations sur mon parcours professionnel ou mes skills...n'h??sitez pas ?? t??l??charger mon CV <i>(en cliquant dessus)</i>.</p><br></br>
              <p><b>1997:</b> BAC S</p>
              <p><b>2000:</b> BAC +2 : Graphiste Publicitaire et Artistique <i>(Photoshop, Illustrator, Xpress, Indesign...)</i></p>
              <p><b>2003:</b> Niv. BAC +2 : Formation Webdesigner</p>
              <p><b>2020:</b> BAC +2 : D??veloppeur Web et Mobile <i>(Html, Css, JS, ReactJS, NodeJS, ExpressJS, Figma, Github...)</i></p>
              <p><b>2021:</b> Niv. BAC +2 : Motion Designer et Monteur Vid??o <i>(Adobe Premiere et After Effects...)</i></p><br></br>
              <p><b>langues :</b> anglais, Espagnol, Portugais</i></p><br></br>
              "
                         
            />
            <Accordion
              title="Exp??riences Pros"
              content="
              <p>JANVIER 2021 - AVRIL 2021</p>
              <p><b>DEVELOPPEUR WEB UX/UI</b></p>
              <p>Soci??t?? : Partir au vert</p>
              <p>(Stage 3 mois) Projet Fullstack 'from Scratch' sous React JS,
              Node JS, Express JS, MySQL, FIGMA, GITHUB...
              Nous avons ??labor?? tout le site pour une cr??ation d'entreprise
              bas??e sur la r??servation de s??jours dans la nature.</p><br></br>
              
              <p>2011 - 2020</p>
              <p><b>GRAPHISTE MULTIM??DIA (PRINT & WEB)</b></p>
              <p>Soci??t?? : JCB Siganlisations</p>
              <p>Au sein d'une entreprise de signalisation, J'ai particip?? durant
              de nombreuses ann??es ?? la cr??ation de la communication
              interne et externe pour des clients divers (Photoshop,
              Illustrator ??taient mes outils)<p><br></br>

              <p>2006 - 2011</p>
              <p><b>GRAPHISTE DESIGNER CR??ATIF MULTIM??DIA & WEBDESIGNER</b></p>
              <p>Soci??t?? : 707COM</p>
              <p>Au sein d'une agence de communication, j'ai particip?? ?? la
              cr??ation de tous types de produits pour la communication et ai
              apport?? des id??es de charte graphique et d'id??es de
              marketing: (logo, carte de visite, plaquettes pros., flyers
              promotionnels, affiches, pochettes CD, menus restaurants,
              enseignes, marquage vitrine, marquage v??hicules,....) et
              ??galement pour le web (site inernet, banni??res, emailings...)</p>
              <p>Exp??rience tr??s enrichissante en polyvalence.<p><br></br>

              <p>2004 - 2006</p>
              <p><b>GRAPHISTE MULTIM??DIA</b></p>
              <p>Soci??t?? : ILL EVENTS MUSIC</p>
              <p>Au sein d'un label ind??pendant de musiques urbaines
              (Yvelines)</p>
              <p>j'??laborais plusieurs t??ches li??es ?? la
              communication: (Pochettes d'artistes, affiches promos, pages
              promos pour magazines sp??cialis??s, pochettes et livrets CD et
              vinysl...) Aussi j'alimentais le site du label des nouveaut??s et
              actus...</p><br></br>

              <p>2001 - 2004</p>
              <p><b>GRAPHISTE -WEBMASTER - WEBDESIGNER - REDACTEUR WEB</b></p>
              <p>Soci??t?? : ADIQ</p>
              <p>Salari?? d'une association parisienne, j'alimentais le contenu
              d'un site d??j?? en place sur les cultures urbaines (macite.net) :
              tant bien graphiquement, que d'un point de vue r??dactionnel.</p>
              <p>Mes d??buts du Web</p><br></br>    
              "
            />
            <Accordion
              title="Skills"
              content="
              <p><b>Curieux :</b> De nature, j'aime apprendre de nouvelles technos et de mani??re g??n??rale d??couvrir des choses utiles.</p><br></br>
              <p><b>Rigoureux :</b> J'ai de bonnes capacit??s d'organisation et d'analyse.</p><br></br>
              <p><b>Cr??atif :</b> Je suis force de proposition et aime apporter une touche stylis??e et des nouvelles id??es de Marketing.</p><br></br>
              
              
              "
            />
            <Accordion
              title="Mes aspirations"
              content="
              <p>Passionn??, j'ai besoin de me retrouver dans un contexte polyvalent : du Design, de la Fonctionnalit??, de la Cr??ativit??, de l'Art, de la Disposition, de la Coh??rence, de l'Op??rationnel.</p>
              </br>
              
              "
            />
            <Accordion
              title="Mes centres d'int??r??ts"
              content="
              <p><b>le Design :</b> print et web, photo, vid??o. avec une certaine senbilit?? aux prises de vue.</p>
              <p><b>le sport :</b> collectif ou individuel, j'en ai pratiqu?? pendant de nombreuses ann??es et je continue ?? titre personnel.</p>
              <p><b>les voyages :</b> j'aime d??couvrir d'autres horizons et cultures, besoin d'??vasion.</p>
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
      <div className="pictoPrint">
      <img src={print} className="print" alt="print"/>
      <h2 className="titrePresentation2">Mon Portfolio <i>(Print)</i></h2>
    <h3 className="sousTitrePresentation2">Quelques exemples de mon travail</h3>
      </div>

    
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
            Je r??alise donc tous types de travaux graphiques :<br></br>  <br></br>
            <ul className="listeGraphiste">
            <li>
            Du logo aux plaquettes professionnelles<br></br><br></br> 
            </li>
            <li>
            en passant par les cartes de visite,<br></br><br></br>  
            </li>
            <li>
            les d??pliants, les Menus restaurants (ou autres),<br></br><br></br>  
            </li>
            <li>
            les flyers promotionnels, affiches (pour soir??es, ouvertures professionnelles, autres promos...),<br></br><br></br>  
            </li>
            <li>
            Pochettes CD artistes, E-Cards...<br></br> <br></br> 
            </li>
          </ul>       
            J'apporte des id??es de R??daction et Marketing int??ressantes pour rafra??chir votre Communication.<br></br> <br></br> 
            j'??labore ??galement des ??l??ments pour le Multim??dia.</p>
        </div>
      </div>      
    </section>
    <div className="containerDivider">
      <div className="divider"></div>
    </div>
    <section className="portFolioWeb" id="webPortfolio">
    {/* <br></br> */}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
    <div className="pictoWeb">
      <img src={webby} className="web" alt="web"/>
      <h2 className="titrePresentation2">Mon Portfolio (Web)</h2>
    <h3 className="sousTitrePresentation2">Quelques exemples de mon travail</h3>
      </div>
    
    <div className="containerWeb">

      <div className="site">
        <div className="cardSite">
          <div className="imageSite">
              <a href="https://blog2chartres.netlify.app/" ><img src={site1} alt="imagesSite" className="imagesSite"/></a>
          </div>
          <div className="textSite">
              <p className="prezSite">Blog de pr??sentation de Chartres</p>
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
                <p className="prezSite">S??rinator : Application du choix de s??rie</p>
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
                  <p className="prezSite">Livres ??thiques pour enfants</p>
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
                  <p className="prezSite">Partir au vert : S??jours dans la nature</p>
                  <p className="prezSite"><i>Equipe Web'dev': 2 personnes</i></p>
              <p className="prezSite">Projet Fullstack: React JS, Node JS, Express JS</p>
              </div>
          </div>
      </div>

    </div>
    </section>
     <section id="contactPartie">
    < ContactForm />
    </section>

    <section id="footerPartie">      
      <Footer/>
    </section>
    
    </>
  );
}
