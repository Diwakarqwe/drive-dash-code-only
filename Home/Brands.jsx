import React from 'react';
import About7 from '../Assets/About/about us 7.png';
import About8 from '../Assets/About/about us 8.png';
import About9 from '../Assets/About/about us 9.png';
import About10 from '../Assets/About/about us 10.png';
import About11 from '../Assets/About/about us 11.png';
import About12 from '../Assets/About/about us 12.png';
function AboutFive(){
    return(
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
    );    
}

export default AboutFive;