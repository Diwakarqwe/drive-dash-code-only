import React from 'react';
import User from '../Assets/MyAccount/Profile 1.jpg';
import Logo from '../Assets/MyAccount/logo.jpg';
import CarImg from '../Assets/MyAccount/banner.jpg';
import {MdOutlineCameraAlt} from 'react-icons/md';
import {AiOutlineDashboard} from 'react-icons/ai';
import { LuHardDriveUpload } from 'react-icons/lu';
import {FaRegUser} from 'react-icons/fa';
import{CiBoxList} from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { FaRegSave } from 'react-icons/fa';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Profile(){
          
    const [formData, setFormData] = useState({
        name:'',
        lastname:'',
        number: '',
        mail: '',
        address: ''
    });

    const nav=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // You can submit the form or perform other actions here
        }
    };

    const validateForm = () => {
        if (formData.name === "" || formData.name === null) {
            alert("Name Cannot Be Blank")
        }
        else if(formData.lastname.length < 1){
            alert('Enter the Last Name')
        } 
        else if (formData.mail === "") {
            alert("Enter Your Valid Mail ID")
        }
        else if (formData.number.length <= 9) {
            alert("Number Must Be At Least 9 Characters Long");
        }
        else if (formData.address === "") {
            alert("Enter the Address")
        }
        else{
            //alert(formData.name  + " Your Change Has Been Saved Successfully")
            nav('/thank')
        }
    }


    const [passwordValidate, setPasswordValidate]=useState({
           opassword:'', 
           npassword:'',
           rtpassword:''
    });

    const passwordChange = (e) => {
        const { name, value } = e.target;
        setPasswordValidate({ ...passwordValidate, [name]: value });
    };

    

    const passwordSubmit = (e) => {
        e.preventDefault();
        
        if (passwordForm()) {
            // You can submit the form or perform other actions here
        }
    };

    

    const passwordForm=()=>{
        if(passwordValidate.opassword===null || passwordValidate.opassword==='') {
            alert('Enter a Old Password')
        }
        else if(passwordValidate.npassword===null || passwordValidate.npassword===''){
            alert('Enter a New Password')
        }
        else if (passwordValidate.npassword.length < 8){
            alert('New Password Atleast In 8 Digits')
        }
        else if(passwordValidate.opassword===passwordValidate.npassword){
            alert('New Password And Old Password Not Be In Same')
        }
        else if(passwordValidate.rtpassword===null || passwordValidate.rtpassword===''){
            alert('Enter The Valid Re-Type Password')
        }    
        else if(passwordValidate.rtpassword.length < 8 || passwordValidate.npassword!==passwordValidate.rtpassword){
            alert('Re-Type Password And New Password Must Be Both are In Same')
        }
        else 
            nav('/thank')

        }
    

        
     return(

        <>

            <div className='CommonBG'>
                <h1 className='CommonBG__title'>myprofile</h1>
                <h4> 
                    <a href="/">home</a> 
                    // 
                    <span>myprofile</span> 
                </h4>        
            </div>    

            <div className='container Profile__one' style={{padding:"0"}}>
                <div className='row' style={{margin:"0"}}>
                    <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{marginBottom:"20px"}}>
                        <div className='Profile__inner1'>
                        <div className='Profile__head'> 
                            <img src={User} alt='User' className='image-responsive img-circle'/>
                            <button type='button'><MdOutlineCameraAlt/> </button>
                            <h4>robert williamson</h4>
                            <h5 style={{textTransform:"none",color:"gray"}}>robert@example.com</h5>
                            <hr/>
                        </div>

                        <div className='Profile__two'>
                            <a href='#'> <span><AiOutlineDashboard/></span> dashboard</a>
                            <a href='#'> <span><FaRegUser/></span> my profile</a>
                            <a href='#'> <span><CiBoxList/></span> my listing</a>
                            <a href='#'> <span><IoBagAddOutline/></span> add listing</a>
                            <a href='#'> <span><MdFavoriteBorder/></span> my favorites</a>
                            <a href='#'> <span><FaRegEnvelope/></span> messages <span style={{padding:"0 8px 2px 8px",borderRadius:"5px"}}>02</span> </a>
                            <a href='#'> <span><IoSettingsOutline/></span> settings</a>
                            <a href='#'> <span><IoIosLogOut/></span> logout</a>
                        </div>
                    </div>
                    </div>

                    <div style={{padding:"0 15px"}}>                    
                    <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 Profile__inner2' style={{marginBottom:"20px"}}>
                        <div>   
                        <h3>profile info</h3>
                        <hr/>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className='form-group Profile__three'>
                               <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                   <label for='pname'>first name</label>
                                   <input type='text' className='form-control' id='pname' name='name' placeholder='First Name'value={formData.name} onChange={handleChange}/>
                                   
                               </div>
                               <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                   <label for='plast'>last name</label>
                                   <input type='text' className='form-control' name='lastname' value={formData.lastname} onChange={handleChange} id='plast' placeholder='Last Name'/>
                                   
                               </div>
                               
                               <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                   <label for='pemail'>email</label>
                                   <input type='email' className='form-control' id='pemail' name='mail' placeholder='Email'value={formData.mail} onChange={handleChange}/>
                                   
                               </div>
                               <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                   <label for='pnumber'>phone number</label>
                                   <input type='number' className='form-control' id='pnumber' name='number' placeholder='Phone Number'value={formData.number} onChange={handleChange}/>
                                   
                               </div>
                               
                               <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                               <label for='paddress'>address</label>
                               <input type='text' className='form-control' id='paddress' name='address' placeholder='Address'value={formData.address} onChange={handleChange}/>
                               
                               </div>

                               <div className='col-lg-5 col-md-5 col-sm-8 col-xs-8 Profile__button1'>
                                    <button type='submit'  className='btn'> <FaRegUser/> Save Changes </button>
                               </div>
                               <div className='col-lg-7 col-md-7 col-sm-4 col-xs-4'></div>
                            </div>
                        </form>
                    </div>  
                    </div>

                    
                
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12' style={{marginBottom:"20px"}}>
                    <div className='Profile__inner3'>    
                        <div>   
                        <h3>change password</h3>
                        <hr/>
                        </div>
                        <form onSubmit={passwordSubmit}>
                            <div className='form-group Profile__four'>
            
                                   <div>
                                   <label for='popassword'>old password</label>
                                   <input type='password' className='form-control' name='opassword' value={passwordValidate.opassword} onChange={passwordChange} id='popassword'  placeholder='Old Password'/>
                                   </div>
                               
                                   <div>
                                   <label for='pnpassword'>new password</label>
                                   <input type='password' className='form-control' name='npassword' value={passwordValidate.npassword} onChange={passwordChange} id='pnpassword' placeholder='New Password'/>
                                   </div>
                             
                                   <div>
                                   <label for='ptpassword'>re-type password</label>
                                   <input type='password' className='form-control' name='rtpassword' value={passwordValidate.rtpassword} onChange={passwordChange}  id='ptpassword'  placeholder='Re-Type Password'/>
                                   </div>

                               <div className='col-lg-8 col-md-8 col-sm-10 col-xs-10 Profile__button2' style={{padding:"0"}}>
                                    <button type='submit' className='btn'> <FaRegUser/> Change Password </button>
                               </div>
                               <div className='col-lg-4 col-md-4 col-sm-2 col-xs-2'></div>
                            </div>
                        </form> 
                    </div> 
                    </div> 

                    <div className='col-lg-3 col-md-3'></div>

                    <div style={{padding:"0 20px"}}>
                    <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12 Profile__five'>
                        <div>
                            <h3>store info</h3>
                            <hr/>
                        </div>

                        <div className='row' style={{margin:"0"}}>
                        <div className='col-lg-3 col-md-3 col-sm-7 col-xs-7 Profile__six' style={{paddingLeft:"0"}}>
                            <img src={Logo} alt='brand-logo' className='img-responsive img-circle'/>
                            <button type='file' className='btn'> <span><LuHardDriveUpload/> </span> Upload Logo</button>
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-5 col-xs-5'></div>
                        </div>

                        <img src={CarImg} alt='car-icon' className='img-responsive' style={{borderRadius:"15px", marginBottom:"20px"}}/>
                        
                        <div className='row' style={{margin:"0"}}>
                        <div className='col-lg-3 col-md-3 col-sm-7 col-xs-7 Profile__seven' style={{paddingLeft:"0"}}>
                            <button type='button' className='btn'> <span> <LuHardDriveUpload/> </span> Upload Banner</button>
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-5 col-xs-5'></div>
                        </div>

                        <form>
                            <div className='form-group Profile__eight'>
                                <div>
                                    <label for='pstore'>store name</label>
                                    <input type='text' id='pstore' placeholder='Store Name' className='form-control'/>
                                </div>
                                <div>
                                    <label for='pcontact'>contact number</label>
                                    <input type='number' id='pcontact' placeholder='Contact Number' className='form-control'/>
                                </div>
                                <div>
                                    <label for='pcmail'>contact email</label>
                                    <input type='mail' id='pcmail' placeholder='Contact Email' className='form-control'/>
                                </div>

                                <div className='col-lg-3 col-md-3 col-sm-7 col-xs-7 Profile__button3' style={{paddingLeft:"0"}}>
                                    <button type='submit' className='btn'> <span> <FaRegSave/> </span> Save Changes </button>    
                                </div>  
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>    
     );
}
export default Profile;