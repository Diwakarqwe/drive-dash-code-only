import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {Autoplay , Pagination } from 'swiper/modules';

import swiper1 from '../Assets/About/AboutSwiper/01.jpg';
import swiper2 from '../Assets/About/AboutSwiper/02.jpg';
import swiper3 from '../Assets/About/AboutSwiper/03.jpg';
import swiper4 from '../Assets/About/AboutSwiper/04.jpg';
import swiper5 from '../Assets/About/AboutSwiper/05.jpg';



 function AboutThree() {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
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
  );
}

export default AboutThree;
