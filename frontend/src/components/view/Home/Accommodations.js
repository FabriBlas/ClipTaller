import React from 'react'

/* Css */
import "./Home.css"

/* Images */
import imageGrid1 from '../../../img/Rectángulo 10 copia 7.png';
import imageGrid2 from '../../../img/Rectángulo 10 copia 8.png';
import imageGrid3 from '../../../img/Rectángulo 10 copia 9.png';
import imageGrid4 from '../../../img/Rectángulo 10 copia 10.png';


export default function Accommodations() {
  return (
    <div className="block container pd">
      <div className="d-flex d-flex-vertical d-flex-centered">
        
        {/* Header element */}
        <div className="header-block">
          <svg className="rectangle-header"/>
          <h1 className="title title-accommodation">Remarkable Hideaway Ranch 
          Resort</h1>
          <div className="text">
            <p>The resort’s overnight accommodations—luxury cabins and RV sites– encircle 
              three large ponds which create a calming ambiance. Our surprisingly upscale 
              facilities are built with your comfort, convenience, and relaxation in mind. 
              Yet the eclectic architectural style reflects an authentic Texas 
              ranch environment.</p>
          </div>
        </div>

        {/*A block for the padding between elements*/}
        <div style={{"marginBottom": "3vh"}}></div>


        <div className="d-flex accommodation-flex">
            <ul className="accommodation-list text">
              {/*All items in the list should be added here*/}
              <li>Beautiful Swimming Pools & Spa.</li>
              <li>Luxury Family Bath Houses & Laundry.</li>
              <li>Unique Waterfront Cabins.</li>
              <li>Three Large Ponds with Boardwalks.</li>
              <li>FREE Gigabit Speed Fast Wi-Fi.</li>
              <li>Convenience Store.</li>
              <li>Fenced Pet Area.</li>
              <li>Golf Cart Rentals.</li>
              <li>Gaming Courts, Pickle Ball.</li>
              <li>Group Club Room with Kitchen.</li>            
            </ul>

          <div className="d-grid accommodation-grid">
            {/*All images should be added here, the order in the grid should be modified in css "accommodation-grid" */}
            <div className="accommodation-img-gradient">
              <img src={imageGrid1} alt="Welcome house"/>
              <p className="img-caption">Image Caption</p>
            </div>
            <div className="accommodation-img-gradient">
              <img src={imageGrid2} alt="Pool sector"/>
              <p className="img-caption">Image Caption</p>
              </div>
            <div className="accommodation-img-gradient">
              <img src={imageGrid3} alt="Living Room"/>
              <p className="img-caption">Image Caption</p>
              </div>
            <div className="accommodation-img-gradient">
              <img src={imageGrid4} alt="Container house"/>
              <p className="img-caption">Image Caption</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
