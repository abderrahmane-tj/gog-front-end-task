import React from 'react';
import infoIcon from '../../imgs/ico-info.png';

export default class Slider extends React.Component {
  dragStart = null;
  position = 10;

  handleMouseDown = (e) => {
    this.dragStart = e.clientX;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.body.classList.add('dragging');
  };

  handleMouseMove = (e) => {
    this.handle.style.left =
      this.position + this.distance(e.clientX) + '%';
  };

  handleMouseUp = (e) => {
    let distance = this.distance(e.clientX);
    this.position += distance;

    console.log(distance, this.position);

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
    // this.handle.
  }

  render() {
    return (
      <div className="slider">
        <div className="minumum indicator">$0.99</div>
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
                  <div className="bubble flex">
                    <div className="price">$<span className="input">14.99</span></div>
                    <div className="checkout">Checkout now</div>
                  </div>
                  <div className="info display-table">
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
        <div className="maximum indicator">$49.99</div>
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