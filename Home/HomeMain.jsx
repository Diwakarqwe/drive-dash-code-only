import React from 'react';
import BannerH from '../Home/Banner.jsx';
import CarFormH from '../Home/CarForm.jsx';
import AboutTwo from '../Home/AboutUs.jsx';
import CarBodyH from './CarBody.jsx';
import CarDealerH from './CarDealer.jsx';
import CarsHRedux from './ReduxHome/Cars.jsx';
import QualityServiceH from './QualityService.jsx';
import Brands from './Brands.jsx';
import AboutSwiper from '../About/AboutThree.jsx';
import OurBlog from './OurBlog.jsx';

const HomeMain=()=>{
    return(
        <>
          <BannerH/>
          <CarFormH/>
          <AboutTwo/>
          <CarsHRedux/>
          <CarBodyH/>
          <CarDealerH/>
          <QualityServiceH/>
          <Brands/>
          <AboutSwiper/>
          <OurBlog/>
        </>
    );    
}

export default HomeMain;