import React, { useState } from 'react'
import { InputLabel, Input, FormControl, TextareaAutosize, Button } from '@mui/material';


const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const nameChangeHandler = (e) => {
    let item = e.target.value;

    setName(item);
  }

  const emailChangeHandler = (e) => {
    let item = e.target.value;

    setEmail(item);
  }

  const contactChangeHandler = (e) => {
    let item = e.target.value;

    setContact(item);
  }
  return (
    <div className='container bg-light'>
      <div className='contact_section'>
        <div className='google-map-container d-flex'>
          <iframe title='warbhe pharma map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.840067135271!2d78.63518031423982!3d20.71671810373488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47fc354257637%3A0xb7d9891eca581b12!2sWARBHE%20PHARMA!5e0!3m2!1sen!2sin!4v1664790522402!5m2!1sen!2sin"
            style={{
              position: "relative",
              border: "0",
              width: '100%',
              height: "450px"
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <hr style={{ border: "3px solid black" }} />
        <div className='row'>
          <div className="col-md-6" >
            <form action="https://formsubmit.co/el/yizaja" method="POST">
              <h3>Get in Touch</h3>
              <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor='name'>Name</InputLabel>
                <Input type='text'
                  name='name'
                  id='name'
                  autoComplete='off'
                  required
                />
              </FormControl>
              <br /><br />
              <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input type='email'
                  name='email'
                  autoComplete='off'
                  required />
              </FormControl>
              <br /><br />
              <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor='contact no'>Contact No</InputLabel>
                <Input type='number'
                  name='contact'
                  autoComplete='off'
                  required />
              </FormControl>
              <br /><br />
              <TextareaAutosize
                aria-label="Massage"
                placeholder="Massage"
                style={{ width: "100%" }}
                autoComplete='off'
                required
              />
              <br />
              <br />
              <Button className='mb-2' style={{ width: "100%" }} variant="contained" size="small" type='submit'>
                Submit
              </Button>
            </form>
          </div>
          <div className="col-md-6" style={{ paddingLeft: "10%" }}>
            <h3>Contact Info</h3>
            <address>Address-: MIDC Road Barbadi,Wardha,Maharashtra,India 442001 <br /><br /> Mob.No-: 8999761332/9970321314 <br /><br />Email:- warbhepharma@gmail.com <br /><br /> Business Hours-:10.00AM - 5:00PM(Mon-Sat)</address>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUS;