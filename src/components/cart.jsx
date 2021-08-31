import React from "react";

const Cart = (props) => {
  console.log("cart props: ", props);

  const rows = props.oList.map((item, index) => {
    return (
       <tr key={index}>
        <td>{item.Name}</td>
        <td>{item.Quantity}</td>
        <td>{item.Price}</td>
        <td hidden={true} >{item.ProductId}</td>
      </tr>
    );
  });

  return (
    <div className="col-md-4 middle-bar">
      {props.showProd ? (
        <div>
          <h5>Dessa sorter har du i din godispåse</h5>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>I påsen</th>
                <th>Antal</th>
                <th>Kostnad</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <hr />

          <div>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Totalt antal</th>
                  <th>Totalt kostnad</th>
                </tr>
              </thead>
              <tbody>
                <td> {props.tItems} </td>
                <td>{props.tCost.toFixed(2)}</td>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
