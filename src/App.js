import React from "react";
import Layout from "./featured/Layout/Layout";
import Main from "./template/Main";
import { ThemeProvider } from "./context/DarkModeContext";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
};

export default App;
