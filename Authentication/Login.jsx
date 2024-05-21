import React from 'react';
import Logo from '../Assets/drive dash logo.jpg';
import {FaFacebookF,FaGoogle,FaTwitter} from 'react-icons/fa';
import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Login(){
    const [loginData, setLoginData] = useState({
        lemail: '',
        lpassword:'',
        lcheckbox:''
    });
    
    const nav=useNavigate();

    const loginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    
    const loginSubmit = (e) => {
        e.preventDefault();
        
        if (loginForm()) {
            // You can submit the form or perform other actions here
        }
    };

    const loginForm = () => {
         if (loginData.lemail === "") {
            alert("Enter Your Valid Mail ID")
        }
        else if(loginData.lpassword=== null || loginData.lpassword===''){
            alert('Enter a Password')
        }
        else if(loginData.lpassword.length <= 8){
            alert('A Password Atleast Must Be In 8 Digits')
        }
        else if(loginData.lcheckbox===null || loginData.lcheckbox===''){
            alert('Valid The Checkbox')
        }
        else{
            nav('/thank');
        }
    }

      
    return(
    
    <>    
        <div className='CommonBG'>
            <h1 className='CommonBG__title'>login</h1>
            <h4> 
                <a href="/">home</a> 
                // 
                <span>login</span> 
            </h4>        
        </div>    



           <div className='container AuthenticationL__one'>
                <div className='row' style={{margin:"0"}}>
                    <div className='col-lg-3 col-md-3'></div>
                    <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 AuthenticationL__two'>
                        <div style={{textAlign:"center",marginBottom:"50px",textTransform:"capitalize"}}>
                        <img src={Logo} alt='Brand logo' style={{width:"200px",display:"inline"}}  className='img-responsive'/>
                        <h3>login with your driveDash account</h3>
                        </div>
                        <form onSubmit={loginSubmit}>
                            <div className='form-group AuthenticationL__three'>
                              
                              <div>
                              <label for='email'>email address</label>
                              <input type='email' className='form-control' name='lemail' value={loginData.lemail} onChange={loginChange} id='email' placeholder='Your Email'/>
                              </div>

                              <div>                              
                              <label for='password'>password</label>
                              <input type='password' className='form-control' name='lpassword' value={loginData.lpassword} onChange={loginChange} id='password' placeholder='Your Password'/>
                              </div>
                              
                              <div>
                              <input type='checkbox' name='lcheckbox' checked={loginData.lcheckbox} onChange={loginChange}/> remember me <Link to='/forgot password'>forgot password?</Link>  
                              </div>
                        
                              <div className='AuthenticationL__button'>
                              <button type='submit' className='btn'>Login</button>
                              </div>
                            </div>
                        </form>   
                        <div className='AuthenticationL__four'>
                            <p>don't have an account? <Link to='/register'>Register.</Link> </p>
                            <hr/>
                            <p>continue with social media</p>
                        </div>

                        <div className='AuthenticationL__five'>
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
export default Login;