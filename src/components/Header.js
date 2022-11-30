import React from "react";

function Header ({onDarkModeClick, buttonContent}) {
 return (<header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
    {buttonContent ? "Dark" : "Light"} Mode
    </button>
  </header>)
}

export default Header;