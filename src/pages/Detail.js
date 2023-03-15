import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      //이렇게 해도 타이머 동작
      setAlert(false);
    }, 2000);

    return () => {
      console.log("unmount or useEffect 전에 실행되는 부분");
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
