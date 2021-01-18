import React from 'react';

/* Map location resort view */
export default function Location() {
return (
  <iframe className="map"
    title="Resort Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421428.82066962647!2d-99.06462847366622!3d30.58480855350019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865bcfa32b69a13f%3A0x68963821d41a97f2!2sSkye%20Texas!5e0!3m2!1sen!2sar!4v1610119052478!5m2!1sen!2sar"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="true"
      tabIndex="0"
  />
)
}