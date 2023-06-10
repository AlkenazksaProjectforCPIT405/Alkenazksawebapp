import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './pages_css/signin.css';

const apiUrl = 'http://localhost:9000/server/api';
function Userpage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = React.useState({
        state: localStorage.getItem("isLoggedIn") === "true" || false,
        email: localStorage.getItem("email") || "",
    });

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
   const queryParams = new URLSearchParams(location.search);
    const fromCartPage = queryParams.get("fromCartPage") === "true";

    // useEffect(() => {
    //     setTimeout(function () {
    //         setMsg("");
    //         setError("");
    //     }, 15000);
    // }, [msg]);

    async function handleSubmit(event) {
        event.preventDefault();
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        var raw = {
            email: email,
            password: pass,
        };

        var requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(raw),
            redirect: "follow",
        };
        console.log("im outside try catch");
        try {
            
        console.log("im inside try catch");
            const response = await fetch(
                apiUrl + "/signIn.php",
                requestOptions
            );
            console.log("im before json response");
            const result = await response.json();
            console.log("im after json response");
            if (result.success) {
                const userData = {
                    isLoggedIn: result.success,
                    email: email,
                };
                setIsLoggedIn(userData);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("email", email);
                // if (fromCartPage) {
                //     navigate("/CartPage");
                // } else {
                //     navigate("/");
                // }
                navigate("/");
            } else {

                alert(result.message);
            }
        } catch (e) {
            alert(e);
        }
    }
    function handleLogout() {
        setIsLoggedIn({
            state: false,
            email: "",
        });
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
    }



    return (



        <body class="bodys">

            {isLoggedIn.state ?

                (<div>
                    <p>
                        You are logged in as{" "}
                        <span >{isLoggedIn.email}</span>
                    </p>
                    <a href="/">
                        Home
                    </a>
                    <a href="/" onClick={handleLogout}>
                        Log out
                    </a>
                </div>) :
                (<header class="he">
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
                        <label class="username" >email</label>
                        <input type="text" class="name" onChange={(e) => setEmail(e.target.value)} />
                        <br></br>
                        <label class="password">password</label>
                        <input type="password" class="Password" onChange={(e) => setPass(e.target.value)} />
                        <br />
                        <button type="onclick" class="bb" onClick={handleSubmit}>Sign in</button>
                        <div>
                            <p class="sSignup">Create a new account! <a href='signup' class="aSignin">Sign UP</a></p>
                        </div>
                    </div>
                </header>)}



        </body>
    );
}

export default Userpage;