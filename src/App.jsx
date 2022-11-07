import { useState } from "react";
import "./App.css";
import Section from "./components/Section/section";
import Container from "./components/Container/container";
import Container2 from "./components/Container/container2";
import Container3 from "./components/Container/container3";
import Container4 from "./components/Container/container4";
import Menu from "./components/desplegable/menu";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Section />
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

export default App;
