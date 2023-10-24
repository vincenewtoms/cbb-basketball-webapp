import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import { DefaultLayout } from "./layouts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// Route Views
import Registration from "./views/Registration";
import Game from "./views/Game";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Navigate replace to="/registration" />} />
      <Route path="/registration/" exact element={<Navigate replace to="/registration" />} />
      <Route path="/registration" element={<DefaultLayout><Registration /></DefaultLayout>} />
      <Route path="/game" element={<DefaultLayout><Game /></DefaultLayout>} />
      <Route path="/game/" exact element={<Navigate replace to="/game" />} />
      </Routes>
    </Router>

  );
};

export default App;
