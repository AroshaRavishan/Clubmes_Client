
import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import '../pages/ProfilePage.css';
import image from '../assets/avatar.png';
import image1 from '../assets/PNG.png';




const ProfilePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

return (
<div class="container">
<table>
<tr>
<td>
<section>
<label for="fileToUpload">
<i class="fa fa-camera"></i>
</label>
<img src={image} id="blah" alt="Avatar"/>
</section>
<h1>Bharadwaj</h1>
<h3>Web Designer & Developer</h3>
</td>
<td>
<ul class="tablename">
<li><b>Full name</b> </li>
<li><b>Email</b> </li>
<li><b>Contact number</b> </li>
<li><b>Address</b> </li>
<div class="social-menu">
    <ul>
        <li><a href="https://github.com/sanketbodke" target="blank"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li>
        <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-facebook" target="blank"></i></a></li>
    </ul>
</div>
</ul>
</td>
</tr>
<div class="newbtn">

</div>
</table>
<div class="square">

<div>
    <input class ="popup"
      type="button"
      value="Payment"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
       <div class="popupform">  
  <form id="contact" action="" method="post">
  
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
</div>
<div class="square">

<h3 class="edu">Education</h3>
<div id="parent"> 
  <div class="col">
  <img src={image1} id="blah" alt="Avatar"/>  
  </div> 
  <div class="col1">
  <h6>National institute of Business Management</h6>
  <p>Galle <br/>M.G.Arosha Ravishan <br/>Undergraduate</p>
  </div> 
</div> 

<hr width="100%" color="green" size="50px" align="center" />


<div id="parent"> 
  <div class="col">
  <img src={image1} id="blah2" alt="Avatar"/>  
  </div> 
  <div class="col2">
  <h6>National institute of Business Management</h6>
  <p>Galle <br/>M.G.Arosha Ravishan <br/>Undergraduate</p>
  </div> 
</div> 
</div>
</div>
  )
}

export default ProfilePage;
