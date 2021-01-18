import React from 'react';
import GridNatural from './GridNatural'

/* CSS */
import "./Home.css";

/* Natural Home View */
export default function Natural() {
    return (
/* container for the whole block to define the background-color and height */
        <div className="blockNatural">
        <div className="container-natural container">
          {/* header container for title and text */}
          <div className="header-block">
            <div>
              <svg className="rectangle-header" />
              <h1 className="title-natural">Rejuvenating Natural Preserve</h1>
            </div>
            {/* description of the place */}
            <div className="text-natural">
              <p>Our Hill Country hideaway is an upscale resort embedded in 250 acres of parklike surroundings with open spaces and hidden trails that meander through curated groves of oak and mesquite, alive with local flora and fauna. Be sure to use our viewing stands to watch our herd of exotics.</p>
            </div>
          </div>
          {/* image grid */}
        <GridNatural></GridNatural>
        </div>
      </div>
    
    );
}