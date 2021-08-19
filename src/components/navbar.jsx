import React from "react";

//Stateless Functional Component
const NavBar = (props) => {
  console.log("props.status: ", props.status);

  // recives from login fields and send upwards to App component.
  const handleSubmit = (event) => {
    event.preventDefault();
    let loginData = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };
    props.login(loginData);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <h3>The sweetest shop</h3>

        {props.status ? (
          <form
            className="form-inline ml-auto"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              name="userName"
              placeholder="Username"
            />
            <input
              className="form-control mr-sm-2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        ) : (
          <button className="btn btn-dark ml-auto" onClick={props.logout}>
            Logout
          </button>
        )}
        <div className="badge badge-pill badge-secondary">
          Antal i påsen: &nbsp;
          {props.tItems.toFixed(0)}
        </div>
        <div className="badge badge-pill badge-secondary">
          Kostnad: &nbsp;
          {props.tCost.toFixed(2)}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
