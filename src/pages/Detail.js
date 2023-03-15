<<<<<<< HEAD
import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let { shoes } = props;
  console.log("id type", typeof id);
  console.log("shoes type", typeof shoes[0].id);

  // let selectShoes = shoes.find((item) => {
  //   return item.id === id;
  // });

  // let selectShoes = shoes.find(function (x) {
  //   return x.id == id;
  // });

  let selectShoes = shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={selectShoes.src} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectShoes.title}</h4>
          <p>{selectShoes.content}</p>
          <p>{selectShoes.price}원</p>
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      //이렇게 해도 타이머 동작
      setAlert(false);
    }, 2000);

    return () => {
      console.log('unmount or useEffect 전에 실행되는 부분');
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {alert ? (
        <div className="alert alert-warning">2초이내 구매 시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={shoes[id].src} width="100%" alt="ex" />
        </div>
        <div className="col-md-6 detail-txt">
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}</p>
>>>>>>> abe702724a4d9c107505e1bc41317b6581d7cd81
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
