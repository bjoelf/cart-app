import React from "react";

const Cart = (props) => {
  //console.log("cart props: ", props);
  const rows = props.oList.map((item, index) => {
    //console.log("cart-item: ", item);
    //console.log("cart-item_quantity: ", item.quantity);
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  });

  return (
    <div className="col-md-4 middle-bar">
      <h4>Det här har du i din godispåse</h4>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>I påsen</th>
            <th>Antal</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Cart;
