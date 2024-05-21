import React from 'react';
import User from '../Assets/MyAccount/Profile 1.jpg'
import {MdOutlineCameraAlt} from 'react-icons/md';
import {AiOutlineDashboard} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import{CiBoxList} from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';


function AddListing(){
    return(

    <>
        <div className='CommonBG'>
            <h1 className='CommonBG__title'>addlisting</h1>
            <h4> 
                <a href="/">home</a> 
                // 
                <span>addlisting</span> 
            </h4>        
        </div>    

        <div className='container AddListing__one' style={{padding:"0"}}>
        <div className='row' style={{margin:"0"}}>
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{marginBottom:"20px"}}>
                <div className='AddListing__inner1'>
                <div className='AddListing__head'> 
                    <img src={User} alt='User' className='image-responsive img-circle'/>
                    <button type='button'><MdOutlineCameraAlt/> </button>
                    <h4>robert williamson</h4>
                    <h5 style={{textTransform:"none",color:"gray"}}>robert@example.com</h5>
                    <hr/>
                </div>

                <div className='AddListing__two'>
                    <a href='/'> <span><AiOutlineDashboard/></span> dashboard</a>
                    <a href='/'> <span><FaRegUser/></span> my profile</a>
                    <a href='/'> <span><CiBoxList/></span> my listing</a>
                    <a href='/'> <span><IoBagAddOutline/></span> add listing</a>
                    <a href='/'> <span><MdFavoriteBorder/></span> my favorites</a>
                    <a href='/'> <span><FaRegEnvelope/></span> messages <span style={{padding:"0 8px 2px 8px",borderRadius:"5px"}}>02</span> </a>
                    <a href='/'> <span><IoSettingsOutline/></span> settings</a>
                    <a href='/'> <span><IoIosLogOut/></span> logout</a>
                </div> 
                </div>   
            </div>

            <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
                <div className='AddListing__inner2'>
                    <h3>add new listing</h3>
                    <hr/>
                    <form>
                        <div className='form-group AddListing__three'>
                            <h4 style={{marginBottom:"20px"}}>basic information</h4>

                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <label>listing title</label>
                            <input type='text' id='flisting' className='form-control' placeholder='Enter title'/>
                            </div>

                            <div className='row AddListing__four' style={{margin:"0"}}>
                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>condition</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>new</option>
                                        <option>used</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>body type</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>sedan</option>
                                        <option>compact</option>
                                        <option>coupe</option>
                                        <option>wagon</option>
                                    </select>
                                </div>
 
                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>make/Brand</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>BMW</option>
                                        <option>ferrari</option>
                                        <option>marcediz benz</option>
                                        <option>hyundai</option>
                                        <option>nissan</option>
                                    </select>
                                </div>
 
                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>model</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>a3</option>
                                        <option>a4</option>
                                        <option>a6</option>
                                        <option>q4</option>
                                        <option>q7</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>price (USD)</label>
                                    <input type='text' placeholder='Enter Price'/>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>year</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>drive type</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>automatic</option>
                                        <option>semi auto</option>
                                        <option>manual</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>transmission</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>automatic</option>
                                        <option>manual</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>fuel type</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>diesel</option>
                                        <option>petrol</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>color</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>red</option>
                                        <option>white</option>
                                        <option>black</option>
                                    </select>
                                </div>


                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>doors</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>2</option>
                                        <option>4</option>
                                        <option>6</option>
                                    </select>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>VIN</label>
                                    <input type='text' placeholder='Enter VIN'/>
                                </div>


                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>mileage</label>
                                    <input type='text' placeholder='Enter mileage'/>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>engine size</label>
                                    <input type='text' placeholder='Enter engine size'/>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>cylenders</label>
                                    <select className='AddListing__option'>
                                        <option>choose</option>
                                        <option>4</option>
                                        <option>6</option>
                                    </select>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <label>tags or keyword</label>
                                    <input type='text' placeholder='Enter tags ex: car,red'/>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 AddListing__uploadI'>
                                    <label>upload images</label>
                                    <input type='file'  placeholder='Upload Listing Images'/>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h4 style={{fontWeight:"700", marginBottom:"30px"}}>location</h4>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <label>address</label>
                                    <input type='text' placeholder='Enter address'/>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <label>city</label>
                                    <input type='text' placeholder='Enter city'/>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <label>state</label>
                                    <input type='text' placeholder='Enter state'/>
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <label>zip code</label>
                                    <input type='text' placeholder='Enter zip code'/>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h4 style={{fontWeight:"700", marginBottom:"30px"}}>detailed information</h4>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <label>description</label>
                                    <textarea placeholder='Write description'></textarea>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h4 style={{fontWeight:"700", marginBottom:"30px"}}>features</h4>
                                </div>


                                <div className='AddListing__checkbox'>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox'  id='c1'/> 
                                    <label for='c1'>multi-zone A/C</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox'  id='c2'/> 
                                    <label for='c2' >adaptive cruise</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c3'/> 
                                    <label for='c3'>sunroof</label>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c4'/> 
                                    <label for='c4'>heated front</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c5'/> 
                                    <label for='c5'>coolest seats</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c6'/> 
                                    <label for='c6'>panoramic roof</label>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c7'/> 
                                    <label for='c7'>navigation sys</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c8'/> 
                                    <label for='c8'>keyles start</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c9'/> 
                                    <label for='c9'>bluetooth</label>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c10'/> 
                                    <label for='c10'>antilock brakes</label>
                                </div> 

                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                                    <input type='checkbox' id='c11'/> 
                                    <label for='c11'>android auto</label>
                                </div> 
                                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'></div>
                                </div>


                                <div className='AddListing__contact'>                                
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h4 style={{fontWeight:"700", marginBottom:"20px"}}>contact information</h4>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>name</label>
                                    <input type='text' placeholder='Enter name'/>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>email</label>
                                    <input type='email' placeholder='Enter email'/>
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <label>phone</label>
                                    <input type='number' placeholder='Enter number'/>
                                </div>
                                </div>

                                <div className='AddListing__agree'>
                                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1' style={{padding:"0", width:"20px"}}>
                                    <input type='checkbox' id='agree'/>
                                </div>

                                <div className='col-lg-11 col-md-11 col-sm-11 col-xs-11' style={{padding:"0"}}>    
                                    <label for='agree'>i agree with your terms of services and privacy policy</label>
                                </div>
                                </div>
                                
                                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 AddListing__btn'>
                                    <input type='submit' value='Save & Publish Listing'/> 
                                </div>


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
export default AddListing;