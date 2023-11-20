import React from 'react';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import Login from './login';
import UserContext from './usercontext';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './app.css';

function App() {
  return (
    <HashRouter>
      <div>
        <UserContext.Provider value={{user:'',auth:false,name:'',email:'',password:'',balance:'0'}}>
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            {/* <Route path="/transactions/" element={<Transactions />} /> */}
            <Route path="/balance/" element={<Balance />} />
            <Route path="/alldata/" element={<AllData />} />
            <Route path="/login/" element={<Login />} />
          </Routes>
          <div className='bank-img-container'>
            <img src="/bank.png" alt="Bank" />
          </div>
        </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;