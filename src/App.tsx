import React from "react";
import "./styles/App.scss";
import HeaderPage from "./components/HeaderPage";
import ButtonLarge from "./features/ButtonLarge";
import Content from "./features/Content";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      {/* <ButtonLarge /> */}
      <Content />
    </div>
  );
}

export default App;
