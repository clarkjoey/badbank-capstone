import React from 'react';
import UserContext from "./usercontext";
import { Link } from 'react-router-dom';

function NavBar() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" style={{ paddingLeft: "2rem" }} href="/">Bad Bank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/createaccount/">Create Account</a>
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
                <a className="nav-link" href="#/alldata/">All Data</a>
              </li>
            </ul>
            {/* Conditional rendering based on login status */}
            {ctx.auth ? (
              <span className="navbar-text">{ctx.name}</span>
            ) : (
              <Link to="/login" className="btn btn-light">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;