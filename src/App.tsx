import React, { useState } from "react";
import "./styles/App.scss";
import HeaderPage from "./components/HeaderPage";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

function App() {
  const [itemId, setItemId] = useState<string>("00");
  const handleItemClick = (newItemId: string) => {
    setItemId(newItemId);
  };
  return (
    <section className="homePage" id="#">
      <HeaderPage onItemClick={handleItemClick} />
      <div className={itemId === "00" ? "home" : "hide"}>
        <Home itemId={itemId} onItemClick={handleItemClick} />
      </div>
      <div className={itemId === "01" ? "destination" : "hide"}>
        <Destination itemId={itemId} />
      </div>
      <div className={itemId === "02" ? "crew" : "hide"}>
        <Crew itemId={itemId} />
      </div>
      <div className={itemId === "03" ? "technology" : "hide"}>
        {/* <Destination /> */}
      </div>
    </section>
  );
}

export default App;
