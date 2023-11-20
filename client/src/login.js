import React from 'react';
import UserContext from "./usercontext";
import Card from './card';
import CardForm from './cardform';

function Login(props) {
    const ctx = React.useContext(UserContext); 
    const [show, setShow] = React.useState(!ctx.auth);
    const [status, setStatus] = React.useState(null);
    console.log(show);

    function login() {
        ctx.balance = '0';
        console.log(ctx)
        fetch(`/account/login/${ctx.email}/${ctx.password}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length===1) {
                ctx.auth = true;
                ctx.name = data[0].name;
                ctx.email = data[0].email;
                ctx.password = data[0].password;
                ctx.balance = data[0].balance;
                setShow(false);
            } else {
                ctx.user='';
                setStatus('Invalid login credentials');
                setTimeout(() => setStatus(''),3000);
            }
        })
    }

    return (
        <Card
            bgcolor="dark"
            header="Login"
            text=""
            status={status}
            body={
                <>
                {show ? 
                <>
                <CardForm setShow={setShow} showAmount="none" showName="none"/> 
                {<button type="submit" className="btn btn-light" onClick={login}>Login</button>}
                </>
                : 
                <Success setShow={setShow}/>}
                </>
            }
        />   
    )
}

function Success(props) {
    return (
        <>    
        <h5>Success!</h5>
        </>
    )
}

export default Login;