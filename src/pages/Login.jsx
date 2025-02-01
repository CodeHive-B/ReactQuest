import { useState } from "react";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Login Page</h1>
            <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>
        </div>
    ) 
}

export default Login;