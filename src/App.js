import React from 'react';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './app.css';

function App() {
  return (
    <HashRouter>
      <div>
        {/* Get our navbar from navbar.js */}
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            {/* <Route path="/transactions/" element={<Transactions />} /> */}
            <Route path="/balance/" element={<Balance />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
          <div className='bank-img-container'>
            <img src="/bank.png" alt="Bank" />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;