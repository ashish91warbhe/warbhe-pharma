import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
const SignIn = () => {
    const navigate = useNavigate();
    const linkHandler = (e) => {
        navigate('/forgot');
        
    }

    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [UsernameError, setUsernameError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const [PasswordError2, setPasswordError2] = useState(false);


    const signInHandle = (e) => {

        if ((Username === " " || Username === undefined || Username.length < 1) && (Password === " " || Password === undefined || Password.length < 1)) {
            setUsernameError(true);
            setPasswordError2(true);
        } else {
            setUsernameError(false);
            setPasswordError2(false);
        }
        e.preventDefault();
    }

    const resetHandler = (e) => {
        setUsername("");
        setPassword("");
        setPasswordError2(false);
        setUsernameError(false);
        setPasswordError(false);
        e.preventDefault();

    }
    const UsernameHandler = (e) => {
        let item = e.target.value;
        if (Username === " " || Username.length < 1) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        setUsername(item);
    }

    const PasswordHandler = (e) => {
        let item = e.target.value;
        if (Password.trim().length > 6 && Password.length <= 13) {
            setPasswordError2(false);
            setPasswordError(false);
        } else if (Password.match('^((?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%&^*])).{8,16}$')) {
            setPasswordError(false);
            setPasswordError2(false);
        } else {
            setPasswordError(true);
        }
        setPassword(item);
    }
    return (
        <div className='container'>
            <div className='col-sm-6 mx-auto text-dark shadow-lg'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    margin: 10,
                    padding: 20,
                    height: "auto"
                }}>
                <div className='content-wrap cardwrap'>
                    <form style={{ width: "100%", height: 'auto' }}>
                        <div className='winlead'>
                            <h4 className='mb-5'>User Sign In</h4>
                        </div>
                        <FormControl>
                            <InputLabel htmlFor='Username'>Username<span className='text-danger'>*</span></InputLabel>
                            <Input id="Username" className='mb-4' name="Username" type="text" value={Username} onChange={UsernameHandler} autoComplete="off" />
                            {UsernameError ? <span style={{ color: 'red' }}>Username should not blank</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor='Password'>Password<span className='text-danger'>*</span></InputLabel>
                            <Input id='Password' name='Password' type='Password' value={Password} onChange={PasswordHandler} />
                            {PasswordError ? <span style={{ color: 'red' }}>Password Length should be 8 to 14 charecter with alphanumeric and special symbol</span> : " "}
                            {PasswordError2 ? <span style={{ color: 'red' }}>Password should not blank</span> : ""}
                            <br />
                            <Link to="/forgot" className='text-danger' onClick={linkHandler}><p>Forgot Password?</p> </Link>
                        </FormControl>
                        <div>
                            <Button variant="contained" size="small" className='mt-3' id="btn1" style={{ width: '100%' }} onClick={signInHandle}>Sign In</Button>
                            <br /><br />
                            <Button variant="contained" size="small" id='btn2' style={{ width: '100%' }} onClick={resetHandler}>Reset</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;