import React, { useState } from "react";

import Grid from "./components/Grid/Grid";

import "./App.css";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  const [toggleTutorial, setToggleTutorial] = useState(true);
  return (
    <div className="App">
      <Grid />
      {toggleTutorial ? (
        <Tutorial setToggleTutorial={setToggleTutorial} />
      ) : null}
    </div>
  );
}

export default App;
