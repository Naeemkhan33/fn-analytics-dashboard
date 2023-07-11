import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import DashboardOne from "./pages/DashboardOne";
import DashboardTwo from "./pages/DashboardTwo";
import DashboardThree from "./pages/DashboardThree";
import DashboardFour from "./pages/DashboardFour";

const routes = [
  {
    path: "/",
    element: <DashboardOne />,
  },
  {
    path: "/dashboard-2",
    element: <DashboardTwo />,
  },
  {
    path: "/dashboard-3",
    element: <DashboardThree />,
  },
  {
    path: "/dashboard-4",
    element: <DashboardFour />,
  },
];

const Pages = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default Pages;
