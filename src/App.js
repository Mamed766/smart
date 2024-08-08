import React from "react";
import Header from "./featured/Header/Header";
import Sidebar from "./featured/Sidebar/Sidebar";
import Layout from "./featured/Layout/Layout";
import Editors from "./organic/Editors";
import ExampleComponent from "./services/api";
import Main from "./template/Main";
const App = () => {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default App;
