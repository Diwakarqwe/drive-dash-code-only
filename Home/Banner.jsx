import React from 'react';
import Hero_1 from '../Assets/png/hero-1.png';
import Hero_2 from '../Assets/png/hero-2.png';
import Hero_3 from '../Assets/png/hero-4.png';


function Banner(){
    return(
        <>
            <div className='main'>
                <div className='container-fluid'>
                    <div className='row' style={{margin:"0"}}>
                        <div className='col-lg-6 col-xs-12'>
                            <h6 className='heading_one'>welcome to drive dash !</h6>
                            <h1 className='heading_two'>best way to find your <span className='heading_three'>dream </span>car</h1>
                            <p className='heading_four'>There are many variations of passages Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos aut eligendi, dolorem adipisci optio dolore obcaecati distinctio, ducimus debitis necessitatibus? Libero repellendus nesciunt expedita veniam consequatur ad reiciendis vitae.</p>
                            <button type='button' className='heading_five'>About More <span className='glyphicon glyphicon-arrow-right'></span></button>
                            <button type='button' className='heading_six'>Learn More <span className='glyphicon glyphicon-arrow-right'></span></button>
                        </div>
                        <div className='col-lg-6 col-xs-12'>
                            <div id='myCarousel' className='carousel slide' data-ride="carousel">
                                <ol className='carousel-indicators'>
                                    <li data-target="#myCarousel" data-slide-to="0" className='active'> </li>
                                    <li data-target="#myCarousel" data-slide-to="1"> </li>
                                    <li data-target="#myCarousel" data-slide-to="2"> </li>
                                </ol>
                                <div className='carousel-inner'>
                                    <div className='item active'>
                                        <img src={Hero_1} alt='hero_logo1' className='img-responsive'></img>
                                    </div>
                                    <div className='item'>
                                        <img src={Hero_2} alt='hero_logo2' className='img-responsive'></img>
                                    </div>
                                    <div className='item'>
                                        <img src={Hero_3} alt='hero_logo3' className='img-responsive'></img>
                                    </div>
                                </div>
                            </div>
    
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>  
        </>
    )
}


export default Banner;