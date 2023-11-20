import React from 'react';
import Card from './card';
import UserContext from "./usercontext";

function Balance() {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(ctx.auth); 

    React.useEffect(() => {
        fetch(`/account/balance/${ctx.email}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            ctx.balance = data[0].balance;
          });
    });
  
    return (
        <Card
            bgcolor="info"
            header="Balance"
            text=""
            status=""
            body={
                <>
                {show ?
                <>
                <div className="card" style={{ marginBottom: '10px' }}>
                    <div className="card-body">
                        <h5 className="card-title">Name: {ctx.name}</h5>
                        <p className="card-text">Email: {ctx.email}</p>
                        <p className="card-text">Balance: ${ctx.balance}</p>
                    </div>
                </div>
                </>
                :
                <h5>Login to make a deposit</h5>}
                </>
            }
        />
    )
}

export default Balance;