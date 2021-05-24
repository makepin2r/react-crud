import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Create from "./routes/Create";
import Read from "./routes/Read";
import Update from "./routes/Update";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/create" exact={true} component={Create} />
      <Route path="/read" exact={true} component={Read} />
      <Route path="/update" exact={true} component={Update} />
    </HashRouter>
  );
}

export default App;
