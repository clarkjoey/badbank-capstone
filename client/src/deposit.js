import React from 'react';
import Card from './card';
import CardForm from './cardform';

function Deposit() {
    const [status, setStatus]     = React.useState(true);

    function depositAmount() {
        setStatus(`$ deposit successful!`);
        setTimeout(() => setStatus(''),2000);
    }

    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            text=""
            status={status}
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                    showEmail="none"
                />
                {<button type="submit" className="btn btn-light" onClick={depositAmount}>Deposit</button>}
                </>
            }
        />
    )
}

export default Deposit;