import React, { useState } from "react";
import { FormControl, Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sign_Up = () => {

    //constant of the elements

    const [pharmacyName, setPharmacyName] = useState("");
    const [pharmacyNameErr, setPharmacyNameErr] = useState(false);
    const [owner, setOwner] = useState("");
    const [ownerErr, setOwnerErr] = useState(false);
    const [licence, setLicence] = useState("");
    const [licenceErr, setLicenceErr] = useState(false);
    const [adhar, setAdhar] = useState('');
    const [adharErr, setAdharErr] = useState(false);
    const [pan, setPan] = useState('');
    const [panErr, setPanErr] = useState(false);
    const [value, setValue] = useState('');
    const [addressOfPharmacy, setAddressOfPharmacy] = useState("");
    const [addressOfPharmacyErr, setAddressOfPharmacyErr] = useState(false);
    const [state, setState] = useState("");
    const [stateErr, setStateErr] = useState(false);
    const [pin, setPin] = useState("");
    const [pinErr, setPinErr] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [primaryNo, setPrimaryNo] = useState("");
    const [primaryNoErr, setPrimaryNoErr] = useState(false);
    const [secondaryNo, setSecondaryNo] = useState("");
    const [secondaryNoErr, setSecondaryNoErr] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassErr, setConfirmPassErr] = useState(false);


    // form submit
    function signUpHandler(e) {
        if ((pharmacyName === " " || pharmacyName === undefined || pharmacyName.length < 1)
            && (owner === " " || owner === undefined || owner.length < 1)
            && (licence === " " || licence === undefined || licence.length < 1)
            && (adhar === " " || adhar === undefined || adhar.length < 6)
            && (pan === " " || pan === undefined || pan.length < 5)
            && (addressOfPharmacy === " " || addressOfPharmacy === undefined || addressOfPharmacy.length < 1)
            && (state === " " || state === undefined || state.length < 1)
            && (pin === " " || pin === undefined || pin.length < 1)
            && (email === " " || email === undefined || email.length < 1)
            && (primaryNo === " " || primaryNo === undefined || primaryNo.length < 9)
            && (secondaryNo === " " || secondaryNo === undefined || secondaryNo.length < 9)
            && (username === " " || username === undefined || username.length < 1)
            && (password === " " || password === undefined || password.length < 1)
            && (confirmPass === " " || confirmPass === undefined || confirmPass.length < 1)) {
            setPharmacyNameErr(true);
            setOwnerErr(true);
            setLicenceErr(true);
            setAdharErr(true);
            setPanErr(true);
            setAddressOfPharmacyErr(true);
            setStateErr(true);
            setPinErr(true);
            setEmailErr(true);
            setPrimaryNoErr(true);
            setSecondaryNoErr(true);
            setUsernameErr(true);
            setPasswordErr(true);
            setConfirmPassErr(true);
            alert('Cheak all field properly')
        }
        e.preventDefault();
    };
    function resetHandler(e) {
        setPharmacyNameErr(false);
        setPharmacyName('');
        setOwnerErr(false);
        setOwner('');
        setLicenceErr(false);
        setLicence('');
        setAdhar('');
        setAdharErr(false);
        setPan('');
        setPanErr(false);
        setAddressOfPharmacyErr(false);
        setAddressOfPharmacy('');
        setStateErr(false);
        setState('');
        setPinErr(false);
        setPin('');
        setEmailErr(false);
        setEmail('');
        setPrimaryNoErr(false);
        setPrimaryNo('');
        setSecondaryNoErr(false);
        setSecondaryNo('');
        setUsernameErr(false);
        setUsername('');
        setPasswordErr(false);
        setPassword('');
        setConfirmPassErr(false);
        setConfirmPass('');
        e.preventDefault();
    };

    function PharmacyHandler(e) {
        let item = e.target.value;
        if (pharmacyName === " " || pharmacyName === undefined || pharmacyName.length < 1) {
            setPharmacyNameErr(true);
        } else {
            setPharmacyNameErr(false);
        }
        setPharmacyName(item);
    };

    function ownerHandler(e) {
        let item = e.target.value;
        if (owner === " " || owner === undefined || owner.length < 1) {
            setOwnerErr(true);
        } else {
            setOwnerErr(false);
        }
        setOwner(item);
    };


    function licenceHandler(e) {
        let item = e.target.value;
        console.log(item)
        if (licence === " " || licence === undefined || licence.length < 1) {
            setLicenceErr(true);
        } else {
            setLicenceErr(false);
        }
        setLicence(item);
    };

    const adharHandler = (e) => {
        let item = e.target.value;
        if (adhar === " " || adhar === undefined || adhar.length < 11) {
            setAdharErr(true);
        } else {
            setAdharErr(false);
        }
        setAdhar(item);
    }
    const panNoHandler = (e) => {
        let item = e.target.value.toUpperCase();
        if (pan.trim().length > 9 && pan.length < 9) {
            setPanErr(true);
        } else if (!pan.match(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)) {
            setPanErr(true);
        } else {
            setPanErr(false);
        }
        setPan(item);
    }

    function handleSelect(e) {
        let item = e.target.value;
        console.log(item)
        setValue(item);

    }

    function addHandler(e) {
        let item = e.target.value;
        if (addressOfPharmacy === " " || addressOfPharmacy === undefined || addressOfPharmacy.length < 1) {
            setAddressOfPharmacyErr(true);
        } else {
            setAddressOfPharmacyErr(false);
        }
        setAddressOfPharmacy(item);
    };


    function stateHandler(e) {
        let item = e.target.value;
        if (state === " " || state === undefined || state.length < 1) {
            setStateErr(true);
        } else {
            setStateErr(false);
        }
        setState(item);
    };

    function pinHandler(e) {
        let item = e.target.value;
        if (pin === " " || pin === undefined || pin.length < 1) {
            setPinErr(true);
        } else {
            setPinErr(false);
        }
        setPin(item);
    };

    function emailHandler(e) {
        let item = e.target.value;
        if (email === " " || email === undefined || email.length < 1) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }
        setEmail(item);
    };

    function priNoHandler(e) {
        let item = e.target.value;
        if (primaryNo === " " || primaryNo === undefined || primaryNo.length < 1) {

            setPrimaryNoErr(true);
        } else {
            setPrimaryNoErr(false);
        }
        setPrimaryNo(item);
    };

    function secNoHandler(e) {
        let item = e.target.value;
        if (secondaryNo === " " || secondaryNo === undefined || secondaryNo.length < 1) {
            setSecondaryNoErr(true);
        } else {
            setSecondaryNoErr(false);
        }

        setSecondaryNo(item);
    };

    function userHandler(e) {
        let item = e.target.value;
        if (username === " " || username === undefined || username.length < 1) {
            setUsernameErr(true);
        } else {
            setUsernameErr(false);
        }
        setUsername(item);
    };

    function passHandler(e) {
        let item = e.target.value;
        if (password.trim().length > 6 && password.length <= 12) {
            setPasswordErr(false);
        } else if (password.match('^((?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%&^*])).{8,16}$')) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }
        setPassword(item);
    };

    function confPassHandler(e) {
        let item = e.target.value;
        if (confirmPass.trim().length > 6 && confirmPass.length <= 12) {
            setConfirmPassErr(false);
        } else if (confirmPass.match('^((?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%&^*])).{8,16}$')) {
            setConfirmPassErr(false);
        } else {
            setConfirmPassErr(true);
        }
        setConfirmPass(item);
    };



    return (
        <div className="container">
            <div className='col-sm-6 mx-auto text-dark shadow-lg'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    margin: 10,
                    padding: 20,
                    height: "auto"
                }}>
                <div className="content-wrap cardwrap">
                    <form style={{ width: "100%", height: "auto" }} >
                        <div className='winlead'>
                            <h2>User SignUp</h2>
                        </div>
                        <FormControl>
                            <InputLabel htmlFor="pharmacy name">Parmacy Name </InputLabel>
                            <Input type="text" name="pharmacyName" value={pharmacyName} onChange={PharmacyHandler} id="width"  autoComplete="off" />{pharmacyNameErr ? <span style={{ color: "red" }}>*Enter pharmacy name*</span> : " "}

                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="owner">Owner</InputLabel>
                            <Input type="text" name="owner" value={owner} onChange={ownerHandler} id="width"  autoComplete="off" />
                            {ownerErr ? <span style={{ color: "red" }}>*Owner name*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="licence no">Licence No.</InputLabel>
                            <Input type="number" name="licence" value={licence} onChange={licenceHandler} id="width"  autoComplete="off" />
                            {licenceErr ? <span style={{ color: "red" }}>*Enter licence*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                        <lable htmlFor="licence photo">Licence Photo</lable>
                            <Input type="file" accept="image/*" multiple="false" placeholder="Licence No." id="width"  />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="adharcard ">Adhar Card No.</InputLabel>
                            <Input type="number" name="adhar" value={adhar} onChange={adharHandler} id="width"  autoComplete="off" />
                            {adharErr ? <span style={{ color: "red" }}>*Enter Adhar No*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <label htmlFor="adhar card photo">Adhar Card Photo</label>
                            <Input type="file" accept="image/*" multiple="false" placeholder="Adhar Card Photo" id="width"  />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="pan no">Pan No.</InputLabel>
                            <Input type="text" name="pan no" value={pan} onChange={panNoHandler} id="width"  autoComplete="off" />
                            {panErr ? <span style={{ color: "red", textTransform: "uppercase" }}>*Enter Pan No*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                        <lable htmlFor="passport photo">Pan Card Photo</lable>
                            <Input type="file" accept="image/*" multiple="false" placeholder="Pan Card No." id="width"  />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <lable htmlFor="passport photo">Passport Photo</lable>
                            <Input type="file" accept="image/*" multiple="false" placeholder="Passport Photo" id="width"  />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <div className="dropdown">
                                    <label htmlFor="type of buisness">Type Of Buisness</label>
                                <br />
                                <select className="dropdown text-decoration-none" onClick={handleSelect} id="width"  autoComplete="off">
                                    <option value="wholeseller">Wholeseller</option>
                                    <option value="retailer">Retailer</option>
                                </select>
                                <br />
                                {value}
                                <br />
                            </div>
                        </FormControl>
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="">Address Of Pharmacy</InputLabel>
                            <Input type="text" name="addressOfPharmacy" value={addressOfPharmacy} onChange={addHandler} id="width"  autoComplete="off" />{addressOfPharmacyErr ? <span style={{ color: "red" }}>*Enter pharmacy address*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="state">State</InputLabel>
                            <Input type="text" name="state" value={state} onChange={stateHandler} id="width"  autoComplete="off" />
                            {stateErr ? <span style={{ color: "red" }}>*Enter state*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="pin code">Pin Code</InputLabel>
                            <Input type="number" name="pin" value={pin} onChange={pinHandler} id="width"  autoComplete="off" />{pinErr ? <span style={{ color: "red" }}>*Enter valid pin*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="email">Email Id</InputLabel>
                            <Input type="email" name="email" value={email} onChange={emailHandler} id="width"  autoComplete="off" />{emailErr ? <span style={{ color: "red" }}>*Enter valid email*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="primary mo no">Primary Mobile No</InputLabel>
                            <Input type="number" name="primaryNo" vvalue={primaryNo} onChange={priNoHandler} id="width"  autoComplete="off" />{primaryNoErr ? <span style={{ color: "red" }}>*Enter primary mobile number*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="secondary mo mo">Secondary Mobile No</InputLabel>
                            <Input type="number" name="secondaryNo" value={secondaryNo} onChange={secNoHandler} id="width"  autoComplete="off" />{secondaryNoErr ? <span style={{ color: "red" }}>*Enter  secondary mobile number*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input type="text" name="username" value={username} onChange={userHandler} id="width"  autoComplete="off" />{usernameErr ? <span style={{ color: "red" }}>*Username is invalid*</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" name="password" value={password} onChange={passHandler} id="width"  autoComplete="off" />
                            {passwordErr ? <span style={{ color: "red" }}>password lenght should be less than 8 charectors and grater than 12 charectors</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="password">Confirm password</InputLabel>
                            <Input type="password" name="confirmPass" value={confirmPass} onChange={confPassHandler} id="width"  autoComplete="off" />
                            {confirmPassErr ? <span style={{ color: "red" }}>password lenght should be less than 8 charectors and grater than 12 charectors</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <Button variant="contained" size="small" className='mt-3' id="btn1" style={{ width: '100%' }} onClick={signUpHandler}>SignUp</Button>
                        <br /><br />
                        <Button variant="contained" size="small" id='btn2' onClick={resetHandler} style={{ width: '100%' }}>Reset</Button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Sign_Up;
