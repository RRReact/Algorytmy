import React, { useState } from "react";

import Menu from "./components/Menu/Menu";
import Grid from "./components/Grid/Grid";

import "./App.css";

function App() {
  const [buttonTypeActive, setButtonTypeActive] = useState(null);
  return (
    <div className="App">
      <Menu setButtonTypeActive={setButtonTypeActive} />
      <Grid buttonTypeActive={buttonTypeActive} />
    </div>
  );
}

export default App;
