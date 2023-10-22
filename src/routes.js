import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Registration from "./views/Registration";
import Game from "./views/Game";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/registration" />
  },
  {
    path: "/registration",
    layout: DefaultLayout,
    component: Registration
  },
    {
    path: "/game",
    layout: DefaultLayout,
    component: Game
  }
];
