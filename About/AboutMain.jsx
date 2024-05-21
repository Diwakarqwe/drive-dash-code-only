import React from 'react';
import About2 from '../Assets/About/about us 2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import {Autoplay , Pagination } from 'swiper/modules';

import swiper1 from '../Assets/About/AboutSwiper/01.jpg';
import swiper2 from '../Assets/About/AboutSwiper/02.jpg';
import swiper3 from '../Assets/About/AboutSwiper/03.jpg';
import swiper4 from '../Assets/About/AboutSwiper/04.jpg';
import swiper5 from '../Assets/About/AboutSwiper/05.jpg';
import About3 from '../Assets/About/about us 3.jpg';
import About4 from '../Assets/About/about us 4.jpg';
import About5 from '../Assets/About/about us 5.jpg';
import About6 from '../Assets/About/about us 6.jpg';
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import{FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import About7 from '../Assets/About/about us 7.png';
import About8 from '../Assets/About/about us 8.png';
import About9 from '../Assets/About/about us 9.png';
import About10 from '../Assets/About/about us 10.png';
import About11 from '../Assets/About/about us 11.png';
import About12 from '../Assets/About/about us 12.png';
import { useState } from 'react';

function AboutMain(){
    
       return(
            <>
              
                <div className='CommonBG'>
                    <h1 className='CommonBG__title'>about us</h1>
                    <h4> 
                        <a href="/">home</a> 
                        // 
                        <span>about us</span> 
                    </h4>        
                </div>  


                <div className=' container About__two'>
                    <div className='row' style={{margin:"0"}}>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{paddingRight:"60px"}}>
                            <img src={About2} alt='imagea' className='img-responsive'/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 About__twoC'>
                            <h4>ABOUT US</h4>
                            <h1>world largest <span>car dealer</span> marketplace.</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the</p> 
                            <p style={{marginBottom:"30px"}}>majority have suffered alteration in some form, by injected humour.</p>

                            <h5> <span className='glyphicon glyphicon-ok-circle'></span> Lorem ipsum dolor sit amet, consectetur adipisicing.</h5>
                            <h5> <span className='glyphicon glyphicon-ok-circle'></span> consectetur adipisicing elit. Esse, ducimus. Lorem, ipsum.</h5> 
                            <h5> <span className='glyphicon glyphicon-ok-circle'></span> Consequuntur, eius sint illum accusamus.</h5> 
                            <br/>
                            <a type='button' href='/' className='btn'> <h4>discover more</h4> </a> 
                        </div>
                    </div>  
                </div>

                    <div  style={{backgroundColor:"whitesmoke"}}>
                        <div className='container About__three'>
                            <div className='About__threeH'>
                                <h4>testimonials</h4>
                                <h1>what our clients <span>say's</span></h1>
                                <div className='About__threeL'></div>  
                            </div>

             
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                direction='horizontal'
                                loop='true'
                        
                                autoplay={{
                                    delay:2000,
                                    disableOnInteraction:false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay,Pagination]}
                                breakpoints={{
                                    992:{
                                        slidesPerView:4,
                                        spaceBetween:30,
                                    }
                                }}
                            >

      
                            <SwiperSlide> 
                                <img src={swiper1} alt='swiperf' className='img-responsive img-circle'/>
                                <div className='About__swiper1'>
                                    <h3>sylvia h green</h3>
                                    <h5>customer</h5>
                                    <p>There are many variations of passages available but the majority have suffered to the alteration in some injected.</p>
                                    <span className='glyphicon glyphicon-star'></span> 
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>  
                                </div>
                            </SwiperSlide>

                            <SwiperSlide> 
                                <img src={swiper2} alt='swipers' className='img-responsive img-circle'/> 
                                <div className='About__swiper1'>
                                    <h3>gordo novak</h3>
                                    <h5>customer</h5>
                                    <p>There are many variations of passages available but the majority have suffered to the alteration in some injected.</p>
                                    <span className='glyphicon glyphicon-star'></span> 
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span> 
                                </div>
                            </SwiperSlide>

                            <SwiperSlide> 
                                <img src={swiper3} alt='swipert' className='img-responsive img-circle'/> 
                                <div className='About__swiper1'>
                                    <h3>reid e butt</h3>
                                    <h5>customer</h5>
                                    <p>There are many variations of passages available but the majority have suffered to the alteration in some injected.</p>
                                    <span className='glyphicon glyphicon-star'></span> 
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>  
                                </div>
                            </SwiperSlide>

                            <SwiperSlide> 
                                <img src={swiper4} alt='swiperf' className='img-responsive img-circle'/> 
                                <div className='About__swiper1'>
                                    <h3>parker jimenez</h3>
                                    <h5>customer</h5>
                                    <p>There are many variations of passages available but the majority have suffered to the alteration in some injected.</p>
                                    <span className='glyphicon glyphicon-star'></span> 
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>  
                                </div>
                            </SwiperSlide>

                            <SwiperSlide> 
                                <img src={swiper5} alt='swiperf' className='img-responsive img-circle'/> 
                                <div className='About__swiper1'>
                                    <h3>heruli nez</h3>
                                    <h5>customer</h5>
                                    <p>There are many variations of passages available but the majority have suffered to the alteration in some injected.</p>
                                    <span className='glyphicon glyphicon-star'></span> 
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>
                                    <span className='glyphicon glyphicon-star'></span>  
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>  


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
                                    <a href='/'><FaFacebook/></a>
                                    <a href='/'><FaLinkedinIn/></a>
                                    <a href='/'><FaTwitter/></a>
                                    <a href='/'><FaYoutube/></a>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                                <img src={About4} className='img-responsive' alt='image4'/>
                                <h3>tony pinto</h3>
                                <h4>technician</h4>
                                <div className='About__fourD'>
                                    <a href='/'><FaFacebook/></a>
                                    <a href='/'><FaLinkedinIn/></a>
                                    <a href='/'><FaTwitter/></a>
                                    <a href='/'><FaYoutube/></a>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                                <img src={About5} className='img-responsive' alt='image5'/>
                                <h3>chad smith</h3>
                                <h4>HR manager</h4>
                                <div className='About__fourD'>
                                    <a href='/'><FaFacebook/></a>
                                    <a href='/'><FaLinkedinIn/></a>
                                    <a href='/'><FaTwitter/></a>
                                    <a href='/'><FaYoutube/></a>
                                </div>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                                <img src={About6} className='img-responsive' alt='image6'/>
                                <h3>malissa fie</h3>
                                <h4>mechanical engineer</h4>
                                <div className='About__fourD'>
                                    <a href='/'><FaFacebook/></a>
                                    <a href='/'><FaLinkedinIn/></a>
                                    <a href='/'><FaTwitter/></a>
                                    <a href='/'><FaYoutube/></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='container About__five'>
                        <div className='About__fiveH'>
                            <h4>popular brands</h4>
                            <h1>our top quality <span>brands</span></h1>
                            <div className='About__fiveL'></div>
                        </div>

                        <div className='row About__fiveC' style={{margin:"0"}}>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About7} alt='' className='img-responsive'/>
                                    <h4>hyundai</h4>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About8} alt='' className='img-responsive'/>
                                    <h4>toyota</h4>
                                </div> 
                            </div>

                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About9} alt='' className='img-responsive'/>
                                    <h4>BMW</h4>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About10} alt='' className='img-responsive'/>
                                    <h4>mercedes benz</h4>
                                </div>    
                            </div>
                
                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About11} alt='' className='img-responsive'/>
                                    <h4>ferrari</h4>
                                </div>    
                            </div>

                            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 About__fiveCInside'>
                                    <img src={About12} alt='' className='img-responsive'/>
                                    <h4>nissan</h4>
                                </div>    
                            </div>
                        </div>
                    </div>  

            </>                            
     );
}

export default AboutMain;