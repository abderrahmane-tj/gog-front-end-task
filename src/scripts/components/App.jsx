import React  from 'react';
import Header from "./Header";
import Main from "./Main";
import Bottom from "./Bottom";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header/>
        <Main />
        <Bottom />
      </div>
    );
  }
}

export default App;
