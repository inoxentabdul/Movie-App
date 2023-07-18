import React from 'react';
import './Signup.css';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submidHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={submidHandler} className='signup-form'>
                <input className='fields' value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='text' placeholder='Enter your Email' required />
                <input className='fields' value={password} onChange={(e) => setPassword(e.target.value)} name='password' type='password' placeholder='**********' required />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;