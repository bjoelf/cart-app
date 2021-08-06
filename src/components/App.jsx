import React, { Component } from "react";
import getProducts from "../api/prodApi";
import ProductListing from "./products";
import Cart from "./cart";
//import Footer from "./Footer";

//order item counter
//let count = 0;

class App extends Component {
  state = {
    prodList: [],
    orderList: [],
    cartEmthy: false,
    itemCounter: 0,
  };

  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
    console.log("cdm getProducts: ", this.state.prodList);
  }

  updateOrder = (orderitem) => {
    console.log("orderitem:", orderitem);
    const _orderList = this.state.orderList;
    //let _list = [];
    let found = false;

    //Initiate list with initial buy
    if (_orderList.length === 0) {
      console.log("_orderList.length === 0:", orderitem);
      _orderList.push(orderitem);
      this.setState({ orderList: _orderList });
      return;
    }

    _orderList.forEach((val) => {
      //val.id = this.state.orderList.length + 1;

      //Den här verkar funka!
      if (val.name === orderitem.name) {
        val.quantity = val.quantity + 1;
        found = true;
        console.log("val.name === orderitem.name", val);
      }
    });

    if (found === false) {
      orderitem.id = _orderList.length + 1;
      console.log("found === false", orderitem);
      _orderList.push(orderitem);
    }

    this.setState({
      orderList: _orderList,
    });
    console.log("this.setState: ", this.state.orderList);
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
