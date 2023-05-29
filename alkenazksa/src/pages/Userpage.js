import React from "react";
import { useState , useEffect } from 'react';

import './pages_css/signin.css';
function Userpage(){
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 15000);
    }, [msg]);
    return(
        <body class="bodys">
             <header class="he">
        <div className="form">
        <p>
                    {
                        msg !== "" ?
                        <span className="success">{msg}</span> :
                        <span className="error">{error}</span>
                    }
                    </p>
        <h1 class="signinh">SignIn</h1>
        <br></br>
        <label class="username" >UserName</label>
        <input type="text" class="name" />
        <br></br>
        <label class="password">password</label>
        <input type="text" class="Password" />
        <br/>
        <button type="onclick" class="bb">Sign in</button>
        <div>
        <p class="sSignup">Create a new account! <a href='signup' class="aSignin">Sign UP</a></p>
        </div>
        </div>
        </header>
        </body>
    )
}

export default Userpage;