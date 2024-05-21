import React from "react";
import Shop_01 from '../Assets/jpg/shop_01.jpg';
import Shop_02 from '../Assets/jpg/shop_02.jpg';
import Shop_03 from '../Assets/jpg/shop_03.jpg';
import Shop_04 from '../Assets/jpg/shop_04.jpg';
import Shop_05 from '../Assets/jpg/shop_05.jpg';
import Shop_06 from '../Assets/jpg/shop_06.jpg';
import Shop_07 from '../Assets/jpg/shop_07.jpg';
import Shop_08 from '../Assets/jpg/shop_08.jpg';
import Shop_09 from '../Assets/jpg/shop_09.jpg';
import { BsStar } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Shop(){
    return(
        <>
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>our shop</h1>
                <h4> 
                    <a href="/">home</a> 
                        // 
                    <span>our shop</span> 
                </h4>        
            </div>    
            
            <div className="shop_style">
                <div className="container">
                    <div className="row" style={{margin:"0"}}>
                        <div className="col-lg-3 col-xs-12">
                            <div className="shop_search">
                                <div className="form-group">
                                    <h4>Search</h4>
                                    <input type="search" className="form-control" id="search" name="search" placeholder="search"/>
                                </div>
                            </div> 
                            <br/>
                            <div className="shop_category">
                                    <h4>Category</h4>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Headlights & Lighting </label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand" checked/> Interior Parts </label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Switches & Relays</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand" checked></input> Tires & Wheels</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Fuel Systems</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Steering</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Body Parts</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Air Filters</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Wipers & Washers</label>
                                    </div>
                            </div> 
                            <br/>
                            <div className="shop_parts_brand">
                                    <h4>Parts Brands</h4>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Audi</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand" checked></input> BMW</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Ford</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand" checked></input> Tesla</label>
                                    </div>
                                    <div className="checkbox">
                                        <label> <input type="checkbox" value="all-brand"></input> Honda</label>
                                    </div>
                            </div>
                            <br/>
                            <div className="shop_price">
                                <h4>price range</h4>
                                <h4 className="shop_range">$100 - $500</h4>
                                <input type="range" min="100" max="500" step="10" checked/>
                            </div>
                            <br/>
                            <div className="shop_popular">
                                <h4>Popular Tags</h4>
                                <br/>
                                <div className="shop_tags">
                                    <a href="#">Car</a>
                                    <a href="#">Parts</a>
                                    <a href="#">Fuel</a>
                                    <a href="#">Tire</a>
                                    <a href="#">Light</a>
                                </div>
                            </div>
                            <br/>
                            <div className="shop_banner">
                                <div className="shop_banner_content">
                                    <h3 className="shop_content2">get <span className="shop_content3">35%</span> on all our products</h3>
                                    <button type="submit" className="shop_button">buy now <span className="glyphicon glyphicon-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <div className="shop_show">
                                <h4 className="inventory_show1">showing 1-10 of 50 results </h4>
                            </div>
                            <div className="shop_container">
                                <div className="shop_img">
                                    <span className="shop_sale">sale</span>
                                    <img src={Shop_01} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                    <del className="shop_price_1">$450 </del> $390
                                </div>
                            </div>    
                            <div className="shop_img">
                                <img src={Shop_02} className="img-responsive"/>
                            </div>
                            <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                     $640
                                </div>

                            <div className="shop_img">
                                <img src={Shop_03} className="img-responsive"/>
                            </div>
                            <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                     $710
                                </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <br/>
                            <br/>
                            <div className="shop_show2">
                                <div className="shop_img">
                                    <img src={Shop_04} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                    <del className="shop_price_1">$320 </del> $290
                                </div>

                                <div className="shop_img">
                                    <img src={Shop_05} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                    $670
                                </div>

                                <div className="shop_img">
                                    <span className="shop_sale">sale</span>
                                    <img src={Shop_06} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                    $550
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <div className="shop_sort">
                                <select className="AddListing__option">
                                    <option>Sort By Default</option>
                                    <option>Sort By Featured</option>
                                    <option>Sort By Latest</option>
                                    <option>Sort By Low Price</option>
                                    <option>Sort By High Price</option>   
                                </select>
                            </div>
                            <div className="shop_show3">
                                <div className="shop_img">
                                    <img src={Shop_07} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                     $710
                                </div>
                                <div className="shop_img">
                                    <img src={Shop_08} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                    $250
                                </div>
                                <div className="shop_img">
                                    <img src={Shop_09} className="img-responsive"/>
                                </div>
                                <div className="shop_star">
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                    <span className="shop_star2"><BsStar/></span>
                                </div>
                                <div className="shop_name">
                                    <a href="#"><h4 className="shop_name2"> car engine parts</h4></a>
                                </div>
                                <div className="shop_item_price">
                                     $695
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-xs-12"></div>
                        <div className='col-lg-4 col-xs-12 shop_page'>
                            <div><a href="/"> <MdKeyboardDoubleArrowLeft/> </a> </div>
                            <div> <a style={{color:"white",backgroundColor:"crimson"}} href="/"> 1 </a> </div>
                            <div> <a href="#">2</a> </div>
                            <div> <a href="#">3</a> </div>
                            <div> <a href="#"><MdKeyboardDoubleArrowRight/></a> </div>
                        </div>
                        <div className="col-lg-3 col-xs-12"></div>
                    </div>        
                </div>  
            </div>
            <br/>
            <br/>
        </>
    )
}

export default Shop;