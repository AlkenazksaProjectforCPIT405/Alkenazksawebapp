import React from "react";


function Userpage(){
    return(
        <div>
        <h1>Sign Up</h1>
        <br></br>
        <label class="name">Name</label>
        <input type="text" class="name" />
        <br></br>
        <label class="email">Email</label>
        <input type="text" class="Email" />
        <br></br>
        <label class="password">password</label>
        <input type="text" class="Password" />
        <br/>
        <button type="onclick">Sign Up</button>
        </div>
    )
}

export default Userpage;