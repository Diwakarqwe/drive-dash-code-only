import React from 'react';
import { useState } from 'react';
import  Logo from '../Assets/drive dash logo.jpg';
import { useNavigate } from 'react-router-dom';

function Forgot(){
    const [forgotData, setForgotData] = useState({
        femail: ''
    });
    const nav=useNavigate();
  
var val=forgotData.femail;
console.log(val)
    const forgotChange = (e) => {
        const { name, value } = e.target;
        setForgotData({ ...forgotData, [name]: value });
    };

    
    const forgotSubmit = (e) => {
        e.preventDefault();
        
        if (forgotForm()) {
            // You can submit the form or perform other actions here
        }
    };

    const forgotForm = () => {
         if (forgotData.femail === "" || forgotData.femail===null){
            alert("Enter Your Valid Mail ID")
        }
        else{
            //alert('Reset Link Has Been Send To Your Registered Email ID')
            nav('/thank');
        }
    }
    return(

        <>
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>forgot password</h1>
                <h4> 
                    <a href="/">home</a> 
                    // 
                    <span>forgot password</span> 
                </h4>        
            </div>    

            
            <div className='container AuthenticationF__one'>
                <div className='row' style={{margin:"0"}}>
                    <div className='col-lg-3 col-md-3'></div>
                    <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 AuthenticationF__two'>
                        <div style={{textAlign:"center",marginBottom:"50px",textTransform:"capitalize"}}>
                        <img src={Logo} alt='Brand logo' style={{width:"200px",display:"inline"}}  className='img-responsive'/>
                        <h3>reset your driveDash account password</h3>
                        </div>
                        <form onSubmit={forgotSubmit}>
                            <div className='form-group AuthenticationF__three'>
                              
                              <div>
                              <label for='memail'>email address</label>
                              <input type='email' className='form-control' id='memail' name='femail' value={forgotData.femail} onChange={forgotChange} placeholder='Your Email'/>
                              </div>

                              <div className='AuthenticationF__button'>
                              <button type='submit' className='btn'>Send Reset Link</button>
                              </div>
                            </div>
                        </form>   
                    </div>
                    <div className='col-lg-4 col-md-4'></div>
                </div>
            </div>
        </>    
    );
}
export default Forgot;