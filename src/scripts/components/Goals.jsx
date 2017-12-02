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
        <div className="progress-text">90%</div>
        <Progress progress={90} />
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

function Progress(props) {
  const {progress} = props;
  let strokeTotalLength = 228.9658;
  let ratio = strokeTotalLength / 100;
  let offset = strokeTotalLength - (progress * ratio);

  return (
    <svg version="1.1" id="disc" className="progress"
         x="0px" y="0px" width="80px" height="80px"
         viewBox="0 0 80 80">
      <circle
        cx="40" cy="40" r="36.5" fill="none" stroke="#FFFFFF"
        strokeWidth="7" strokeMiterlimit="10"
        strokeDasharray={strokeTotalLength}
        strokeDashoffset={offset}
        transform='rotate(-90 40 40)'
      />
    </svg>
  );
}