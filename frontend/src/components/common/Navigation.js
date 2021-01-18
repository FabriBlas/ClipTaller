import React from 'react'
/* Links are used to navigate in the project routes*/
import { Link } from 'react-router-dom'

/* Css */
import './Navigation.css'

/* Images */
import logo from '../../img/skyetexas_logo.svg'
import facebookIcon from '../../img/facebook-icon.svg';
import instagramIcon from '../../img/instagram-icon.svg';
import twitterIcon from '../../img/twitter-icon.svg';

export default function Navigation() {
  return (
    <div>
      <nav className="navbar bg-primary navbar-dark">
        <div className="container">
          {/*All content of navbar should be added here*/}
          {/* Branch image */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="SkyTexas Logo" />
          </Link>
          <ul className="nav justify-content-end">
            {/* Links of social Media */}
            <li className="nav-item nav-sm-icon">
              <a className="nav-link" href="https://www.facebook.com/" 
              target="new">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>

            <li className="nav-item nav-sm-icon">
              <a className="nav-link" href="https://twitter.com/" 
              target="new">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>

            <li className="nav-item nav-sm-icon">
              <a className="nav-link" href="https://www.instagram.com/" 
              target="new">
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
