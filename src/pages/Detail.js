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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
