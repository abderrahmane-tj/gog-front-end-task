import React from 'react';
import supportIcon from '../../imgs/ico-support.png';
import mouseIcon from '../../imgs/ico-mouse.png';
import drmIcon from '../../imgs/ico-drm.png';
import timeIcon from '../../imgs/ico-time.png';

export default function Header() {
  return (
    <header className="header container">
      <h1 className="title">Pay what you want for <strong>Divinity Bundle</strong> ($32 value!)</h1>
      <div className="details flex">
        <div className="detail display-table">
          <div className="display-cell">
            <img src={supportIcon} alt="Support Larian Studios" className="icon" />
            <span className="text">Support Larian Studios</span>
          </div>
        </div>
        <div className="detail display-table">
          <div className="display-cell">
            <img src={mouseIcon} alt="Play Divinity 2: DC before release" className="icon" />
            <span className="text">PLay Divinity 2: DC before release</span>
          </div>
        </div>
        <div className="detail display-table">
          <div className="display-cell">
            <img src={drmIcon} alt="Get DRM-free games with goodies" className="icon" />
            <span className="text">Get DRM-free games with goodies</span>
          </div>
        </div>
        <div className="detail highlight display-table">
          <div className="display-cell">
            <img src={timeIcon} alt="Only 23:54:55 left" className="icon" />
            <span className="text">Only <strong className="regular">23:54:55</strong> left</span>
          </div>
        </div>
      </div>
    </header>
  );
}