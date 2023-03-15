import React from "react";
import Card from "../components/Card";
import { CountContext } from "../provider/Context";

function Home(props) {
  const { shoes } = props;
  const value = React.useContext(CountContext);
  console.log("context", value);

  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <Card shoes={shoes} />
      </div>
      <button
        onClick={() =>
          value.haha === "haha" ? value.setHaha("hoho") : value.setHaha("haha")
        }
      >
        {value.haha}
      </button>
    </>
  );
}

export default Home;
