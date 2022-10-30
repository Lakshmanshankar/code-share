import React from "react";
import NavBar from "./Components/NavBar";
import Highlighter from "./Components/Highlighter";
import Main from "./Components/Main";
import { ContactUs } from "./Components/ContactUs";
function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <Highlighter/>
      <ContactUs/>
    </div>
  );
}

export default App;
