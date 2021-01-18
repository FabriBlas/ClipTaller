import React from 'react'

/* Component */
/* All componente should be import with a initial capital letter because react
works in this way */
import Header from "./Header";
import Attractions from "./Attractions";
import Natural from './Natural';
import Accommodations from "./Accommodations";
import Subscribe from "./Subscribe";
import Location from "./Location";
import Footer from '../../common/Footer.js';

export default function Home() {
  return (
    <div>
      {/* All components of home page should be added here  */}
      <Header/>
      <Attractions/>
      <Natural/>
      <div className="relative">
      <Accommodations/>
      <Subscribe/>
      <Location/>
      </div>
      <Footer/>
    </div>
    
  )
}
