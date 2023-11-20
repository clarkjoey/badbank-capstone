import React from 'react';
import Card from './card';
import CardForm from './cardform';
import UserContext from "./usercontext";

function Withdraw() {
    const ctx = React.useContext(UserContext); 
    const [show, setShow] = React.useState(ctx.auth);
    const [status, setStatus] = React.useState(true);

    function withdrawAmount() {
        setStatus(`$${ctx.balance} withdrawal successful!`);
        setTimeout(() => setStatus(''),2000);

        const url = `/account/withdraw/${ctx.email}/${ctx.balance}`;
        
        (async () => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            ctx.balance = data[0].balance;
            console.log(data);
          } catch (error) {
            console.error('Error:', error);
          }
        })();
    }
    
    return (
        <Card
            bgcolor="success"
            header="Withdraw"
            text=""
            status={status}
            body={
                <>
                {show ?
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                    showEmail="none"/>
                {<button type="submit" className="btn btn-light" onClick={withdrawAmount}>Withdraw</button>}
                </>
                :
                <h5>Login to make a deposit</h5>}
                </>
            }
        />
    )
}

export default Withdraw;