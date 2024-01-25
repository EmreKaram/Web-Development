import React from "react";

function Detail(props) {
  return (
    <detail>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </detail>
  );
}

export default Detail;
