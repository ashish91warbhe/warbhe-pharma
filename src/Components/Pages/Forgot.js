import React, { useState } from 'react'
import { FormControl, Input, InputLabel, Button } from '@mui/material';
import App from '../../App';
//import App from '../../App';
//import App from '../../App';
const Forgot = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const reset = (e) => {
        e.preventDefault();
        setError('');
        let regularExpression = /^[a-zA-Z0-9!@#&%^&*]{6,16}$/;
        if (!regularExpression.test(password)) {
            alert("password should contain atleast one number and one special charector");
            return false;
        }
        if (password !== confirmPassword) {
            setError("password dosent match")
        }
    }
    return (
        <>
            <div className='col-md-6 mx-auto text-center text-dark shadow-lg'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    margin: 10,
                    padding: 20,
                    height: "auto"
                }}>
               
                <form style={{ width: "100%", height: 'auto' }}>
                <div>
                    <h3>Reset Password</h3>
                </div>
                    <div className='form-group'>
                        <FormControl margin='normal' fullwidth>
                            <InputLabel htmlFor='Username'>Username</InputLabel>
                            <Input id='Username' value={username} type='text' autoComplete='off' onChange={(e) => { setUsername(e.target.value) }} />
                        </FormControl>
                    </div>
                    <div className='form-group'>
                        <FormControl margin='normal' fullwidth>
                            <InputLabel htmlFor='Password'>Password</InputLabel>
                            <Input id='Password' value={password} type='Password' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} />
                        </FormControl>
                    </div>
                    <div className='form-group'>
                        <FormControl margin='normal' fullwidth>
                            <InputLabel htmlFor='ConfirmPassword'>ConfirmPassword</InputLabel>
                            <Input id='Password' value={confirmPassword} type='Password' autoComplete='off' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        </FormControl>
                        {/* <small>(atleast one numbur and one special charector)</small> */}
                    </div>
                    <div id='emailNull' className='text-danger align-left'>{error}</div>
                    <div className='form-group pt-3'>
                        <Button variant="contained" id='btn3' className="btn-primary" style={{ width: "69%",position:"relative"}} size="medium" onClick={reset} >Reset</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Forgot;