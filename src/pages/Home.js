import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Home(props) {
  const { shoes } = props;

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
    </>
  );
}

export default Home;
