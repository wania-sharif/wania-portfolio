import React from 'react';
import './burger.css';

const Burger = (props) => {
  return (
    <div className="burger-container">
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onChange={(e) => props.handleNavToggle(e)}/>
        <span />
        <span />
        <span />
      </label>
    </div>
  );
}

export default Burger;