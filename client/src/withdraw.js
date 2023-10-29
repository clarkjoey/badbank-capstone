import React from 'react';
import Card from './card';
import CardForm from './cardform';

function Withdraw() {
    const [status, setStatus]     = React.useState(true);

    function withdrawAmount() {
        setStatus(`$ withdrawal successful!`);
        setTimeout(() => setStatus(''),2000);
    }

    return (
        <Card
            bgcolor="success"
            header="Withdraw"
            text=""
            status={status}
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                    showEmail="none"
                />
                {<button type="submit" className="btn btn-light" onClick={withdrawAmount}>Withdraw</button>}
                </>
            }
        />
    )
}

export default Withdraw;