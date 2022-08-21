import React from "react";
import { Outlet } from "react-router";

function About() {
  return (
    <>
      <div>About</div>
      <Outlet></Outlet>
    </>
  );
}

export default About;
