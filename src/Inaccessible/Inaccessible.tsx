import { useState } from "react";
import RSVPModal from "../Modal/Modal";
import firstCouplePic from "../assets/couple1.jpg";
import secondCouplePic from "../assets/couple2.jpg";

import "./Inaccessible.css";

function Inaccessible() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  
  return (
    <>
      <div className="image-container">
        <img src={firstCouplePic} className="image-item" />
        <div className="overlay-text">
          <h1>Peanut butter and Jelly</h1>
          <p>#PBandJ</p>
        </div>
      </div>

      <section className="details-section">
        <div>
          <p className="details-header-section">The date</p>
          <p className="details-content-section">12th January 2024</p>
        </div>

        <div className="ceremony-section">
          <p className="details-header-section">Ceremony</p>
          <p className="details-content-section">The palace</p>
        </div>
      </section>

      <section className="meet-section">
          <h2 className="story-header">Our story</h2>
          <div className="story-group">
          <div className="story-content-group">
            <div className="story-content">
              <p className="story-p">
                I was always a bit of a stick-in-the-jar type, you know? Smooth
                and dependable, but admittedly a little bland on my own. Then
                one day, while sitting on the shelf at the local grocery store,
                I caught a glimpse of the most vibrant, sweet-looking jar I'd
                ever seen. It was Jelly, with her deep purple hue and sparkly
                glass jar. I was instantly stuck (pun intended). When a
                shopper's hand reached for us both, I knew it was destiny. From
                that moment on, I vowed to spread joy with her, no matter where
                life took us.
              </p>
              <p className="story-b"> - His perspective</p>
            </div>

            <div className="story-content">
              <p className="story-p">
                I'd always been a free spirit, full of fruity fun and not afraid
                to wobble a little. But something was missing - I needed someone
                to balance out my sweetness. That's when I spotted Peanut
                Butter, looking all smooth and sophisticated in his jar. I
                couldn't help but giggle at his nutty charm. When we were both
                picked up and placed in the same shopping cart, I felt a rush of
                excitement. It was like we were two halves of a perfect
                sandwich, finally coming together. Now, life is a sweet and
                savory adventure, and I wouldn't have it any other way!
              </p>
              <p className="story-b"> - Her perspective</p>
            </div>
          </div>

          <div className="image-container">
            <img src={secondCouplePic} className="image-item" />
          </div>
          </div>
      </section>

      <div className="button-section">
      <button onClick={() => window.open('https://www.weddingshop.com/')}>Visit our registry</button>
      </div>

      <div>
        <p className="rsvp-text">R S V P</p>
        <p className="rsvp-time">Please reply by 1st of December</p>
        <button onClick={openModal}>RSVP Now</button>
      </div>

      {modalIsOpen && <RSVPModal closeModal={closeModal} />}

      <div className="footer-item">
        <p className="footer-date">12th January 2024</p>
        <p className="footer-name">PB + J</p>
      </div>
    </>
  );
}

export default Inaccessible;
