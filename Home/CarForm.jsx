import React from "react";

function CarForm(){
    return(
        <>
            <div className="container">
                <div className="form-style">
                    <h2 className="form_heading">let's find your perfect car</h2>
                    <hr/>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="row" style={{margin:"0"}}>
                                <div className="col-lg-3 col-xs-12">
                                    <label className="control-label">Car Condition</label><br/>
                                    <select className="AddListing__option form_style1"> 
                                        <option className="form_style2">All Status</option>
                                        <option>New Car</option>
                                        <option>Used Car</option>
                                    </select>
                                    <br/>
                                    <label className="control-label">Choose Millage</label><br/> 
                                    <select className="AddListing__option form_style1">
                                        <option className="form_style2">All Millage</option>
                                        <option>2000 Miles</option>
                                        <option>3000 Milles</option>
                                        <option>4000 Miles</option>
                                        <option>5000 Miles</option> 
                                    </select>                                   
                                </div>
                                <div className="col-lg-3 col-xs-12">
                                    <label className="control-label">All Brand</label><br/> 
                                    <select className="AddListing__option form_style1">
                                        <option className="form_style2">All Brand</option>
                                        <option>BMW</option>
                                        <option>Ferrari</option>
                                        <option>Hyundai</option>
                                        <option>Nissan</option>
                                        <option>Kia</option>    
                                    </select>
                                    <br/>  
                                    <label className="control-label">Price Range</label><br/> 
                                    <select className="AddListing__option form_style1">
                                        <option className="form_style2">Price Range</option>
                                        <option>$1,000-$5,000</option>
                                        <option>$5,000-$10,000</option>
                                        <option>$15,000-$20,000</option>
                                        <option>$20,000-$25,000</option>
                                        <option>$25,000-$30,000</option>    
                                    </select>                                      
                                </div>
                                <div className="col-lg-3 col-xs-12">
                                    <label className="control-label">Car Model</label><br/> 
                                    <select className="AddListing__option form_style1">
                                        <option className="form_style2">All Model</option>
                                        <option>3-Series</option>
                                        <option>Carrera</option>
                                        <option>G-TR</option>
                                        <option>Macan</option>
                                        <option>N-Series</option>   
                                    </select>
                                    <br/>  
                                    <label className="control-label">Body Type</label><br/> 
                                    <select className="AddListing__option form_style1"> 
                                        <option className="form_style2">All Body Type</option>
                                        <option>Sedan</option>
                                        <option>Compact</option>
                                        <option>Coupe</option>
                                        <option>Wagon</option>    
                                    </select>
                                    <br/>  
                                </div>
                                <div className="col-lg-3 col-xs-12">
                                    <label className="control-label">Choose Year</label><br/> 
                                    <select className="AddListing__option form_style1">
                                        <option className="form_style2">All year</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>   
                                    </select>
                                    <br/>
                                    <button type="submit" className="btn AddListing__option form_button"><span className="glyphicon glyphicon-search"></span> Find Your Car</button>  
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br/><br/>
        </>
    )
}

export default CarForm;