import React from 'react';
import cx from 'classnames';
import thumbnail from '../../imgs/thumbnail.jpg';
import left from '../../imgs/left.png';
import right from '../../imgs/right.png';
import play from '../../imgs/play.png';
import switcherCheck from '../../imgs/switcher-check.png';
import {addDot, clamp} from "../helpers/functions";

export default class Goals extends React.Component {
  steps = [
    {
      value: 10000,
      text: 'to unlock exclusive, [10000 step description].',
      thumbnail: thumbnail
    },
    {
      value: 25000,
      text: 'to unlock exclusive, [25000 step description].',
      thumbnail: thumbnail
    },
    {
      value: 50000,
      text: 'to unlock exclusive, [50000 step description].',
      thumbnail: thumbnail
    },
    {
      value: 80000,
      text: 'to unlock exclusive, [80000 step description].',
      thumbnail: thumbnail
    },
    {
      value: 120000,
      text: 'to unlock exclusive, [120000 step description].',
      thumbnail: thumbnail
    }
  ];

  constructor(props) {
    super(props);
    const {sold} = props;
    let min = -1;
    for(let i = 0; i < this.steps.length; i++) {
      if(this.steps[i].value > sold) {
        min = this.steps[i].value;
        break;
      }
    }

    if(min === -1) {
      min = this.steps[this.steps.length - 1].value;
    }

    this.state = {
      active: min
    };
  }

  handleClick(value) {
    if(this.state.value !== value) {
      this.setState({active: value});
    }
  }

  handleArrowClick(direction) {
    let index = this.steps.findIndex(step => step.value === this.state.active);
    if(index === 0 && direction < 0){
      return;
    }

    if(index === this.steps.length -1 && direction > 0){
      return;
    }

    this.setState({
      active: this.steps[index + direction].value
    })
  }

  render() {
    const {sold} = this.props;
    const {active} = this.state;
    let progress = clamp(100 * sold / active, 0, 100) | 0;
    let currentIndex = this.steps.findIndex(step => step.value === active);
    let current = this.steps[currentIndex];
    let first = currentIndex === 0;
    let last = currentIndex === this.steps.length - 1;
    return (
      <div className="goals">
        <div className="section-title">
          <span>Games sold so far</span>
        </div>
        <Sold sold={sold} />
        <div className="in-progress">
          <div className="short">Reach {addDot(active)}...</div>
          <div className="description">...{current.text}</div>
        </div>
        <div className="switcher">
          <div className="step"><img src={current.thumbnail} alt={current.text}/></div>
          {!first &&
          <div
            onClick={() => this.handleArrowClick(-1)}
            className="control left"
          ><img src={left} alt=""/></div>}
          {!last &&
          <div
            className="control right"
            onClick={() => this.handleArrowClick(+1)}
          ><img src={right} alt=""/></div>}
          <div
            className="progress-text"
          >{sold >= active
            ? <img src={play} alt=""/>
            : `${progress} %`}</div>
          <Progress progress={progress} />
        </div>
        <div className="buttons-switcher flex">
          {this.steps.map(step => {
            let content = sold >= step.value
              ? <span><img src={switcherCheck} alt=""/></span>
              : <span>{addDot(step.value)}</span>;
            return (
              <div
                key={step.value}
                onClick={() => {
                  this.handleClick(step.value);
                }}
                className={cx("button", {
                  active: step.value === active
                })}
              >{content}</div>
            );
          })}
        </div>
      </div>
    );
  }
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

function Sold(props) {
  let sold = addDot(props.sold);
  return (
    <div className="games-sold">
      <div className="number">
        {sold.map((c, i) => {
          if(c === '.') {
            return <div
              key={i} className="dot-wrapper"
            ><div className="dot" /></div>;
          } else {
            return <div key={i} className="digit">{c}</div>
          }
        })}
      </div>
    </div>
  );
}