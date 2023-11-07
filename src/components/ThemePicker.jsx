import React from "react";

function ThemePicker() {
  return (
    <div className="self-center">
      <select name="color" id="theme-select">
        <option value="classic">Classic</option>
        <option value="blue">Blue</option>
        <option value="dust">Dust</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
}

export default ThemePicker;
