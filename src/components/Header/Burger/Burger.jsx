import React from 'react';
import './burger.css';

const Burger = () => {
  return (
    <div>
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