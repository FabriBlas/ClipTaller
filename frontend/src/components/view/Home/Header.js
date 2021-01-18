import React from 'react'

/* Images */
import scrollDown from '../../../img/scroll_down_icon.svg'

/* CSS */
import "./Home.css";

/* Component */
/* All componente should be import with a initial capital letter because react 
works in this way */
import Navigation from '../../common/Navigation'

/* Header Home View */
export default function Header() {
  return (
    <div className="bg-home">
      <div className="header-content gradient">
        {/* Common navigation */}
        <Navigation />
        {/* Header View */}
        <div className="container-title">
          <div>
            <h1 className="title-header">SKYE Texas
              <p >Hill Country Resort</p>
            </h1>
          </div>
          <div className="text-header">
            <p>Experience nature in remarkable confort at this luxurious new 
              concept in outdoor hospitality.</p>
            <p>The Texas Hill Country region is an exciting vacation 
              destination featuring Fredericksburg, the quaint historic German
              town, and surrounded by the Texas Wine Country.</p>
          </div>
          <div className="scroll-down">
            <p>SCROLL DOWN</p>
            <img src={scrollDown} alt="Scroll Down icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
