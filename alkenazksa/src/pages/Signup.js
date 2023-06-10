import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './pages_css/signup.css';

const apiUrl = 'http://localhost:9000/server/api';
function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        setTimeout(function () {
            setMsg("");
        }, 15000);
    }, [msg]);


    const handleInputChange = (e, type) => {
        switch (type) {
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if (e.target.value === "") {
                    setError("Password has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if (e.target.value === "") {
                    setError("Confirm password has left blank!");
                }
                else if (e.target.value !== pass1) {
                    setError("Confirm password does not match!")
                }
                break;
            default:
        }
    }

    function checkPassword() {
        if (pass1.length < 8) {
            setError("Password is less than 8 characters!")
        }
    }

    async function handleSubmit() {
        if (email !== "" && pass1 !== "" && pass2 !== "") {
            var url = apiUrl + "/signUp.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                email: email,
                password: pass2
            }
            var requestOptions = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data),
                redirect: "follow",
            }; 
            console.log("sent email is: " + Data.email);
            console.log("sent pass is: " + Data.password);
            const response = await fetch(
                url,
                requestOptions
            );
            const result = await response.json();
           
            console.log(result);

            if (result.success) {
                navigate("/Userpage");
            } else {
                alert(result.message);
            }

        }
        else {
            setError("All fields are required!");
        }


    }

    return (
        <body class="as">
            <header class="hee">
                <div className="form">
                    <p>
                        {
                            msg !== "" ?
                                <span className="success">{msg}</span> :
                                <span className="error">{error}</span>
                        }
                    </p>

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}

                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="pass1"
                        value={pass1}
                        onChange={(e) => handleInputChange(e, "pass1")}
                        onBlur={checkPassword}

                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="pass2"
                        value={pass2}
                        onChange={(e) => handleInputChange(e, "pass2")}


                    />
                    <label></label>
                    <input
                        type="submit"
                        defaultValue="Submit"
                        className="button"
                        onClick={handleSubmit}

                    />
                </div>
            </header>
        </body>
    );
}

export default Signup;