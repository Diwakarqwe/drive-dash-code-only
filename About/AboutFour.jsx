import React from 'react';
import About3 from '../Assets/About/about us 3.jpg';
import About4 from '../Assets/About/about us 4.jpg';
import About5 from '../Assets/About/about us 5.jpg';
import About6 from '../Assets/About/about us 6.jpg';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import{FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

function AboutFour(){
    return(
        <div className='container About__four'>
            <div className='About__fourH'>
                <h4 style={{textTransform:"uppercase"}}>team</h4>
                <h1>meet with our <span>team</span> </h1>
                <div className='About__fourL'></div>
            </div>
            <div className='row About__fourC' style={{margin:"0"}}>  
                <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img src={About3} className='img-responsive' alt='image3'/>
                    <h3>arron rodri</h3>
                    <h4>CEO & founder</h4>
                    <div className='About__fourD'>
                        <a href='#'><FaFacebook/></a>
                        <a href='#'><FaLinkedinIn/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaYoutube/></a>
                    </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img src={About4} className='img-responsive' alt='image4'/>
                    <h3>tony pinto</h3>
                    <h4>technician</h4>
                    <div className='About__fourD'>
                        <a href='#'><FaFacebook/></a>
                        <a href='#'><FaLinkedinIn/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaYoutube/></a>
                    </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img src={About5} className='img-responsive' alt='image5'/>
                    <h3>chad smith</h3>
                    <h4>HR manager</h4>
                    <div className='About__fourD'>
                        <a href='#'><FaFacebook/></a>
                        <a href='#'><FaLinkedinIn/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaYoutube/></a>
                    </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img src={About6} className='img-responsive' alt='image6'/>
                    <h3>malissa fie</h3>
                    <h4>mechanical engineer</h4>
                    <div className='About__fourD'>
                        <a href='#'><FaFacebook/></a>
                        <a href='#'><FaLinkedinIn/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaYoutube/></a>
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default AboutFour;