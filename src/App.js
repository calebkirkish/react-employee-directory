import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Wrapper from "./components/Wrapper.js";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
