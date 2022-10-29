import React from "react";
import NavBar from "./Components/NavBar";
import Highlighter from "./Components/Highlighter";
import Main from "./Components/Main";
function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <Highlighter/>
      <Main/>
    </div>
  );
}

export default App;
