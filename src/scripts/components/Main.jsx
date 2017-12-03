import React from 'react';
import cx from 'classnames';
import errorIcon from '../../imgs/error.png';
import checkIcon from '../../imgs/check.png';
import ddIcon from '../../imgs/dd.png';
import ddInactiveIcon from '../../imgs/dd-inactive.png';
import bdIcon from '../../imgs/bd.png';
import bdInactiveIcon from '../../imgs/bd-inactive.png';
import d2Icon from '../../imgs/d2.png';
import d2InactiveIcon from '../../imgs/d2-inactive.png';
import Slider from "./Slider";

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
        <Slider/>
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