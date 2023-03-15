<<<<<<< HEAD
import React from "react";
import Card from "../components/Card";
import { CountContext } from "../provider/Context";
=======
import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
>>>>>>> abe702724a4d9c107505e1bc41317b6581d7cd81

function Home(props) {
  const { shoes } = props;
  const value = React.useContext(CountContext);
  console.log("context", value);

  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <Card shoes={shoes} />
        <button
          onClick={() => {
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                console.log(result.data);
              })
              .catch((err) => console.log('error - ', err));
          }}
        >
          버튼
        </button>
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
