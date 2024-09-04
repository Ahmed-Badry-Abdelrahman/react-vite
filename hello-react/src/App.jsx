import React from "react";

import "./App.css";
import GetUsers from "./components/GetUsers";
import GetUsersEmail from "./components/GetUsersEmail";

function App() {
  return (
    <React.Fragment>
      <GetUsers />
      <GetUsersEmail />
    </React.Fragment>
  );
}

export default App;
