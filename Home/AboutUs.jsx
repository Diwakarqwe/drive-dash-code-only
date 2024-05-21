import React from 'react';
import About2 from '../Assets/About/about us 2.png';

function AboutTwo(){
     return(
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
     );
}

export default AboutTwo;