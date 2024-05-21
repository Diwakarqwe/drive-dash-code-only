import React from 'react';
import Db1 from '../Assets/MyAccount/Dashboard/01.jpg';
import Db2 from '../Assets/MyAccount/Dashboard/02.jpg';
import Db3 from '../Assets/MyAccount/Dashboard/03.jpg';
import Db4 from '../Assets/MyAccount/Dashboard/04.jpg';
import Db5 from '../Assets/MyAccount/Dashboard/05.jpg';
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
import { LuPencil } from 'react-icons/lu';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';


function MyListing(){
    return(
    <>

        <div className='CommonBG'>
            <h1 className='CommonBG__title'>mylisting</h1>
            <h4> 
                <a href="/">home</a> 
                // 
                <span>mylisting</span> 
            </h4>        
        </div>    

        <div className='container MyListing__one' style={{padding:"0"}}>
        <div className='row' style={{margin:"0"}}>
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{marginBottom:"20px"}}>
                <div className='MyListing__inner1'>
                <div className='MyListing__head'> 
                    <img src={User} alt='User' className='image-responsive img-circle'/>
                    <button type='button'><MdOutlineCameraAlt/> </button>
                    <h4>robert williamson</h4>
                    <h5 style={{textTransform:"none",color:"gray"}}>robert@example.com</h5>
                    <hr/>
                </div>

                <div className='MyListing__two'>
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

            <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
            <div className='MyListing__inner2'>
                      <h3 style={{display:"inline-block"}}>recent listing</h3>
                    <div className='MyListing__searchbox'> 
                        <div className='MyListing__searchicon'> 
                            <FaSearch/>
                       </div> 
                       <input type='text' className='form-control' placeholder='Search...'/>
                    </div>
                    
                    <div className='MyListing__searchbtn'>
                        <a href='#' type='button' className='btn btn-lg'> <IoMdAddCircleOutline/> Add Listing</a>        
                    </div>    
                    
                <hr/>
                <div className="table-responsive">                
                    <table className='table'>
                    <thead className='MyListing__three'>
                        <tr>
                            <th>car info</th>
                            <th>brand</th>
                            <th>publish</th>
                            <th>price</th>
                            <th>views</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>    
                    </thead>

                    <tbody className='MyListing__four'>

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
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
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
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
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
                            <td> <span style={{color:"#a855f7",backgroundColor:"#f3e8ff"}}>pending</span> </td>
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
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
                            <td>200k+</td>
                            <td> <span style={{color:"#0dcaf0",backgroundColor:"#dbf7fd"}}>sold</span> </td>
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
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
                            <td>0</td>
                            <td> <span style={{color:"crimson",backgroundColor:"#fee2e2"}}>expired</span> </td>
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
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
                            <td>
                                <a href='#'> 
                                    <div className='MyListingTable__icon1' > <IoEyeOffOutline/> </div>
                                    <div className='MyListingTable__icon2'> <LuPencil/> </div>
                                    <div className='MyListingTable__icon3'> <FaRegTrashCan/> </div> 
                                </a>
                            </td>
                        </tr>
                    </tbody>       
                </table>
                </div>
                <div className='MyListing__pages'>
                    <div> <MdKeyboardDoubleArrowLeft/> </div>
                    <div style={{color:"white",backgroundColor:"crimson"}}> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                    <div> 4 </div>
                    <div> <MdKeyboardDoubleArrowRight/> </div>
                </div>
            </div>     
            </div>
        </div>
    </div> 
    </>   
    );
}
export default MyListing;