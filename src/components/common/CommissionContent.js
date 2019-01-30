import React from "react";
import './styles/main.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CommissionContent = (props) => {
  return (
    <div className="container">
      <div className="about-content">
        <h2 className="dark-title">{props.api[0][props.title]}</h2>
        <div className="title-red-line"></div>
        <div className="progressbar">
          <div className="progressbar-item">
            <CircularProgressbar
              initialAnimation={true}
              percentage={props.api[0].procent1}
              text={`${props.api[0].procent1}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: '#ae1318',
                },
                text: {
                  fill: '#fff',
                },
                path: {
                  stroke: '#fff',
                  transition: 'stroke-dashoffset 1s ease 0s',
                },
                trail: { stroke: 'transparent' },
              }}
            />
            <span className="bar-legend">up to 20 000<span className="legend-value">BGN</span></span>
            <span className="bar-total-text">on Total Revenue</span>
          </div>
          <div className="progressbar-item">
            <CircularProgressbar
              initialAnimation={true}
              percentage={props.api[0].procent2}
              text={`${props.api[0].procent2}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: '#ae1318',
                },
                text: {
                  fill: '#fff',
                },
                path: {
                  stroke: '#fff',
                  transition: 'stroke-dashoffset 1s ease 0s',
                },
                trail: { stroke: 'transparent' },
              }}
            />
            <span className="bar-legend">20 001 - 40 000<span className="legend-value">BGN</span></span>
            <span className="bar-total-text">on Total Revenue</span>
          </div>
          <div className="progressbar-item">
            <CircularProgressbar
              initialAnimation={true}
              percentage={props.api[0].procent3}
              text={`${props.api[0].procent3}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: '#ae1318',
                },
                text: {
                  fill: '#fff',
                },
                path: {
                  stroke: '#fff',
                  transition: 'stroke-dashoffset 1s ease 0s',
                },
                trail: { stroke: 'transparent' },
              }}
            />
            <span className="bar-legend">40 001 - 80 000<span className="legend-value">BGN</span></span>
            <span className="bar-total-text">on Total Revenue</span>
          </div>
          <div className="progressbar-item">
            <CircularProgressbar
              initialAnimation={true}
              percentage={props.api[0].procent4}
              text={`${props.api[0].procent4}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: '#ae1318',
                },
                text: {
                  fill: '#fff',
                },
                path: {
                  stroke: '#fff',
                  transition: 'stroke-dashoffset 1s ease 0s',
                },
                trail: { stroke: 'transparent' },
              }}
            />
            <span className="bar-legend">80 001 - 100 000<span className="legend-value">BGN</span></span>
            <span className="bar-total-text">on Total Revenue</span>
          </div>
          <div className="progressbar-item">
            <CircularProgressbar
              initialAnimation={true}
              percentage={props.api[0].procent5}
              text={`${props.api[0].procent5}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: '#ae1318',
                },
                text: {
                  fill: '#fff',
                },
                path: {
                  stroke: '#fff',
                  transition: 'stroke-dashoffset 1s ease 0s',
                },
                trail: { stroke: 'transparent' },
              }}
            />
            <span className="bar-legend">over 100 000<span className="legend-value">BGN</span></span>
            <span className="bar-total-text">on Total Revenue</span>
          </div>
        </div>
        <div className="about-text">
          <div dangerouslySetInnerHTML={{__html: props.api[0][props.content]}} />
        </div>
      </div>
    </div>
  );
}

export default CommissionContent;

