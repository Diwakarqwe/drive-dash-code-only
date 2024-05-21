import React from "react";
import Contact_img01 from '../Assets/jpg/contact_img01.jpg';
import { FaRegPaperPlane } from "react-icons/fa";


function Contact(){
    return(
        <>
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>contact us</h1>
                <h4> 
                    <a href="/">home</a> 
                        // 
                    <span>contact us</span> 
                </h4>        
            </div>    
            
            <br/>
            <br/>
            <div className="contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xs-12">
                            <div className="contact_address">
                                <span className="glyphicon glyphicon-map-marker contact_info"></span>
                                <h5 className="contact_address1">office address</h5>
                                <p className="contact_address2">25/B shenoy Nagar, Chennai</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <div className="contact_address">
                                <span className="glyphicon glyphicon-earphone contact_info"></span>
                                <h5 className="contact_address1">call us</h5>
                                <p className="contact_address2">+2 123 4565 789</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <div className="contact_address">
                                <span className="glyphicon glyphicon-envelope contact_info"></span>
                                <h5 className="contact_address1">email us</h5>
                                <p className="contact_address3">info@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <div className="contact_address">
                                <span className="glyphicon glyphicon-time contact_info"></span>
                                <h5 className="contact_address1">open time</h5>
                                <p className="contact_address2">mon-sat(10.00AM - 05.30PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container">
                <div className="contact_form">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="contact_form_img">
                                <img src={Contact_img01} className="img-responsive contact_form_img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="contact_form1">
                                <h2 className="contact_form_heading">get in touch</h2>
                                <p className="contact_form_para">It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.</p> <br/>
                                <form className="form-horizontal contact__form">
                                    <div className="row">
                                        <div className="col-lg-6 col-xs-12">
                                            <input type="text" className="form-control" name="name" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    
                                    <input type="text" className="form-control" name="subject" placeholder="Your Subject"/>
                                    <br/>
                                    <textarea name="message" cols="50" rows="6" className="form-control" placeholder="Write Your Message"/>
                                    <br/>
                                    <div className="col-lg-6 col-xs-12" style={{padding:"0"}}>
                                    <button type="submit" className="btn contact_btn">send message<FaRegPaperPlane/> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="contact_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3229891301494!2d80.22255957454819!3d13.078704912522157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668240a430c9%3A0x2ac61aa54835da4d!2sShenoy%20Nagar%20Metro!5e0!3m2!1sen!2sin!4v1716274224978!5m2!1sen!2sin"  width="800" height="600" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="contact_map1"></iframe>
            </div>
            <br/>
        </>
    )
}

export default Contact;