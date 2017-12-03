import React from 'react';
import cx from 'classnames';
import errorIcon from '../../imgs/error.png';
import checkIcon from '../../imgs/check.png';
import infoIcon from '../../imgs/ico-info.png';
import ddIcon from '../../imgs/dd.png';
import ddInactiveIcon from '../../imgs/dd-inactive.png';
import bdIcon from '../../imgs/bd.png';
import bdInactiveIcon from '../../imgs/bd-inactive.png';
import d2Icon from '../../imgs/d2.png';
import d2InactiveIcon from '../../imgs/d2-inactive.png';

export default function Main() {
  return (
    <main className="main container no-padding">
      <div className="games padding30">
        <div className="flex">
          <Game
            className="dd"
            active={true}
            primary={ddIcon}
            secondary={ddInactiveIcon}
            description={<p><em>Divine Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>}
            indication={<span className="text">Below average</span>}
          />
          <Game
            className="bd"
            active={true}
            primary={bdIcon}
            secondary={bdInactiveIcon}
            description={<p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>}
            indication={<span className="text">Above average <strong>(from $7.67)</strong></span>}
          />
          <Game
            className="d2"
            active={false}
            primary={d2Icon}
            secondary={d2InactiveIcon}
            description={<p><em>Divinity 2</em> (preorder, normal price $19.99)<br /><strong>with 9 goodies and 7 language versions</strong></p>}
            indication={<span className="text">Top supporter <strong>(from $18.31)</strong></span>}
          />
        </div>
      </div>
      <div className="choose-your-price padding30">
        <div className="slider">
          <div className="minumum indicator">$0.99</div>
          <div className="rails">
            <div className="back-rails" />
            <div className="front-rails" />
            <div className="handle-wrapper">
              <div className="handle">
                <HandleShape />
                <div className="tooltip-wrapper">
                  <div className="tooltip">
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
      </div>
    </main>
  );
}

function Game(props) {
  const {
    className, active, primary, secondary, description, indication
  } = props;
  return (
    <div className={cx("game item", className, { active })}>
      <div className="logo display-table">
        <div className="display-cell">
          <img className="primary" src={primary} alt="" />
          <img className="secondary" src={secondary} alt=""/>
        </div>
      </div>
      <div className="description">{description}</div>
      <div className="indication display-table">
        <div className="display-cell">
          <img className="icon" alt=""
            src={active ? checkIcon : errorIcon}
          />{indication}</div>
      </div>
    </div>
  );
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