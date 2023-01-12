import React from 'react'
import Add from "../img/addAvatar.png"

function Login() {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat App</span>
                <span class='title'>Login</span>
                <form>
                    <input type="email" placeholder='email' />
                    <input type="text" placeholder='password' />

                    <button>Sign In</button>
                </form>
                <p>You don't have an account yet? Register</p>
            </div>
        </div>
    )
}

export default Login