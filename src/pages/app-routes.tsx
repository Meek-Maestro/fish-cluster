import React from "react";
import { lazy } from "react";
import { Route } from "react-router-dom";

const LazyDashboard = lazy(() => import("./dashboard/dashboard"));
const LazyPonds = lazy(() => import("./ponds/ponds"));
const LazyAlerts = lazy(()=> import("./alert/alert"))

export default (
  <React.Fragment>
    <Route path="/" element={<LazyDashboard />} />
    <Route path="/ponds" element={<LazyPonds />} />
    <Route path="/alerts" element={<LazyAlerts />} />
  </React.Fragment>
);
