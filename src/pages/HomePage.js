import React from "react";
import people from '../assets/people.png';
import ai from '../assets/contact-img.svg';
import '../pages/Homepage.css';

const HomePage = () => (
  <div className="gpt3__header section__padding" id="home">
  <div className="gpt3__header-content">
    

  <section class="main" >
            <div class="content">
                <h2>Since 2022 <br/><span>Student Club</span></h2>
                <div class="animated-text">
                    <h3>National Institute of Business Management</h3>
                    <h3>Clubmes-Client</h3>
                    <h3>More beautiful palces</h3>
                </div>
            </div>
  </section>

  <p>
  To achieve professional excellence in the field of User Interface and User Experience by engaging in challenging, creative and diverse projects, while contributing to the development of creatively
  </p>

    <div className="gpt3__header-content__input">
      <input type="email" placeholder="Your Email Address" />
      <button type="button">Get Started</button>
    </div>

    <div className="gpt3__header-content__people">
      <img src={people} />
      <p>1,600 people requested access a visit in last 24 hours</p>
    </div>
  </div>

  <div className="gpt3__header-image">
    <img src={ai} />
  </div>
</div>
);


export default HomePage;