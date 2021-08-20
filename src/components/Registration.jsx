import React from "react";

const Registration = (props) => {
  console.log("Registration props: ", props.status);

  const handleRegistration = (event) => {
    event.preventDefault();
    let regData = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };
    props.register(regData);
  };

  return (
    <div>
      {props.showReg ? (
        <div>
          <h3>This is the registration component</h3>

          <form
            className="form-inline ml-auto"
            onSubmit={(event) => {
              handleRegistration(event);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            <input
              className="form-control mr-sm-2"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              className="form-control mr-sm-2"
              type="text"
              name="streetadress"
              placeholder="Adress"
            />
            <input
              className="form-control mr-sm-2"
              type="text"
              name="postalcode"
              placeholder="Postal Code"
            />
            <input
              className="form-control mr-sm-2"
              type="text"
              name="city"
              placeholder="City"
            />
            <input
              className="form-control mr-sm-2"
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <input
              className="form-control mr-sm-2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="form-control mr-sm-2"
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />

            <button className="btn btn-success" type="submit">
              Register
            </button>
          </form>

          {/*
                langa in alla rutor för användaruppgifterna
                och tidigare ordrar här!!

            */}
        </div>
      ) : (
        <span>reg_off</span>
      )}
    </div>
  );
};

export default Registration;
