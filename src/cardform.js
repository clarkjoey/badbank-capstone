import React from "react";

function CardForm(props) {

    return (
      <>
      <div style={{width: "100%"}}>
      <div className="name-field" style={{display: props.showName}}>
        Name<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter name" /><br/>
      </div>

      <div className="email-field" style={{display: props.showEmail}}>
        Email address<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter email" /><br/>
      </div>

      <div className="password-field" style={{display: props.showPassword}}>
        Password<br/>
        <input type="password" 
          className="form-control" 
          placeholder="Enter password" /><br/>
      </div>

      <div className="amount-field" style={{display: props.showAmount}}>
        Amount<br/>
        <input type="number" 
          className="form-control" 
          placeholder="Enter amount" /><br/>
      </div>
      </div>
      </>
    )
}

export default CardForm;