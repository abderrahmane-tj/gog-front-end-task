import React  from 'react';
import 'core-js/fn/number/is-nan';
import 'core-js/fn/array/find-index';
import Header from "./Header";
import Main from "./Main";
import Bottom from "./Bottom";

class App extends React.Component {
  state = {
    sold: 22576
  };

  render() {
    const {sold} = this.state;
    return (
      <div className="page">
        <Header/>
        <Main />
        <Bottom sold={sold} />
      </div>
    );
  }
}

export default App;
