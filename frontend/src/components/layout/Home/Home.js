import React from 'react'
import Navigation from '../../common/Navigation'

import Scroll from '../../../img/scroll_down_icon.svg'

import "./Home.css";

export default function Home() {
    return (
        
        <div className="bg-home">

            <div className="header-content gradient">
                <Navigation />
                <div className="container-title">
                    <div>
                    <h1 className="title">SKYE Texas
                    <p >Hill Country Resort</p>
                    </h1>
                    
                    </div>
                    <div className="text-header">
                        <p>Experience nature in remarkable confort at this luxurious new concept in outdoor hospitality.</p>
                        <p>The Texas Hill Country region is an exciting vacation destination featuring Fredericksburg, the quaint historic German town, and surrounded by the Texas Wine Country.</p>
                    </div>
                    <div className="scroll-down">
                        <p>SCROLL DOWN</p>
                        <img src={Scroll} alt="Scroll Down icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
