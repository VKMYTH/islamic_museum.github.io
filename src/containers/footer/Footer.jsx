import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Vaibhav Kolli & Hayden O<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>CHS</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Museum</h4>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 CHS Museum by Hayden O and Vaibhav Kolli. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
