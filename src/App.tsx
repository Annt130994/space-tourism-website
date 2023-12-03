import React, { useState } from "react";
import "./styles/App.scss";
import HeaderPage from "./components/HeaderPage";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const [itemId, setItemId] = useState<string>("00");

  return (
    <section className="homePage">
      
      <HeaderPage itemId={itemId} onClick={setItemId} />

      {itemId === "00" && (
        <div className="home">
          <Home onClick={setItemId} />
        </div>
      )}

      {itemId === "01" && (
        <div className="destination">
          <Destination itemId={itemId} />
        </div>
      )}

      {itemId === "02" && (
        <div className="crew">
          <Crew itemId={itemId} />
        </div>
      )}

      {itemId === "03" && (
        <div className="technology">
          <Technology itemId={itemId} />
        </div>
      )}
    </section>
  );
}

export default App;
