import React, {ChangeEvent} from "react";

import './style.scss';

interface SwitcherInterface {
  name: string,
  value: boolean,
  onChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void
}

const Switcher: React.FC<SwitcherInterface> = ({ name, value, onChange }) => {
  return (
    <label className="switcher">
      <input
        name={name}
        checked={value}
        type="checkbox"
        onChange={onChange}
        className="switcher-input"
      />
      <span className="switcher-slider" />
    </label>
  )
}

export default Switcher;
