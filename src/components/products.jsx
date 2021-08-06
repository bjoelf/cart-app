import React from "react";

const ProductListing = (props) => {
  const rows = props.pList.map((product) => {
    //console.log("ProductListing props: ", props)
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>
          <button
            onClick={() => {
              //console.log("buy-button onClick", product.id, product.name); //funkar buy onClick 5
              const orderitem =  { name: product.name, quantity: 1 };
              props.updateOrder(orderitem);
            }}
            className="btn btn-success"
          >
            {" "}
            Köp
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <h4>Dessa sorter kan du köpa till godispåsen</h4>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Godis sort</th>
            <th>Beskrivning</th>
            <th>Villhöver</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductListing;
