import React, { Component } from "react";
import getProducts from "../api/prodApi";
import ProductListing from "./products";

class App extends Component {
  state = {
    prodList: [],
  };

  //Load data on startup.
  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
    console.log("cdm getProducts: ", this.state.prodList);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Product list</h3>
        <hr />
        <div className="row">
          <ProductListing productlist={this.state.prodList} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
