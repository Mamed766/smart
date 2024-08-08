import React from "react";
import Header from "./featured/Header/Header";
import Sidebar from "./featured/Sidebar/Sidebar";
import Layout from "./featured/Layout/Layout";
import Editors from "./organic/Editors";

const App = () => {
  return (
    <div>
      <Layout>
        <Editors />
      </Layout>
    </div>
  );
};

export default App;
