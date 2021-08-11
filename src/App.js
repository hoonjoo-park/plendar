import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Entrance from "./routes/Entrance"
import Home from "./routes/Home"


function App() {
  return (
  <HashRouter>
    <Route path="/" exact={true} component={Entrance} />
    <Route path="/home" exact={true} component={Home} />
  </HashRouter>
  );
}

export default App;
