import React from 'react';
import Carousel from "./Carousel";

/* CSS */
import "./Home.css";

/* Attractions Home View */
export default function Attractions() {
  return (
    <div className="block">
      <div className="container-attractions">
        <div className="container header-block">
          <div>
            <svg className="rectangle-header" />
            <h1 className="title title-attractions">Explore This Popular Texas
             Destination!</h1>
          </div>
          <div className="text">
            <p>Texas Hill Country Has So Much to Offer.</p>
            <p>Relax in our unique cabins or luxury RV sites, surrounded
            by the tranquility of nature, to experience the delights
              of this popular tourist region:</p>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}