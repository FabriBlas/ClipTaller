import React from 'react';

/*import the CSS */
import "./Home.css";

/* import the images for the grid */
import grid1 from '../../../img/grid1.png';
import grid2 from '../../../img/grid2.png';
import grid3 from '../../../img/grid3.png';
import grid4 from '../../../img/grid4.png';
import grid5 from '../../../img/grid5.png';
import grid6 from '../../../img/grid6.png';
import grid7 from '../../../img/grid7.png';

/* GridNatural Home View */
export default function GridNatural() {
    return (
        // image grid container
        <div className="grid">
            {/* all image should be added here */}
            <img className="img-item" src={grid1} alt="flora landscape"/>
            <img className="img-item" src={grid2} alt="river and ducks"/>
            <img className="img-item" src={grid3} alt="deer running"/>
            <img className="img-item" src={grid4} alt="fauna lanscape"/>
            <img className="img-item" src={grid5} alt="flowers"/>
            <img className="img-item" src={grid6} alt="deer herd"/>
            <img className="img-item" src={grid7} alt="deer"/>
            
        </div>
    )
}

