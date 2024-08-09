import React from "react";
import Layout from "./featured/Layout/Layout";
import Main from "./template/Main";
import { ThemeProvider } from "./context/DarkModeContext";
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Layout>
          <Main />
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export default App;
