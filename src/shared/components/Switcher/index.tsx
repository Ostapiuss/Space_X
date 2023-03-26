import React from "react";

import './style.scss';

interface SwitcherInterface {
  name: string,
  type: string,
  onChange: (changeEvent) => void
}

const Switcher: React.FC<SwitcherInterface> = ({ name, value, onChange }) => {

  return (
    <label className="switcher">
      <input
        name={name}
        checked={value}
        value={value}
        type="checkbox"
        onChange={onChange}
        className="switcher-input"
      />
      <span className="switcher-slider" />
    </label>
  )
}

export default Switcher;
