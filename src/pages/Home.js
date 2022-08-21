import React from "react";
import Card from "../components/Card";

function Home(props) {
  const { shoes } = props;

  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <Card shoes={shoes} />
      </div>
    </>
  );
}

export default Home;
