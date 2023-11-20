import React from 'react';
import Card from './card';

function AllData() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // fetch all accounts from API
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data); // Store the data array in the state
      });
  }, []);

  return (
    <Card
      bgcolor="secondary"
      header="All Data"
      text=""
      status=""
      body={
        <div>
          {data.map((account, index) => (
            <div className="card" style={{ marginBottom: '10px' }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">Name: {account.name}</h5>
                    <p className="card-text">Email: {account.email}</p>
                    <p className="card-text">Balance: ${account.balance}</p>
                    <p className="card-text">Password: {account.password}</p>
                </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default AllData;