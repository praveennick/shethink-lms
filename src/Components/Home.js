import React from "react";
import Login from "./Login";
import "../assets/css/Home.css";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className="container_wrap">
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default Home;
