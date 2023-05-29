import React from "react";


function Userpage(){
    return(
        <div>
        <h1>Sign In</h1>
        <br></br>
        <label class="username">UserName</label>
        <input type="text" class="name" />
        <br></br>
        <label class="password">password</label>
        <input type="text" class="Password" />
        <br/>
        <button type="onclick">Sign in</button>
        <div>
        <p class="sSignup">Create a new account! <a href='signup'>Sign UP</a></p>
        </div>
        </div>

    )
}

export default Userpage;