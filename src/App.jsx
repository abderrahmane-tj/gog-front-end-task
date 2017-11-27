import React  from 'react';

class App extends React.Component {
  render() {
    return (
      <header>
        <h1>Pay what you want for Divinity Bundle ($32 value!)</h1>
        <ul>
          <li>Support Larian Studios</li>
          <li>PLay Divinity 2: DC before release</li>
          <li>Get DRM-free games with goodies</li>
          <li>Only 23:54:55 left</li>
        </ul>
        <main>
          <div className="games">
            <div className="game dd">
              <div className="logo">
                <img src="" alt=""/>
              </div>
              <div className="description">
                <p><em>Divine Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
              </div>
              <div className="indication active">Below average</div>
            </div>
            <div className="game bd">
              <div className="logo">
                <img src="" alt=""/>
              </div>
              <div className="description">
                <p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
              </div>
              <div className="indication active">Above average (from $7.67)</div>
            </div>
            <div className="game d2">
              <div className="logo">
                <img src="" alt=""/>
              </div>
              <div className="description">
                <p><em>Divinity 2</em> (preorder, normal price $19.99)<br /><strong>with 9 goodies and 7 language versions</strong></p>
              </div>
              <div className="indication">Top supporter (from $18.31)</div>
            </div>
          </div>
          <div className="choose-your-price">
            <div className="slider">
              <div className="minumum">$0.99</div>
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
              <div className="maximum">$49.99</div>
            </div>
          </div>
        </main>
      </header>
    );
  }
}

export default App;
