import React from "react";
import './styles/main.css';
import {NavLink} from 'react-router-dom';

const Breadcrumbs = (props) => {
  return (
    <div className="container">
      <div className="breadcrumbs-box">
        <NavLink to='/'>{props.levelOne}</NavLink>
        <span> > </span>
        <NavLink to={props.levelTwoLink}>{props.levelTwo}</NavLink>
        <span>{props.levelThree === undefined ? "" : " > "}</span>
        <span>{props.levelThree}</span>
    </div>
    </div>
  );
}

export default Breadcrumbs;