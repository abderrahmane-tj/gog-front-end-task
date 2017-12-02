import React  from 'react';
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
    </div>
  );
}