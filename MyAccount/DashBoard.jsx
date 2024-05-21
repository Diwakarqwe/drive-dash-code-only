import React from 'react';
import User from '../Assets/MyAccount/Profile 1.jpg';
import {MdOutlineCameraAlt} from 'react-icons/md';
import {AiOutlineDashboard} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import{CiBoxList} from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoLayersOutline } from 'react-icons/io5';
import Db1 from '../Assets/MyAccount/Dashboard/01.jpg';
import Db2 from '../Assets/MyAccount/Dashboard/02.jpg';
import Db3 from '../Assets/MyAccount/Dashboard/03.jpg';
import Db4 from '../Assets/MyAccount/Dashboard/04.jpg';
import Db5 from '../Assets/MyAccount/Dashboard/05.jpg';



function dashboard(){
    return(
    <>
        <div className='CommonBG'>
            <h1 className='CommonBG__title'>dashboard</h1>
            <h4> 
                <a href="/">home</a> 
                // 
                <span>dashboard</span> 
            </h4>        
        </div>    

        <div className='container Dashboard__one' style={{padding:"0"}}>
        <div className='row' style={{margin:"0"}}>
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{marginBottom:"20px"}}>
                <div className='Dashboard__inner1'>
                <div className='Dashboard__head'> 
                    <img src={User} alt='User' className='image-responsive img-circle'/>
                    <button type='button'><MdOutlineCameraAlt/> </button>
                    <h4>robert williamson</h4>
                    <h5 style={{textTransform:"none",color:"gray"}}>robert@example.com</h5>
                    <hr/>
                </div>

                <div className='Dashboard__two'>
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

        
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                <div className='Dashboard__inner2'>
                <div className='row' style={{margin:"0"}}>    
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>    
                    <h1>500</h1>
                    <h5>active listing</h5>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>
                    <span style={{float:"right"}}> <CiBoxList/> </span>          
                </div>
                </div>
                </div>
            </div>
            
        
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                <div className='Dashboard__inner3'>
                <div className='row' style={{margin:"0"}}>    
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>
                    <h1>20.05k</h1>
                    <h5>total views</h5>    
                </div>    
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>
                    <span style={{float:"right"}}> <IoEyeOffOutline/> </span>
                </div>
                </div>
                </div>
            </div> 

            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                <div className='Dashboard__inner4'>
                <div className='row' style={{margin:"0"}}>    
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>
                    <h1>2000</h1>
                    <h5>total listing</h5>    
                </div>    
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{padding:"0"}}>
                    <span style={{float:"right"}}> <IoLayersOutline/> </span>
                </div>
                </div>
                </div>
            </div> 

            <div className='col-lg-3 col-md-3'></div>

            <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
                <div className='DashboardT__inner5'>
                <h3>recent listing</h3>
                <hr/>
                <div className='table-responsive'>
                <table className='table'>
                    <thead className='DashboardT__three'>
                        <tr>
                            <th>car info</th>
                            <th>brand</th>
                            <th>publish</th>
                            <th>price</th>
                            <th>views</th>
                            <th>status</th>
                        </tr>    
                    </thead>

                    <tbody  className='DashboardT__four'>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db1} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>7 days ago</td>
                            <td>$100,000</td>
                            <td>700k</td>
                            <td> <span>active</span> </td>
                        </tr>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db2} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>9 days ago</td>
                            <td>$75,000</td>
                            <td>700k</td>
                            <td> <span>active</span> </td>
                        </tr>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db3} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>9 days ago</td>
                            <td>$70,000</td>
                            <td>600k</td>
                            <td> <span>active</span> </td>
                        </tr>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db4} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>7 days ago</td>
                            <td>$75,000</td>
                            <td>200k</td>
                            <td> <span>active</span> </td>
                        </tr>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db5} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>9 days ago</td>
                            <td>$90,000</td>
                            <td>200k</td>
                            <td> <span>active</span> </td>
                        </tr>

                        <tr>
                            <td> 
                                <a href='#'>
                                <img src={Db1} alt='Dashboard 1' className='img-responsive'/> 
                                <label>mercedes benz car</label>
                                </a>
                            </td>
                            <td>ferrari</td>
                            <td>7 days ago</td>
                            <td>$50,000</td>
                            <td>400k</td>
                            <td> <span>active</span> </td>
                        </tr>
                    </tbody>       
                </table> 
                </div>   
            </div>
            </div>   
        </div>
    </div>
    </>    
    );
}
export default dashboard;