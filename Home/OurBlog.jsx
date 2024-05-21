import React from 'react';
import Blog1 from '../Assets/Blog/Blog 1.jpg';
import Blog2 from '../Assets/Blog/Blog 2.jpg';
import Blog3 from '../Assets/Blog/Blog 3.jpg';
import {FaRegCircleUser} from 'react-icons/fa6';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

function Blog(){
       return(

    <div className='Blog'>
                        
        <div className='container'>
          <div className='Blog__H'>
            <h4>our blog</h4>
            <h1>lastest news & <span>blog</span></h1>
            <div className='Blog__L'></div>  
          </div>

            <div className='row' style={{margin:"0"}}>
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='Blog__two'>
                        <img src={Blog1} alt='Blog1' className='img-responsive'/>
                        <div className='row BlogD__two' style={{margin:"0"}}>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCircleUser/> </span> by robert james </h5>  
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCalendarDays/> </span> january 29, 2023 </h5>
                            </div>   
                        </div>
                        <hr/>
                        <h3>there are many variations of passage available.</h3>
                        <a href='/' className='btn'>read more <FaArrowRightLong/> </a>
                    </div>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='Blog__two'>                    
                        <img src={Blog2} alt='Blog2' className='img-responsive'/>
                        <div className='row BlogD__two' style={{margin:"0"}}>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCircleUser/> </span> by anderson </h5>  
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCalendarDays/> </span> march 20, 2023 </h5>
                            </div>   
                        </div>
                        <hr/>
                        <h3>there are many variations of passage available.</h3>
                        <a href='/' className='btn'>read more <FaArrowRightLong/> </a>
                    </div>    
                </div>

                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='Blog__two'>
                        <img src={Blog3} alt='Blog3' className='img-responsive'/>
                        <div className='row BlogD__two' style={{margin:"0"}}>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCircleUser/> </span> by jennifer </h5>  
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                <h5> <span> <FaRegCalendarDays/> </span> january 10, 2024 </h5>
                            </div>   
                        </div>
                        <hr/>
                        <h3>there are many variations of passage available.</h3>
                        <a href='/' className='btn'>read more <FaArrowRightLong/> </a>
                    </div>    
                </div>
            </div>
        </div>  
    </div>
       );
}

export default Blog;