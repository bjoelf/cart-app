import React, { Component } from "react";
import getProducts from "../api/prodApi";
import createOrder from "../api/orderApi";
import logInUser, {
  getUserToken,
  applyRegistration,
  getUserName,
} from "../api/userApi";
import ProductListing from "./products";
import Cart from "./cart";
import Footer from "./Footer";
import NavBar from "./navbar";
import Registration from "./Registration";
import Account from "./Account";

class App extends Component {
  state = {
    prodList: [],
    orderList: [],
    cartEmthy: false,
    totalCost: 0,
    totalItems: 0,
    userToken: null,
    loginData: [],
    showProducts: true,
    showRegister: false,
    showAccount: false,
    previousOrders: [],
  };

  componentDidMount() {
    const _this = this;

    getProducts().then((prdLst) => {
      _this.setState({ prodList: prdLst });
    });
  }

  register = (regData) => {
    // const _this = this;
    applyRegistration(regData).then((data) => {
      //console.log("reg resonse", data);
      if (data === "Ok") {

        //TODO: Inte klart här!
        console.log("Registration success");
        //Call login method here to login successfull registration?

      }
    });
  };

  login = (loginData) => {
    const _this = this;
    logInUser(loginData).then((data) => {
      console.log(data);
      if (data === "Ok") {
        _this.setState({ userToken: getUserToken() });
        _this.setState({ userName: getUserName() });

        //console.log("usertoken:", this.state.userToken);
        //console.log("userName:", this.state.userName);
      }
    });
  };

  logout = () => {
    const _this = this;
    console.log("logout called");
    _this.setState({ userToken: null });

    //TODO: nolla usertoken i userApi.jsx

    _this.setState({ userId: null });
    console.log("logout userToken:", this.state.userToken);
    console.log("logout userId:", this.state.userId);
  };

  updateOrder = (orderitem) => {
    let _orderList = this.state.orderList;
    let _totalCost = 0;
    let _totalItems = 0;
    let found = false;

    //Initiate list with initial purchase
    if (_orderList.length === 0) {
      _orderList.push(orderitem);
      _totalCost = orderitem.Price;
      _totalItems = orderitem.Quantity;
      this.setState({
        orderList: _orderList,
        totalCost: _totalCost,
        totalItems: _totalItems,
      });
      return;
    }

    _orderList.forEach((val) => {
      if (val.Name === orderitem.Name) {
        val.Quantity = val.Quantity + 1;
        val.Price = Number((Number(val.Quantity) * Number(orderitem.Price)).toFixed(2));
        console.log("val.Price:", val.Price); // funkar = siffra
        found = true;
      }
      _totalCost = Number(_totalCost) + Number(val.Price);
      _totalItems = Number(_totalItems) + Number(val.Quantity);
    });

    if (found === false) {
  
        //Den här borde vi bara kunna ta bort!
      //orderitem.Id = _orderList.length + 1;
      orderitem.Price = orderitem.Price.toFixed(2);

  
      _totalCost = Number(_totalCost) + Number(orderitem.Price);
      _totalItems = Number(_totalItems) + Number(orderitem.Quantity);
      _orderList.push(orderitem);
    }

    this.setState({
      orderList: _orderList,
      totalCost: _totalCost,
      totalItems: _totalItems,
    });

    console.log("orderlist", _orderList )
  };

  Account = () => {
    // Vad ska vi göra för att hämta user data och historiska ordrar??
    //Vi avaktar och gör klart att ladda in en order!
  };

  Checkout = () => {
    const _this = this;
    console.log("Checkout:", this.state.orderList);

    createOrder(this.state.userToken, this.state.orderList).then((data) => {
      console.log("Checkout retur:", data);

      if (data === "Ok") {
        console.log("order gick igenom");
        _this.setState({ orderList: null });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container stay-clear">
          <NavBar
            tCost={this.state.totalCost}
            tItems={this.state.totalItems}
            login={this.login}
            logout={this.logout}
            status={this.state.userToken === null ? true : false}
            account={this.Account}
            checkout={this.Checkout}
          />
          <hr />
          <div className="row">
            <ProductListing
              pList={this.state.prodList}
              updateOrder={this.updateOrder}
              showProd={this.state.showProducts}
            />
            <Cart
              oList={this.state.orderList}
              tCost={this.state.totalCost}
              tItems={this.state.totalItems}
              showProd={this.state.showProducts}
            />
            <Account showAccount={this.state.showAccount} />
            <Registration
              showReg={this.state.showRegister}
              handleReg={this.register}
            />
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
