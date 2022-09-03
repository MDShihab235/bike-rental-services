import React from "react";
import playStore from "../../image/playstore.png";
import appStore from "../../image/Appstore.png"
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>WOSTIN</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Mikat Syed</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/mikat_syed">Instagram</a>
        <a href="https://www.facebook.com/syedmilka.cricket">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
