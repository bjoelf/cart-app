import React, { Component } from "react";
import getProducts from "../api/prodApi";
import ProductListing from "./products";
import Cart from "./cart";
//import Footer from "./Footer";

//order item counter
let count = 0;

class App extends Component {
  state = {
    prodList: [],
    orderList: [],
    cartEmthy: false,
    itemCounter: 0,
  };

  //Load data on startup.
  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
    console.log("cdm getProducts: ", this.state.prodList);
  }


  updateOrder = (orderitem) => {
    const _orderList = this.state.orderList;
    orderitem.id = ++count;

    
    if (orderitem !== undefined) {
      _orderList.push(orderitem);

      this.setState({
        orderList: _orderList,
      });
    }
  };




  render() {
    return (
      <React.Fragment>
        <div className="container stay-clear">
          <h3>The sweetest shop</h3>
          <hr />
          <div className="row">
            <ProductListing
              pList={this.state.prodList}
              updateOrder={this.updateOrder}
            />
            <Cart oList={this.state.orderList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
