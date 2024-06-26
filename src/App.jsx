import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import routers from "../routes";
import { useRoutes } from "react-router-dom";

function App() {
  let allRoutes = useRoutes(routers);
  return (
    <>
      <Navbar />
      {allRoutes}
    </>
  );
}

export default App;
