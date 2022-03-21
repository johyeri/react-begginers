import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />}  />
      </Switch>
    </Router>
  );
}

export default App;
