import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";


const ContactForm = () => {
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [message, setMessage] = useState(null);
  // const mailTo = "mailto:" + mail + "?subject=" + name + firstname + "&body=" + message;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value.replace(/\n/g, "%0A"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mail || !name || !firstname || !message) {
      alert("Merci de remplir tous les champs");
    } else {
      emailjs.sendForm(
        "service_sj798oe",
        "template_1vr5dno",
        e.target,
        "user_3IV3CFwlcwoGhXLwgO2tv"
      );
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
      alert("Votre Message a été envoyé avec succès !!");
      e.target.reset();
    }
  };

  return (
    <div className="sectionContact">
      
      <h1 className="titrePage">Contact</h1>
      <div className="introContact">
        <br />
        <p className="paragrapheContact">
          Si vous avez une question ou voulez me contacter, sentez-vous libre de
          m'envoyer un message.
        </p>
      </div>
      <div className="containerForm">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="inputsName">
          <input
            className="inputName"
            type="text"
            name="name"
            placeholder="Votre Nom"
            onChange={handleName}
          />

          <input
            className="inputFirstName"
            type="text"
            name="firstname"
            placeholder="Votre Prénom"
            onChange={handleFirstName}
          />
          </div>

          <input
            className="inputEmail"
            type="email"
            name="email"
            placeholder="Votre Email"
            onChange={handleMail}
          />

          <textarea
            className="inputMessage"
            type="text"
            name="message"
            placeholder="Votre Message"
            onChange={handleMessage}
          />
          <div>
            <br />
            <button className="envoyer" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
