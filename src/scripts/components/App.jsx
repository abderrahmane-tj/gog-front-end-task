import React  from 'react';
import supportIcon from '../../imgs/ico-support.png';
import mouseIcon from '../../imgs/ico-mouse.png';
import drmIcon from '../../imgs/ico-drm.png';
import timeIcon from '../../imgs/ico-time.png';
import errorIcon from '../../imgs/error.png';
import checkIcon from '../../imgs/check.png';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="header container">
          <h1 className="title">Pay what you want for <strong>Divinity Bundle</strong> ($32 value!)</h1>
          <div className="details flex">
            <div className="detail display-table">
              <div className="display-cell"><img src={supportIcon} alt="Support Larian Studios" className="icon" /><span className="text">Support Larian Studios</span></div>
            </div>
            <div className="detail display-table">
              <div className="display-cell"><img src={mouseIcon} alt="Play Divinity 2: DC before release" className="icon" /><span className="text">PLay Divinity 2: DC before release</span></div>
            </div>
            <div className="detail display-table">
              <div className="display-cell"><img src={drmIcon} alt="Get DRM-free games with goodies" className="icon" /><span className="text">Get DRM-free games with goodies</span></div>
            </div>
            <div className="detail highlight display-table">
              <div className="display-cell"><img src={timeIcon} alt="Only 23:54:55 left" className="icon" /><span className="text">Only <strong className="regular">23:54:55</strong> left</span></div>
            </div>
          </div>
        </header>
        <main className="main container no-padding">
          <div className="games padding30">
            <div className="flex">
              <div className="game dd item active">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Divine Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
                </div>
                <div className="indication active display-table">
                  <div className="display-cell"><img className="icon" src={checkIcon} alt="Active"/><span className="text">Below average</span></div>
                </div>
              </div>
              <div className="game bd item active">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
                </div>
                <div className="indication active display-table">
                  <div className="display-cell"><img className="icon" src={checkIcon} alt="Active"/><span className="text">Above average <strong>(from $7.67)</strong></span></div>
                </div>
              </div>
              <div className="game d2 item">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
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
      </div>
    );
  }
}

export default App;
