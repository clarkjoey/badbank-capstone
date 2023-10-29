import React from 'react';
import Card from './card';
import CardForm from './cardform';

function AllData() {
    return (
        <Card
            bgcolor="secondary"
            header="All Data"
            text=""
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