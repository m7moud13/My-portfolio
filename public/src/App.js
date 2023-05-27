import React from "react";
import { About } from "./Components/About";
import Contact from "./Components/Contact";
import { Landing } from "./Components/Landing";
import Navbar from "./Components/Navbar";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";

function App() {
  return (
    <div className="App bg-[#0a192f]">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
