import React from "react";

function ThemePicker({ theme, changeTheme }) {
  function handleThemeChange(event) {
    const newTheme = event.target.value;
    changeTheme(newTheme);
  }

  return (
    <div className="self-end lg:justify-self-start justify-self-center mb-3">
      <select onChange={handleThemeChange} name="color" id="theme-select" value={theme}>
        <option value="classic">Classic</option>
        <option value="blue">Blue</option>
        <option value="dust">Dust</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
}

export default ThemePicker;
