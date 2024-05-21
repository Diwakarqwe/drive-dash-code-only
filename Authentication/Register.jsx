import React from 'react';
import Logo from '../Assets/drive dash logo.jpg';
import {FaFacebookF,FaGoogle,FaTwitter} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Register(){
    const [registerData, setRegisterData] = useState({
        rname:'',
        remail: '',
        rpassword:'',
        rcheckbox:''
    });

    const nav=useNavigate();
    

    const registerChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    
    const registerSubmit = (e) => {
        e.preventDefault();
        
        if (registerForm()) {
            // You can submit the form or perform other actions here
        }
    };

    const registerForm = () => {
        if (registerData.rname=== "" || registerData.rname === null) {
            alert("Name Cannot Be Blank")
        }
        else if (registerData.remail === "") {
            alert("Enter Your Valid Mail ID")
        }
        else if(registerData.rpassword=== null || registerData.rpassword===''){
            alert('Enter a Password')
        }
        else if(registerData.rpassword.length <= 8){
            alert('A Password Atleast Must Be In 8 Digits')
        }
        else if(registerData.rcheckbox===null || registerData.rcheckbox===''){
            alert('Valid The Checkbox')
        }
        else{
            nav("/thank")
        }
    }

      
    return(
        
        <>   
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>register</h1>
                <h4> 
                    <a href="/">home</a> 
                    // 
                    <span>register</span> 
                </h4>        
            </div>    

        

           <div className='container AuthenticationR__one'>
                <div className='row' style={{margin:"0"}}>
                    <div className='col-lg-3 col-md-3'></div>
                    <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 AuthenticationR__two'>
                        <div style={{textAlign:"center",marginBottom:"50px",textTransform:"capitalize"}}>
                        <img src={Logo} alt='Brand logo' style={{width:"200px",display:"inline"}}  className='img-responsive'/>
                        <h3>create your driveDash account</h3>
                        </div>
                        <form name='thankname' onSubmit={registerSubmit}>
                            <div className='form-group AuthenticationR__three'>
                              <div>  
                              <label for='name'>full name</label>
                              <input type='text' className='form-control' id='name' name='rname' value={registerData.rname} onChange={registerChange} placeholder='Your Name'/>
                              </div>

                              <div>
                              <label for='email'>email address</label>
                              <input type='email' className='form-control' id='email' name='remail' value={registerData.remail} onChange={registerChange} placeholder='Your Email'/>
                              </div>

                              <div>                              
                              <label for='password'>password</label>
                              <input type='password' className='form-control' id='password' name='rpassword' value={registerData.rpassword} onChange={registerChange} placeholder='Your Password'/>
                              </div>
                              
                              <div>
                              <input type='checkbox' name='rcheckbox' checked={registerData.rcheckbox} onChange={registerChange}/> i agree with the <span>terms of service.</span> 
                              </div>
                        
                              <div className='AuthenticationR__button'>
                              <button type='submit' className='btn'>Register</button>
                              </div>
                            </div>
                        </form>   
                        <div className='AuthenticationR__four'>
                            <p>already have an account? <Link to='/login'>Login.</Link> </p>
                            <hr/>
                            <p>continue with social media</p>
                        </div>

                        <div className='AuthenticationR__five'>
                        <a href='#'><FaFacebookF/> </a>
                        <a href='#'><FaGoogle/> </a>
                        <a href='#'><FaTwitter/> </a>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4'></div>
        
                </div>
            </div>
        </>        
    );
}
export default Register;