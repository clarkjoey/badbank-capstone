import React from "react";
import UserContext from "./usercontext";

function CardForm(props) {
  const ctx = React.useContext(UserContext);

  const handleNameChange = (e) => {
    ctx.name = e.currentTarget.value;
  };

  const handleEmailChange = (e) => {
    ctx.email = e.currentTarget.value;
  };

  const handlePasswordChange = (e) => {
    ctx.password = e.currentTarget.value;
  };

  const handleBalanceChange = (e) => {
    ctx.balance = e.currentTarget.value;
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="name-field" style={{ display: props.showName }}>
          Name<br />
          <input
            type="input"
            className="form-control"
            placeholder="Enter name"
            onChange={handleNameChange}
          />
          <br />
        </div>

        <div className="email-field" style={{ display: props.showEmail }}>
          Email address<br />
          <input
            type="input"
            className="form-control"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <br />
        </div>

        <div className="password-field" style={{ display: props.showPassword }}>
          Password<br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          <br />
        </div>

        <div className="amount-field" style={{ display: props.showAmount }}>
          Amount<br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            onChange={handleBalanceChange}
          />
          <br />
        </div>
      </div>
    </>
  );
}

export default CardForm;