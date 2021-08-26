import React from "react";

//Stateless Functional Component
const ProductListing = (props) => {
  const rows = props.pList.map((product) => {
    //console.log("ProductListing props: ", props);
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>

        <td>
          <button
            onClick={() => {
              //console.log("buy-button onClick", product.id, product.name); //funkar buy onClick 5
              const orderitem = {
                Id: product.id,
                Name: product.name,
                Quantity: 1,
                Price: product.price,
              };
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
      {props.showProd ? (
        <div >
          <h4>Dessa sorter kan du köpa till godispåsen</h4>

          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Godis sort</th>
                <th>Beskrivning</th>
                <th>Pris</th>
                <th>Villhöver</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductListing;
