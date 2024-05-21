import React from "react";

function Shop_checkOut(){
    return(
        <>
            <div className='CommonBG'>
                <h1 className='CommonBG__title'>shop checkout</h1>
                <h4> 
                    <a href="/">home</a> 
                        // 
                    <span>shop checkout</span> 
                </h4>        
            </div>    
            
            <div className="container">
                <div className="shop_checkout_form">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12" style={{marginBottom:"20px"}}>
                            <h4 className="shop_checkout_heading">billing address</h4>
                            <form className="horizontal-form shopcheckout__form">
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">first name</label>
                                        <input type="text" name="first_name" placeholder="First Name" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">last name</label>
                                        <input type="text" name="last_name" placeholder="Last Name" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">email</label>
                                        <input type="email" name="email"  placeholder="Email" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">phone</label>
                                        <input type="number" name="number" placeholder="Your Phone" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-xs-12">
                                        <label className="shop_checkout_name">address</label>
                                        <input type="text" name="address"  placeholder="Address" className="form-control"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                         
                        <div className="shop_checkout_summary">
                            <div className="col-lg-4 col-xs-12">
                                <h4 className="shop_checkout_heading">card summary</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">product qty:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1">5</h5>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">shipping cost:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1"> $25.00</h5>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">discount:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1"> $5.00</h5>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">vat:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1"> $20.00</h5>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">sub total:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1"> $4,540.00</h5>
                                    </div>    
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill">total pay:</h5>
                                    </div>
                                    <div className="col-lg-6 col-xs-6">
                                        <h5 className="shop_checkout_bill1"> $4,540.00</h5>
                                    </div>    
                                </div>
                                <br/>
                                <button type="submit" className="btn shop_checkout_btn">confirm payment <span className="glyphicon glyphicon-arrow-right"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12">
                            <div className="shop_checkout_form shopcheckout__form">
                                <h4 className="shop_checkout_heading">payment info</h4>
                                    <div className="row">
                                        <div className="col-lg-6 col-xs-12">
                                            <label className="shop_checkout_name">card holder name</label>
                                            <input type="text" name="card_holder_name" placeholder="Name On Card" className="form-control"/>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <label className="shop_checkout_name">card number</label>
                                            <input type="number" name="card_number" placeholder="Your Card Number" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-xs-12">
                                            <label className="shop_checkout_name">expire date</label>
                                            <input type="number" name="expire_date" placeholder="Expire" className="form-control"/>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <label className="shop_checkout_name">CCV</label>
                                            <input type="number" name="ccv" placeholder="CVV" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            <div className="col-lg-4"></div>
                        </div>
                    
                    </div>
                <br/>
                
                    <div className="row">
                        <div className="col-lg-8 col-xs-12">
                            <div className="shop_checkout_form  shopcheckout__form">
                                <h4 className="shop_checkout_heading">shipping address</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">first name</label>
                                        <input type="text" name="first_name" placeholder="First Name" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">last name</label>
                                        <input type="text" name="last_name" placeholder="Last Name" className="form-control"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">email</label>
                                        <input type="email" name="email" placeholder="Email" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">phone</label>
                                        <input type="number" name="phone" placeholder="Phone" className="form-control"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">address1</label>
                                        <input type="text" name="address" placeholder="Your Address" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <label className="shop_checkout_name">address2</label>
                                        <input type="text" name="address" placeholder="Your Address" className="form-control"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 col-xs-12">
                                        <label className="shop_checkout_name">additional info</label>
                                        <textarea name="additional_info" cols="30" rows="5" className="form-control" placeholder="Additional Info"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-12"></div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}

export default Shop_checkOut;