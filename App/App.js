import React from "react";
import './App.css';
import Blog from '../Components/Blog/Blog.jsx';
import BlogSingle from '../Components/Blog/BlogSingle.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import AboutMain from '../Components/About/AboutMain.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Dashboard from '../Components/MyAccount/DashBoard.jsx';
import MyProfile from '../Components/MyAccount/Myprofile.jsx';
import MyListing from '../Components/MyAccount/MyListing.jsx';
import AddListing from '../Components/MyAccount/AddListing.jsx';
import Login from '../Components/Authentication/Login.jsx';
import Register from '../Components/Authentication/Register.jsx';
import Forgot from '../Components/Authentication/ForgotPassword.jsx';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Service from '../Components/Services/ServiceTwo.jsx';
import HomeMain from '../Components/Home/HomeMain.jsx';
import Shop from '../Components/Shop/Shop.jsx';
import ShopCheckout from '../Components/ShopCheckout/ShopCheckout.jsx';
import Contact from '../Components/Contact/Contact.jsx';
import Inventory from '../Components/Inventory/InventoryNew.jsx';
import ThankYou from '../Components/ThankYou.jsx';
import { useLocation } from "react-router-dom";

function Services(){
      const val = useLocation();
      console.log(val)
      return(
            <>
            <Navbar/>
            
            <Routes>
            <Route exact path='/about' element={<AboutMain/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
                   <Route exact path='/' element={<HomeMain/>}></Route>
                   <Route exact path='/inventory' element={<Inventory/>}></Route> 
                  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                  <Route exact path='/my profile' element={<MyProfile/>}></Route>
                  <Route exact path='/my listing' element={<MyListing/>}></Route>
                  <Route exact path='/add listing' element={<AddListing/>}></Route>
                  <Route exact path='/login' element={<Login/>}></Route>
                  <Route exact path='/register' element={<Register/>}></Route>
                  <Route exact path='/forgot password' element={<Forgot/>}></Route>
                  <Route exact path='/services' element={<Service/>}></Route>
                  <Route exact path='/shop' element={<Shop/>}></Route>
                  <Route exact path='/shop checkout' element={<ShopCheckout/>}></Route>
                  <Route exact path='/blog' element={<Blog/>}></Route>
                  <Route exact path='/blog single' element={<BlogSingle/>}></Route>
                  <Route exact path='/thank' element={<ThankYou/>}></Route>
            </Routes>
           
            <Footer/>


            </>

      );
}
export default Services;






            
                          
            
            {/*<About/>*/}
            {/*<Dashboard/>*/}
              {/* <Login/> */}
              {/*<Profile/>*/}
              {/*<Service/>*/}
              {/*<AddListing/>*/}
              {/*<AboutThree/>*/}
              {/*<Register/>*/}
              {/*<Login/>*/}
              {/*<Forgot/>*/}
            
              {/*<HomeMain/>
            <Inventory/>
            <Shop/>
            <ShopCheckout/>
            <Contact/>*/}
            
