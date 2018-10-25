import React from "react";
import './styles/main.css';
import Clock from 'react-live-clock';

const LiveClock = (props) => {
    
  return (
    <div>
      <i className="far fa-clock"></i>
      <Clock className="current-time" format={'HH:mm:ss'} ticking={true} timezone={'Europe/Sofia'} />
    </div>
  );
}


export default LiveClock;
