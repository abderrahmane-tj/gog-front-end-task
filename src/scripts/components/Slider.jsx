import React from 'react';
import infoIcon from '../../imgs/ico-info.png';
import {clamp, twoDecimals} from "../helpers/functions";

export default class Slider extends React.Component {
  dragStart = null;
  position = 10;
  min = 0.99;
  max = 49.99;

  handleMouseDown = (e) => {
    this.dragStart = e.clientX;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.body.classList.add('dragging');
  };

  handleMouseMove = (e) => {
    this.updateUIPosition(this.position + this.distance(e.clientX));
  };

  updateUIPosition(position) {
    let clampedPosition = clamp(position, 0, 100);
    this.handle.style.left = clampedPosition + '%';
    this.frontRails.style.width = clampedPosition + '%';
    let price = (this.max - this.min) * clampedPosition / 100 + this.min;
    this.input.innerText = twoDecimals(price);

    let minIwidth = this.minIndicator.offsetWidth;
    let maxIwidth = this.maxIndicator.offsetWidth;
    let railsWidth = this.rails.offsetWidth;
    let frontWidth = railsWidth * clampedPosition / 100;
    let tooltipWidth = this.tooltip.offsetWidth;

    let tooltipOffset;
    let halfTooltip = tooltipWidth / 2;
    let minDistance = frontWidth + minIwidth + 10 - halfTooltip;
    let maxDistance = frontWidth + halfTooltip - (railsWidth + 10 + maxIwidth);
    if(minDistance < 0) {
      tooltipOffset = -minDistance;
      this.bubble.style.left = tooltipOffset + 'px';
      this.info.style.left = tooltipOffset + 'px';
    } else if(maxDistance > 0) {
      tooltipOffset = maxDistance;
      this.bubble.style.right = tooltipOffset + 'px';
      this.info.style.right = tooltipOffset + 'px';
    } else {
      this.bubble.style.left = 'auto';
      this.info.style.left = 'auto';
      this.bubble.style.right = 'auto';
      this.info.style.right = 'auto';
    }

  }

  handleMouseUp = (e) => {
    this.position = clamp(
      this.position + this.distance(e.clientX)
      , 0, 100);

    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.body.classList.remove('dragging');
  };

  distance(mouseX) {
    let railsWidth = this.rails.offsetWidth;
    let movementX = mouseX - this.dragStart;
    let ratio = movementX / railsWidth;
    return ratio * 100;
  }

  componentDidMount(){
    this.updateUIPosition(this.position);
  }

  render() {
    return (
      <div className="slider">
        <div
          className="minumum indicator"
          ref={e => this.minIndicator = e}
        >${this.min}</div>
        <div className="rails">
          <div className="back-rails" ref={e => this.rails = e} />
          <div className="front-rails" ref={e => this.frontRails = e} />
          <div
            className="handle-wrapper"
            ref={e => this.handle = e}
          >
            <div
              className="handle"
              onMouseDown={this.handleMouseDown}
            >
              <HandleShape />
              <div className="tooltip-wrapper">
                <div
                  className="tooltip"
                  ref={e => this.tooltip = e}
                >
                  <div className="arrow-up" />
                  <div className="bubble flex" ref={e => this.bubble = e}>
                    <div className="price">$<span ref={e => this.input = e} className="input">14.99</span></div>
                    <div className="checkout">Checkout now</div>
                  </div>
                  <div
                    className="info display-table"
                    ref={e => this.info = e}
                  >
                    <div className="display-cell">
                      <img src={infoIcon} alt=""/>
                      <span className="info-icon">Click the price to type it in manually</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={e => this.maxIndicator = e}
          className="maximum indicator"
        >${this.max}</div>
      </div>
    );
  }
}

function HandleShape() {
  return (
    <svg version="1.1" id="handle" className="handle-shape"
         width="15px" height="30px" viewBox="0 0 15 30" enableBackground="new 0 0 15 30">
      <polygon fill="#E1E1E1" stroke="#9C9C9C" strokeMiterlimit="10" points="14.5,22 7.5,29.25 0.5,22 0.5,0.5 14.5,0.5 "/>
      <path fill="#E1E1E1" stroke="#9C9C9C" strokeMiterlimit="10" d="M14.5,22"/>
      <path fill="#E1E1E1" stroke="#9C9C9C" strokeMiterlimit="10" d="M0.5,22"/>
    </svg>
  );
}