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

  Account = () => {
    // Vad ska vi göra för att hämta user data och historiska ordrar??
    //Vi avaktar och gör klart att ladda in en order!
  };

  Checkout = () => {
    console.log("Checkout called"); //Funkar
    console.log("Checkout orderlist:", this.state.orderList); //Funkar
    console.log("Checkout getUserName:", getUserName()); //Funkar

    // Ta orderlist och user Id och skicka in order till backend.

    const _this = this;
    createOrder(getUserName(), this.state.orderList).then((data) => {
      console.log(data);

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
