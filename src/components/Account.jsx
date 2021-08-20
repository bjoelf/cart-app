// this component shows client data (name, adress, email, etc.)
// and previous orders.... if any.

const Account = (props) => {
  return (
    <div>
      {props.showAccount ? (
        <div>
          <h3>This is the user account component</h3>

          {/*
                langa in alla rutor för användaruppgifterna
                och tidigare ordrar här!!

            */}
        </div>
      ) : (
        <span>acc_off</span>
      )}
    </div>
  );
};

export default Account;
