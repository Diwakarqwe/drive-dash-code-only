import React from "react";
import Car01 from '../Assets/jpg/car01.jpg';
import Car02 from '../Assets/jpg/car02.jpg';
import Car03 from '../Assets/jpg/car03.jpg';
import Car04 from '../Assets/jpg/car04.jpg';
import Car05 from '../Assets/jpg/car05.jpg';
import Car06 from '../Assets/jpg/car06.jpg';
import Car07 from '../Assets/jpg/car07.jpg';
import Car08 from '../Assets/jpg/car08.jpg';
import Car09 from '../Assets/jpg/car09.jpg';
import { TbSteeringWheel } from "react-icons/tb";
import { FaRoad } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';


class Inventory extends React.Component{
    render(){
        return(
            <>
                <div className='CommonBG'>
                    <h1 className='CommonBG__title'>inventory grid</h1>
                    <h4> 
                        <a href="/">home</a> 
                        // 
                        <span>inventory grid</span> 
                    </h4>        
                </div>    
            
                
                <div className="container">
                    <div className="row" style={{margin:"0"}}>
                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_search">
                                <div className="form-group">
                                    <br/>
                                    <h4>Search</h4>
                                    <div className="inventory_space"></div><br/>
                                    <input type="search" className="form-control" id="search" name="search" placeholder="Search"/>
                                </div>
                            </div>
                            <div className="inventory_brand">
                                <h4>Brands</h4>
                                <div className="inventory_space"></div><br/>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand" className="inventory_check"></input> All Brands</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand"></input> BMW</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand" checked></input> Toyota</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand"></input> Ferrari</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand" checked></input> Audi</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand"></input> Tesla</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand"></input> Mercedes</label>
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" value="all-brand"></input> Hyundai</label>
                                </div>
                            </div>

                            <div className="inventory_brand">
                                <h4 className="inventory_name">price range</h4>
                                <div className="inventory_space"></div><br/>
                                <h4>$100 - $500</h4>
                                <input type="range" min="100" max="500" step="10" checked/>
                            </div>
                                <br/>
                            <div className="inventory_brand">
                                <h4 className="inventory_name">transmission</h4>
                                <div className="inventory_space"></div><br/>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="Automatic"/>Automatic</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="Manual" checked/>Manual</label>
                                </div>
                                <br/>
                            </div>
                            <div className="inventory_brand">
                                <h4 className="inventory_name">fuel type</h4>
                                <div className="inventory_space"></div><br/>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="gas"/>Gas</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="hybrid" checked/>Hybried</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="disel"/>Diesel</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="electric"/>Electric</label>
                                </div>
                            </div>
                            <br/>
                            <div className="inventory_brand">
                                <h4 className="inventory_name">Features</h4>
                                <div className="inventory_space"></div><br/>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="airbag-drive"/>Airbag-Drive</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="passanger" checked/>Airbag-Passanger</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="alloy-wheels"/>Alloy wheels</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value="anti-lock"/>Anti-Lock Breaking System</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-xs-12" style={{padding:"0 10px"}}>
                        <div className="inventory_back">    
                            <div className="row" style={{margin:"0"}}>
                                <div className="col-lg-4 col-xs-12">            
                                    <div className="inventory_show">
                                        <br/>
                                        <h4 className="inventory_name">showing 1-10 of 50 results </h4>
                                    </div>
                                </div> <br/>
                            
                                <div className="col-lg-4 col-xs-12">
                                    <div className="inventory_gly">
                                        <br/>
                                        <a href="#" className="inventory_gly1"><span className="glyphicon glyphicon-th-large inventory_gly2"></span> 
                                        <span className="glyphicon glyphicon-th-list inventory_gly3"></span></a>
                                    </div>    
                                </div>
                              
                                <div className="col-lg-4 col-xs-12">
                                    <div className="inventory_sort"><br/>
                                        <select className="AddListing__option" style={{marginBottom:"0"}}>
                                            <option>Sort By Default</option>
                                            <option>Sort By Featured</option>
                                            <option>Sort By Latest</option>
                                            <option>Sort By Low Price</option>
                                            <option>Sort By High Price</option>   
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br/><br/>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 10px"}}>
                            <div className="inventory_img">
                                <div>
                                    <img src={Car01} className="img-responsive inventory_img_01"/>
                                    <span className="inventory_status">used</span>
                                </div>
                                <h4 className="car_name"><a href="#">Mercedes Benz Car</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div> 
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$45,620</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 10px"}}>
                            <div className="inventory_img">
                                <img src={Car02} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">Yellow Ferrari 458</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                            <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$90,250</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>    
                            <div className="inventory_img">
                                <img src={Car03} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">Black Audi Q7</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                            <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                            <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$44,350</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car04} className="img-responsive inventory_img_01"/>
                                <span className="inventory_status1">new</span>    
                                <h4 className="car_name"><a href="#">BMW Sports Car</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                            <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$78,760</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car05} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">White Tesla Car</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                            <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$64,630</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>                

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car06} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#"></a>White Nissan Car</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$34,540</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car07} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">Mercedes Benz Suv</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$75,820</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car08} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">Red Hyundai Car</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$25,620</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                                <span className="inventory_status">used</span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xs-12" style={{padding:"0 8px"}}>
                            <div className="inventory_img">
                                <img src={Car09} className="img-responsive inventory_img_01"/>
                                <h4 className="car_name"><a href="#">White BMW Car</a></h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                        <span className="glyphicon glyphicon-star-empty star_gly"></span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="inventory_review">5.0(58.5k Review)</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_drive"> <TbSteeringWheel/> Automatic</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaRoad/> 10.15km/1-litre</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaCar/> Model:2023</p>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <p className="inventory_road"><FaGasPump/> Hybrid</p>
                                    </div>
                                </div>
                                <div className="inventory_line"></div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <span className="car_price">$22,620</span>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <a href="#" className="btn inventory_details"><span className="glyphicon glyphicon-eye-open"></span>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-xs-1"></div>
                        <div className='col-lg-4 col-xs-11 shop_page'>
                            <div><a href="#"> <MdKeyboardDoubleArrowLeft/> </a> </div>
                            <div> <a style={{color:"white",backgroundColor:"crimson"}} href="/"> 1 </a> </div>
                            <div> <a href="#">2</a> </div>
                            <div> <a href="#">3</a> </div>
                            <div> <a href="#"><MdKeyboardDoubleArrowRight/></a> </div>
                        </div>
                        <div className="col-lg-3 col-xs-12"></div>
                    </div>
                </div>
            </>
        )
    }    
}
export default Inventory;
                            
                        