import React from 'react';
import './Signup.css';
import Modal from '../Modal';
import Login from './Login';

const Signup = () => {
    const [fullname, setFullname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const submidHandler = (e) => {
        e.preventDefault();
        const data = {
            name: fullname,
            email,
            password
        };
        console.log(data);
    }

    return <>
        <div className='signup'>
            <form onSubmit={submidHandler} className='signup-form'>
                <input className='fields' value={fullname} onChange={(e) => setFullname(e.target.value)} name='fullname' type='text' placeholder='Enter Your name' required />
                <input className='fields' value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='text' placeholder='Enter your Email' required />
                <input className='fields' value={password} onChange={(e) => setPassword(e.target.value)} name='password' type='password' placeholder='**********' required />
                <button type='submit'>Signup</button>
                <button onClick={() => setOpen(!open)}>Login</button>
            </form>
        </div>
        
        {open &&
            <Modal setOpen={setOpen} userWidth='3800px' >
                <Login />
            </Modal>
        }
    </>;
}

export default Signup;