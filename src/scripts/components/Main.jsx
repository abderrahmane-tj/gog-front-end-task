import React from 'react';
import errorIcon from '../../imgs/error.png';
import checkIcon from '../../imgs/check.png';
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
          <div className="game dd item active">
            <div className="logo display-table">
              <div className="display-cell">
                <img className="primary" src={ddIcon} alt="" />
                <img className="secondary" src={ddInactiveIcon} alt=""/>
              </div>
            </div>
            <div className="description">
              <p><em>Divine Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
            </div>
            <div className="indication active display-table"><div className="display-cell"><img className="icon" src={checkIcon} alt="Active"/><span className="text">Below average</span></div></div>
          </div>
          <div className="game bd item active">
            <div className="logo display-table"><div className="display-cell"><img className="primary" src={bdIcon} alt=""/><img className="secondary" src={bdInactiveIcon} alt=""/></div></div>
            <div className="description">
              <p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
            </div>
            <div className="indication active display-table">
              <div className="display-cell"><img className="icon" src={checkIcon} alt="Active"/><span className="text">Above average <strong>(from $7.67)</strong></span></div>
            </div>
          </div>
          <div className="game d2 item">
            <div className="logo display-table"><div className="display-cell"><img className="primary" src={d2Icon} alt=""/><img className="secondary" src={d2InactiveIcon} alt=""/></div></div>
            <div className="description">
              <p><em>Divinity 2</em> (preorder, normal price $19.99)<br /><strong>with 9 goodies and 7 language versions</strong></p>
            </div>
            <div className="indication display-table">
              <div className="display-cell"><img className="icon" src={errorIcon} alt="Active"/><span className="text">Top supporter <strong>(from $18.31)</strong></span></div></div>
          </div>
        </div>
      </div>
      <div className="choose-your-price padding30">
        <div className="slider">
          <div className="minumum indicator">$0.99</div>
          <div className="rails">
            <div className="handle">
              <div className="tooltip">
                <div className="bubble">
                  <div className="input">$14.99</div>
                  <div className="checkout">Checkout now</div>
                </div>
                <div className="info"><span className="info-icon"
                >Click the price to type it in manually</span></div>
              </div>
            </div>
          </div>
          <div className="maximum indicator">$49.99</div>
        </div>
      </div>
    </main>
  );
}