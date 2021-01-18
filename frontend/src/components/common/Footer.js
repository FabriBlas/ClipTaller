import {React} from 'react';
import "./Navigation.css";

/* All images should be imported here */
import logo from '../../img/skyetexas_logo.svg'
import facebookIcon from '../../img/facebook-icon.svg';
import instagramIcon from '../../img/instagram-icon.svg';
import twitterIcon from '../../img/twitter-icon.svg';

function Footer() {
  return (
    <div className= "footer">
      <div className= "footer-flex">
		<a href="/">
	      <img src={logo} alt="Skye Texas Logo" className="branch-logo"/>
		</a>
	    <div>
	      <p>SKYE Texas Hill Country Resort, 16880 North Highway 87,</p>
	      <p>Fredericksburg, TX 78624</p>
	    </div>
	    <div className="icons">
	      {/* All icons of social media should be added here */}
		  <a className="nav-link" href="https://www.facebook.com/"
            target="new">
	        <img src={facebookIcon} alt="facebook icon"/>
		  </a>
		  <a className="nav-link" href="https://www.instagram.com/"
            target="new">
	        <img src={instagramIcon} alt="instagram icon"/>
		  </a>
		  <a className="nav-link" href="https://twitter.com/"
            target="new">
	        <img src={twitterIcon} alt="twitter icon"/>
		  </a>	  
	    </div>
	    <span className="rectangle-footer"></span>
	    <div className="rights">
	      <p>© 2020 SKYE Texas. All rights reserved.</p>
	    </div>
      </div>
    </div>
  );
}

export default Footer;
