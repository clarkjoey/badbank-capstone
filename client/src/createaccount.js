import React from 'react';
import Card from './card';
import CardForm from './cardform';
import UserContext from './usercontext';

function CreateAccount(props){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);

    function addUser() {
        ctx.balance = '0';
        console.log(ctx)
        fetch(`/account/find/${ctx.email}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length===0) ctx.user = true;
        })
        .then(() => {
        if (ctx.user===true) {
            const url = `/account/create/${ctx.name}/${ctx.email}/${ctx.password}/${ctx.balance}`;
            (async () => {
                var res = await fetch(url);
                var data = await res.json();
                console.log(data);
            })();
            ctx.user='';
            setShow(false);
        } else {
            ctx.user='';
            setStatus('User already exists with that email');
            setTimeout(() => setStatus(''),3000);
        }})
    }

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            text=""
            status={status}
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