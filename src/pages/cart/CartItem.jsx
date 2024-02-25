import React from "react";

export const CartItem = (props) => {
//   console.log(props);
  //   console.log(qty);
  const { id, productName, productImage, price } = props.data;
  const qty = props.qty;

  //   const qty = data.qty;
  //   console.log(qty);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={productImage}
            className="img-fluid rounded-start"
            alt={productName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">${price}</p>
            <p className="card-text">{qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
