import React from "react";

const ProductListing = (props) => {
  const rows = props.productlist.map((item) => {
    //console.log("ProductListing props: ", props)
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button 
            onClick={() => {
              console.log("buy-button onClick", item.id) //funkar buy onClick 5
              props.updateOrder(item.id);
            }}
            className="btn btn-info"
            > Köp
          </button>
        </td>
      </tr>
    );
  });

  return (

    <div className="col-md-6 middle-bar" >
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