import React from 'react';
import Card from './card';
import CardForm from './cardform';

function AllData() {
    const [data, setData] = React.useState('');

    React.useEffect(() => {

        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    setData(JSON.stringify(data));
            });
    }, []);

    return (
        <Card
            bgcolor="secondary"
            header="All Data"
            text={data}
            status=""
            body={
                <CardForm
                    showName="none"
                    showEmail="none"
                    showPassword="none"
                    showAmount="none"
                    buttonType="button"
                    buttonName="Show All Data"           
                />
            }
        />
    )
}

export default AllData;