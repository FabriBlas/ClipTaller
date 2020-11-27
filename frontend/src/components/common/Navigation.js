import React from 'react'
import { Link } from 'react-router-dom'
/* Css */
import './Navigation.css'

/*Images */
import logo from '../../img/skyetexas_logo.svg'
import facebook_icon from '../../img/facebook-icon.svg';
import instagram_icon from '../../img/instagram-icon.svg';
import twitter_icon from '../../img/twitter-icon.svg';

export default function Navigation() {
  return (
    <div>
      <nav className="navbar bg-primary navbar-dark">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="SkyTexas Logo" />
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item nav-sm-icon">
            <a className="nav-link " href="https://www.facebook.com/" target="new">
              <img src={facebook_icon} alt="Facebook icon" />
              </a>
          </li>
          <li className="nav-item nav-sm-icon">
            <a className="nav-link " href="https://twitter.com/" target="new">
            <img src={twitter_icon} alt="Twitter icon" />
            </a>
          </li>
          <li className="nav-item nav-sm-icon">
            <a className="nav-link " href="https://www.instagram.com/" target="new">
            <img src={instagram_icon} alt="Instagram icon" />
            </a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}
