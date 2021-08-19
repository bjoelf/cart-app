import React, { Component } from "react";
import getProducts from "../api/prodApi";
import logInUser, {getUserToken} from "../api/userApi";
import ProductListing from "./products";
import Cart from "./cart";
import Footer from "./Footer";
import NavBar from "./navbar";

class App extends Component {
  state = {
    prodList: [],
    orderList: [],
    cartEmthy: false,
    totalCost: 0,
    totalItems: 0,
    userToken: null,
    loginData: [],
  };

  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
    console.log("cdm getProducts: ", this.state.prodList);
  }

  login = (loginData) => {
    const _this = this;
    logInUser(loginData).then((data) => {
      console.log(data);
      if (data === "Ok") {
        _this.setState({usertoken: getUserToken() });
        console.log("usertoken:", this.state.usertoken);
      }
    });
  };

  logout = () => {
    this.setState({ userToken: null});
  };

  updateOrder = (orderitem) => {
    let _orderList = this.state.orderList;
    let _totalCost = 0;
    let _totalItems = 0;
    let found = false;

    //Initiate list with initial purchase
    if (_orderList.length === 0) {
      _orderList.push(orderitem);
      _totalCost = orderitem.price;
      _totalItems = orderitem.quantity;
      this.setState({
        orderList: _orderList,
        totalCost: _totalCost,
        totalItems: _totalItems,
      });
      return;
    }

    _orderList.forEach((val) => {
      if (val.name === orderitem.name) {
        val.quantity = val.quantity + 1;
        val.price = (val.quantity * orderitem.price).toFixed(2);
        found = true;
      }
      _totalCost = Number(_totalCost) + Number(val.price);
      _totalItems = Number(_totalItems) + Number(val.quantity);
    });

    if (found === false) {
      orderitem.id = _orderList.length + 1;
      _totalCost = Number(_totalCost) + Number(orderitem.price);
      _totalItems = Number(_totalItems) + Number(orderitem.quantity);
      _orderList.push(orderitem);
    }

    this.setState({
      orderList: _orderList,
      totalCost: _totalCost,
      totalItems: _totalItems,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container stay-clear">
          <NavBar tCost={this.state.totalCost} tItems={this.state.totalItems} 
          login={this.login}
          logout={this.logout}
          status={this.state.userToken === null ? false : true}
          />
          <hr />
          <div className="row">
            <ProductListing
              pList={this.state.prodList}
              updateOrder={this.updateOrder}
            />
            <Cart
              oList={this.state.orderList}
              tCost={this.state.totalCost}
              tItems={this.state.totalItems}
            />
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
