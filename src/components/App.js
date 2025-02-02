import React, { useState } from "react";
import Header from "./Header";
import Item from "./Item";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ul className="items">
        <Item name="Milk" category="Dairy" />
        <Item name="Carrots" category="Vegetables" />
        <Item name="Bread" category="Bakery" />
      </ul>
    </div>
  );
}

export default App;
