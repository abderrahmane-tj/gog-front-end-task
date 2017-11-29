import React  from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="header container">
          <h1 className="title">Pay what you want for <strong>Divinity Bundle</strong> ($32 value!)</h1>
          <ul className="details flex justify-evenly padding30">
            <li>Support Larian Studios</li>
            <li>PLay Divinity 2: DC before release</li>
            <li>Get DRM-free games with goodies</li>
            <li className="highlight">Only <strong className="regular">23:54:55</strong> left</li>
          </ul>
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
                <div className="indication active">Below average</div>
              </div>
              <div className="game bd item active">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Beyond Divinity</em> (normal price $5.99)<br /><strong>with 6 goodies and 4 language versions</strong></p>
                </div>
                <div className="indication active">Above average <strong>(from $7.67)</strong></div>
              </div>
              <div className="game d2 item">
                <div className="logo">
                  <img src="" alt=""/>
                </div>
                <div className="description">
                  <p><em>Divinity 2</em> (preorder, normal price $19.99)<br /><strong>with 9 goodies and 7 language versions</strong></p>
                </div>
                <div className="indication">Top supporter <strong>(from $18.31)</strong></div>
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
