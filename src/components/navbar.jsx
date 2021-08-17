import React, {Component}  from "react";

//Stateless Functional Component
class NavBar extends Component {
  render() {
  return (
    <nav className="navbar navbar-light bg-light">
     <h3>The sweetest shop</h3>
     <span className="badge badge-pill badge-secondary">
          Antal i påsen: 
        {this.props.tItems.toFixed(0)}
        </span>
        <span className="badge badge-pill badge-secondary">
        Kostnad:
        {this.props.tCost.toFixed(2)}
        </span>
    </nav>
  );
  }
};

export default NavBar;
