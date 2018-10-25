import React from "react";
import './styles/main.css';
import Clock from 'react-live-clock';

const LiveClock = (props) => {
    
  return (
    <div className="time-clock">
      <i className="far fa-clock"></i>
      <Clock className="current-time" format={'HH:mm:ss'} ticking={true} timezone={'Europe/Sofia'} />
      <span>EET</span>
    </div>
  );
}


export default LiveClock;
