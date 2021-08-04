import React, { Component } from "react";
import getProducts from "../api/prodApi";
import ProductListing from "./products";
//import Footer from "./Footer";

class App extends Component {
  state = {
    prodList: [],
    orderList: [],
    cartEmthy: false,
  };

  //Load data on startup.
  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
    console.log("cdm getProducts: ", this.state.prodList);
  }

  //add orderItem to Order here!
  updateOrder = (id) => {
    console.log("Update order: ", id); //den här funkar när item är en int..
    const _orderList = this.state.orderList;

    //Skapa orderitem som object
    const item = { Id: id, Quantity: 1 };
    console.log("Order item: ", item);

    //TODO: gör om till att addera quantity
    //till befintlig orderitem av samma ID.
    if (item !== undefined) {
      _orderList.push(item);
    }

    this.setState({
      orderList: _orderList,
    });

    //ok,, funkar men otroligt fult...
    console.log("updateD_Order: ", this.state.orderList);
  };

  render() {
    const cart =
      this.state.orderList.length > 0 ? (
        <div margin="true" className="col-md-6">
          <span>Godispåsen innehåller något</span>
        </div>
      ) : (
        <span>Godispåsen tom!</span>
      );

    return (
      <React.Fragment>
        <div className="container stay-clear">
          <h3>Product list</h3>
          <hr />
          <div className="row">
            <ProductListing
              productlist={this.state.prodList}
              //den här funkar för köpknappen skickar till updateOrder
              updateOrder={this.updateOrder}
            />
            {cart}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
