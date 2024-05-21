import React from "react";
import Logo from '../Assets/drive dash logo.jpg';
import { FaRegPaperPlane } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { RiGlobalLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { useState } from "react";


const Footer = ()=>{
    const[subscribeEmail, setSubscribeEmail]=useState({
        semail:''
      });

    const subscribeChange = (e) =>{
        const {name,value}=e.target;
        setSubscribeEmail({ ...subscribeEmail, [name]: value });
      }
  
    const subscribeSubmit =(e) =>{
        e.preventDefault();
  
        if(subscribeForm()){
  
        }
      };
  
    const subscribeForm=()=>{
        if(subscribeEmail.semail===''|| subscribeEmail.semail===null){
          alert('Enter Your Mail ID To Subscribe')
        }
        else{
          alert(subscribeEmail.semail + ' You Have Successfully Subscribed')
        }
    }
    
    
    return(
        <>
  
            <div className="footer_style">
                <div className="container">
                    <div className="row" style={{marginTop:"8%"}}>
                        <div className="col-lg-4 col-xs-12">
                            <img src={Logo} alt="motex" className="img-responsive"/><br/><br/>
                            <p className="footer_para">We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p><br/>
                            <p className="footer_dial"><span className="glyphicon glyphicon-earphone footer_gly_style"></span> +91 6324553310</p>
                            <p className="footer_address"><span className="glyphicon glyphicon-map-marker footer_gly_style"></span> 25/B Shenoy Nagar, Chennai </p>
                            <p className="footer_mail"><span className="glyphicon glyphicon-envelope footer_gly_style"></span> info@example.com</p>
                        </div>

                        <div className="col-lg-3 col-xs-12">
                            <h4 className="footer_heading1">quick links</h4>
                            <hr className="footer_hr_color"/>
                            <ul className="nastyle">
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> about us</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> updated news</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> testimonisls</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> terms of services</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> privacy policy</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> our dealers</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-xs-12">
                            <h4 className="footer_heading1">support center</h4>
                            <hr className="footer_hr_color"/>
                            <ul className="nastyle">
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> FAQ's</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> affiliates</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> booking tips</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> sell vechicles</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> contact us</a></li><br/>
                                <li> <a href="#" className="footer_color"><span className="glyphicon glyphicon-triangle-right footer_gly_color"></span> sitmap</a></li>
                            </ul>
                        </div>
        
                        <div className="col-lg-3 col-xs-12">
                            <div className="footer__contactus">
                                <h4 className="footer_heading1">news letter</h4>
                                <hr className="footer_hr_color"/>
                                <p className="footer_news-content">Subscribe Our Newsletter To Get Latest Update And News</p>
                                <form onSubmit={subscribeSubmit}>
                                    <input type="email" name='semail' onChange={subscribeChange} value={subscribeEmail.semail} className="form-control footer_mailbox" placeholder="Your Email"/><br/>
                                    <button type="submit"  className="btn footer_btn">subscribe now  <FaRegPaperPlane/> </button>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>   


                <div className='row footer__symbol' style={{margin:"0"}}>    
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 footer__symbolC1'> 
                        <div className='col-lg-4 col-md-4'></div>
                        <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12' style={{padding:"0"}}>                        
                            <span className='glyphicon glyphicon-copyright-mark'></span>
                            <h5> copyright 2024 <span style={{color:"#EF1D26"}}> DRIVE DASH </span>all right reserved.</h5>
                        </div>    
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer__symbolC2"> 
                        <div className="col-lg-4 col-md-4"></div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">                                        
                                <a href='#'> <span> <FaFacebookF/> </span> </a>
                                <a href='#'> <span> <FaTwitter/> </span> </a>
                                <a href='#'> <span> <RiGlobalLine/> </span> </a>
                                <a href='#'> <span> <FaWhatsapp/> </span> </a>
                                <a href='#'> <span> <FaYoutube/> </span> </a>
                            </div>
                        </div>       
                    </div>
                </div>
     
            </>
       );
}
export default Footer;