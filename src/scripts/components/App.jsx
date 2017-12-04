import React from 'react';
import cx from 'classnames';
import 'core-js/fn/number/is-nan';
import 'core-js/fn/array/find-index';
import Header from "./Header";
import Main from "./Main";
import Bottom from "./Bottom";
import {clamp} from "../helpers/functions";

class App extends React.Component {
  state = {
    sold: 22576,
    debug: false
  };

  handleClick = () => {
    this.setState({
      debug: !this.state.debug
    });
  };

  handleChange = (e) => {
    let value = parseInt(e.target.value);
    if(isNaN(value)) {
      return;
    }
    value = clamp(value, 0, 999999);
    if(this.state.sold !== value) {
      this.setState({
        sold: value
      });
    }
  };

  render() {
    const {sold, debug} = this.state;
    return (
      <div className="page">
        <Header/>
        <Main />
        <Bottom sold={sold} />
        <div className="debug">
          <div onClick={this.handleClick} className="title">Debug</div>
          <div className={cx("content", {closed: !debug})}>
            <label htmlFor="sold">Sold</label>
            <input
              ref={e => this.input = e}
              onChange={this.handleChange}
              type="text" id="sold" defaultValue={sold}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
