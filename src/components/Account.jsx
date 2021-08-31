// this component shows client data (name, adress, email, etc.)
// and previous orders.... if any.

// Att göra
// 1, skicka in reg user i props.
// 2, hämta historiska ordrar Order history knapp.
// 3, hämta användardetaljer Details knapp

const Account = (props) => {
  console.log("account props:", props)
  return (
    <div>
      {props.showAccount ? (
        <div>
          <h3>This is the user account component</h3>
          <button className="btn btn-dark ml-auto" onClick={props.details}>
              Details
            </button>
            <button className="btn btn-warning ml-auto" onClick={props.history}>
              Previous orders
            </button>
        </div>
      ) : (
        <span>acc_off</span>
      )}
    </div>
  );
};

export default Account;
