import React from 'react';
import { useForm } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';
import { FaArrowRightLong } from 'react-icons/fa6';
import BS1 from '../Assets/BlogSingle/BlogSingle 1.jpg';
import BS2 from '../Assets/BlogSingle/BlogSingle 2.jpg';
import BS3 from '../Assets/BlogSingle/BlogSingle 3.jpg';
import BS4 from '../Assets/BlogSingle/BlogSingle 4.jpg';
import BS5 from '../Assets/BlogSingle/BlogSingle 5.jpg';
import BS6 from '../Assets/BlogSingle/BlogSingle 6.jpg';
import BS7 from '../Assets/BlogSingle/BlogSingle 7.jpg';
import {FaRegCircleUser} from 'react-icons/fa6';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { IoShareSocialSharp } from 'react-icons/io5';
import { IoMdClock } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { RiGlobalLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';

function BlogSingle(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=()=>alert("You Have Successfully Submitted");
    
        return(
        <>    
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>blog single</h1>
                <h4> 
                    <a href="/">home</a> 
                        // 
                    <span>blog single</span> 
                </h4>        
            </div>    
          
            <div className='container BlogSingle'>
                <div className='row' style={{margin:"0"}}>
                    <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 BlogSingle__one'>
                        <img src={BS1} alt='Bs-1' className='img-responsive'/> 
                        <div className='BlogSingle__details'>
                            <div className='BlogSingle__name'>
                                <a href='#'> <span> <FaRegCircleUser/> </span> peter parker </a>
                            </div>
                            <div className='BlogSingle__comment'>
                                <span> <AiOutlineMessage/> </span> 
                                <h5>4.5k comments</h5>
                            </div>
                            <div className='BlogSingle__like'>
                                <span> <AiOutlineLike/> </span>
                                <h5>2.0k like</h5>
                            </div>
                            <div className='BlogSingle__share'>
                                <span> <IoShareSocialSharp/> </span>
                                <h5>share</h5>
                            </div>
                        </div>

                        <div className='BlogSingle__content'>
                            <h2>It is a long established fact that a reader</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. It is a long establish</p>
                            <p>In a free hour when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.</p>

                        </div>

                        <div className='BlogSingle__image'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{padding:"0 15px 0 0"}}>
                                <img src={BS5} alt='BS-5' className='img-responsive'/>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{padding:"0 15px 0 0"}}>
                                <img src={BS6} alt='BS-5' className='img-responsive'/>
                            </div>
                        </div>

                        <hr style={{border:"1px solid grey"}}/>

                        <div className='BlogSingle__tag'>
                            <h4>tags :</h4>
                            <a href='#'> <h5>car</h5> </a>
                            <a href='#'> <h5>dealer</h5> </a>
                            <a href='#'> <h5>insurance</h5> </a>
                        </div>

                        <div className='BlogSingle__author'>
                            <div className='row' style={{margin:"0"}}>
                                <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{padding:"0 20px 0 0"}}>
                                    <img src={BS7} alt='BS-7' className='img-responsive'/>
                                </div>
                                <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12' style={{padding:"0"}}>
                                    <h4>author</h4>
                                    <h3>james anderson</h3>
                                    <p>It is a long established fact that a reader will be distracted by the abcd readable content of a page when looking at its layout that more less.</p>
                                    <div className='BlogSingle__authorD'>
                                        <a href='#'> <span> <FaFacebookF/> </span> </a>
                                        <a href='#'> <span> <FaTwitter/> </span> </a>
                                        <a href='#'> <span> <RiGlobalLine/> </span> </a>
                                        <a href='#'> <span> <FaWhatsapp/> </span> </a>
                                        <a href='#'> <span> <FaYoutube/> </span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='BlogSingle__feedback'>
                            <h3>leave a comment</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='form-group'>
                                    <div className='row BlogSingle__feedbackF' style={{margin:"0"}}>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{padding:"0 15px 0 0"}}>
                                            <input type='text'{...register('fname',{required:true})} className='form-control' placeholder='Your Name*'/>
                                            {errors.fname&&<span style={{color:"red",fontWeight:"700"}}>name is mandatory</span>}
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{padding:"0"}}>
                                            <input type='email' {...register('femail',{required:true})} className='form-control' placeholder='Your Email*'/>
                                            {errors.femail&&<span style={{color:"red",fontWeight:"700"}}>email is mandatory</span>}
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                                            <textarea {...register('fcomment',{required:true})} placeholder='Your Comment*'></textarea>
                                            {errors.fcomment&&<span style={{color:"red",fontWeight:"700"}}>comment is mandatory</span>}
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-8 col-xs-8 BlogSingle__feedbackB' style={{padding:"0"}}>
                                            <button type='submit'className='btn btn-block'> Post Comment </button>
                                        </div>
                                        <div className='col-lg-9 col-md-9 col-sm-4 col-xs-4'></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                            <div className='BlogSingle__two'>
                                <h3>search</h3>
                                <input type='text' placeholder='Search Here..'/>
                                <span> <IoIosSearch/> </span>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                            <div className='BlogSingle__three'>
                                <h3>category</h3>
                                <a href='#'> <span> <FaArrowRightLong/> </span> auto dealing <h5>(16)</h5></a>
                                <hr/>
                                <a href='#'> <span> <FaArrowRightLong/> </span> car news <h5>(20)</h5></a>
                                <hr/>
                                <a href='#'> <span> <FaArrowRightLong/> </span> engine solution <h5>(15)</h5></a>
                                <hr/>
                                <a href='#'> <span> <FaArrowRightLong/> </span> car buy tips <h5>(30)</h5></a>
                                <hr/>
                                <a href='#'> <span> <FaArrowRightLong/> </span> top brands <h5>(25)</h5></a>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                            <div className='BlogSingle__four'>
                                <h3>recent post</h3>
                                <div className='row' style={{margin:"0 0 20px 0"}}>
                                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3' style={{padding:"0"}}>
                                        <img src={BS2} alt='BS-2' className='img-responsive'/>
                                    </div> 
                                    <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={{padding:"0"}}>
                                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing.</h5>
                                        <span> <IoMdClock/> january 20, 2024 </span>
                                    </div>
                                </div>
                                <div className='row' style={{margin:"0 0 20px 0"}}>
                                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3' style={{padding:"0"}}>
                                        <img src={BS3} alt='BS-2' className='img-responsive'/>
                                    </div> 
                                    <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={{padding:"0"}}>
                                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
                                        <span> <IoMdClock/> february 10, 2024 </span>
                                    </div>
                                </div>
                                <div className='row' style={{margin:"0 0 20px 0"}}>
                                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3' style={{padding:"0"}}>
                                        <img src={BS4} alt='BS-2' className='img-responsive'/>
                                    </div> 
                                    <div className='col-lg-9 col-md-9 col-sm-9 col-xs-9' style={{padding:"0"}}>
                                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                        <span> <IoMdClock/> march 20, 2024 </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                            <div className='BlogSingle__five'>
                                <h3>follow us</h3>
                                <a href='#'> <span> <FaFacebookF/> </span> </a>
                                <a href='#'> <span> <FaTwitter/> </span> </a>
                                <a href='#'> <span> <RiGlobalLine/> </span> </a>
                                <a href='#'> <span> <FaWhatsapp/> </span> </a>
                                <a href='#'> <span> <FaYoutube/> </span> </a>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{padding:"0"}}>
                            <div className='BlogSingle__six'>
                                <h3>popular tags</h3>
                                <a href='#'> <h5>car</h5> </a>
                                <a href='#'> <h5>dealer</h5> </a>
                                <a href='#'> <h5>drive</h5> </a>
                                <a href='#'> <h5>insurance</h5> </a>
                                <a href='#'> <h5>offer</h5> </a>
                                <a href='#'> <h5>tips</h5> </a>
                                <a href='#'> <h5>maintenance</h5> </a>
                                <a href='#'> <h5>luxury</h5> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>       
    );
}
export default BlogSingle;