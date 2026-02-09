import { Box } from "@mantine/core";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppMainRoutes from "../pages/app-routes";
import MainAppShell from "../components/layout/main";

const AppRootRoute = () => {
  return (
    <>
      <Box>
        <BrowserRouter basename="/">
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <Route element={<MainAppShell />}>{AppMainRoutes}</Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default AppRootRoute;
