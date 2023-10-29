import React from 'react';
import Card from './card';
import CardForm from './cardform';

function CreateAccount(props){
    const [show, setShow]     = React.useState(true);

    function addUser() {
        setShow(false);
    }

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            text=""
            status=""
            body={
                <>
                {show ? 
                <>
                <CardForm setShow={setShow} showAmount="none"/> 
                {<button type="submit" className="btn btn-light" onClick={addUser}>Create Account</button>}
                </>
                : 
                <Success setShow={setShow}/>}
                </>
            }
        />      
    );
}

function Success(props) {
    return (
        <>    
        <h5>Success!</h5><br/>
        <button type="submit" 
            className="btn btn-light" 
            onClick={() => props.setShow(true)}>Add another account</button>
        </>
    )
}

export default CreateAccount;