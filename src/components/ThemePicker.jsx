import React from "react";

function ThemePicker(props) {
  return (
    <div className="self-center justify-self-center mb-3">
      <select
        //   onChange={}
        name="color"
        id="theme-select">
        <option value="classic">Classic</option>
        <option value="blue">Blue</option>
        <option value="dust">Dust</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
}

export default ThemePicker;
