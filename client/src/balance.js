import React from 'react';
import Card from './card';
import CardForm from './cardform';

function Balance() {
    const [data, setData] = React.useState('');
    const [status, setStatus] = React.useState(true);

    function fetchAccount() {
        setData('$' + data[0].balance);
        setStatus('Login to see account balance');
        setTimeout(() => setStatus(''),3000);
    }
  
    return (
        <Card
            bgcolor="info"
            header="Balance"
            text={data}
            status={status}
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                    showAmount="none"
                    showEmail="none"              
                />
                {<button type="submit" className="btn btn-light" onClick={fetchAccount}>See Balance</button>}
                </>
            }
        />
    )
}

export default Balance;