import React from "react";

const Registration = (props) => {
  
  // Registration är inte klart!
  //console.log("Registration props: ", props.status);

  const handleRegistration = (event) => {
    event.preventDefault();
    let regData = {

      
      Firstname: event.target["firstname"].value,
      Lastname: event.target["lastname"].value,

      Streetadress: event.target["streetadress"].value,
      Streetnumber: event.target["streetnumber"].value,
      Postalcode: event.target["postalcode"].value,
      City: event.target["city"].value,

      Email: event.target["email"].value,
      Phone: event.target["phone"].value,
      
      Password: event.target["password"].value,
    };

    // Anropar register i App.jsx

    //Här smäller det! Registration props:  undefined

    props.handleReg(regData);
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
              name="streetnumber"
              placeholder="Street Number"
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
              name="email"
              placeholder="Email (your username)"
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
        </div>
      ) : (
        <span> </span>
      )}
    </div>
  );
};

export default Registration;
