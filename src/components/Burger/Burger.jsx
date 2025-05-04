import React from 'react';
import './burger.css';

const Burger = (props) => {
  return (
    <div onClick={(e) => props.handleNavToggle(e)} className="burger-container">
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span />
        <span />
        <span />
      </label>
    </div>
  );
}

export default Burger;