import React  from 'react';
import thumbnail from '../../imgs/thumbnail.jpg';
import left from '../../imgs/left.png';
import right from '../../imgs/right.png';
import switcherCheck from '../../imgs/switcher-check.png';

export default function Goals() {
  return (
    <div className="goals">
      <div className="section-title"><span>Games sold so far</span></div>
      <div className="games-sold">
        <div className="number">
          <div className="digit">0</div>
          <div className="digit">2</div>
          <div className="digit">2</div>
          <div className="dot-wrapper"><div className="dot" /></div>
          <div className="digit">5</div>
          <div className="digit">7</div>
          <div className="digit">6</div>
        </div>
      </div>
      <div className="in-progress">
        <div className="short">Reach 25.000...</div>
        <div className="description">...to unlock exclusive, never before seen, trailer from Divinity: Original Sin.</div>
      </div>
      <div className="switcher">
        <div className="step active"><img src={thumbnail} alt=""/></div>
        <div className="step"><img src={thumbnail} alt=""/></div>
        <div className="step"><img src={thumbnail} alt=""/></div>
        <div className="control left"><img src={left} alt=""/></div>
        <div className="control right"><img src={right} alt=""/></div>
      </div>
      <div className="buttons-switcher flex">
        <div className="button"><span><img src={switcherCheck} alt=""/></span></div>
        <div className="button active"><span>25.000</span></div>
        <div className="button"><span>50.000</span></div>
        <div className="button"><span>80.000</span></div>
        <div className="button"><span>120.000</span></div>
      </div>
    </div>
  );
}