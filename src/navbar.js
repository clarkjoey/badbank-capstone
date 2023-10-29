import React from 'react';

function NavBar(){

    return(
      <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" style={{paddingLeft: "2rem"}} href="/">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;