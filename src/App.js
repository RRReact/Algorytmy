import React, { useState } from "react";
import { useWindowSize } from "./Hooks/useWindowSize";

import Grid from "./components/Grid/Grid";
import Tutorial from "./components/Tutorial/Tutorial";
import MobileLock from "./components/MobileLock/MobileLock";

import "./App.css";

function App() {
  const [toggleTutorial, setToggleTutorial] = useState(true);
  const size = useWindowSize();
  const { width } = size;

  const renderApp = () => {
    if (width <= 768) {
      return <MobileLock />;
    } else if (toggleTutorial) {
      return (
        <>
          <Grid />
          <Tutorial setToggleTutorial={setToggleTutorial} />
        </>
      );
    } else {
      return <Grid />;
    }
  };

  return <div className="App">{renderApp()}</div>;
}

export default App;
