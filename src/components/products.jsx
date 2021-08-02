import React from "react";

const ProductListing = (props) => {
  const rows = props.productlist.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    );
  });

  return (

    <div className="col-md-6 middle-bar" >
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  </div>

  );
};

export default ProductListing;