import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../style/LoginPage.css';
function Regiter() {
  return (
    <div className='login'>
          <div className='container'>
              <div className='left'>
                 <img className='logoo' src='./images/logo.png' alt='nono' />
                 <div className='textarea'>
                 <h1>Hire from</h1>
                 <h1 className='clgnm'>IIT ISM Dhanbad</h1>
                 </div>
              </div>
              <div className='right'>
                  <div className='loginbox registerbox'>
                    <div className='signintext'>
                    <h1>Register</h1>
                    </div>
                    <div className='formdiv'>
                      <form >
                      <div className='formform'>
                      <Input className='textfield1' placeholder="Company  name"/>
                      <Input className='textfield1' placeholder="email id"/>
                    <Input className='textfield1' placeholder="password" type='password'/>
                    <Input className='textfield1' placeholder="Comfirm Password" type='password'/>

                      </div>
                      <div className='formform'>
                      <Button href='/home' type='submit' className='textfield2' variant="contained">Register</Button>
                    </div>
                    </form>
                    </div>
                   

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Regiter