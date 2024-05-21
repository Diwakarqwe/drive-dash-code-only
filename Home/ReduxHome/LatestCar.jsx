import React from "react";

const LatestCar=({img,name,review,drive,km,model,fuel,price,view})=>{
    return(
        <>
                <div className="latest_car">
                                    <div className="first_car">
                                        <img src={img} alt="Benz Car" className="img-responsive car_img"/>
                                        <h4 className="car_name"><a href="#">{name}</a></h4>
                                        <h5 className="car_review">{review}</h5>
                                        <p className="car_drive">{drive}</p>
                                        <p className="car_km">{km}</p>
                                        <p className="car_model">{model}</p>
                                        <p className="car_fuel">{fuel}</p>
                                        <span className="car_price">{price}</span>
                                        <a href="#" className="btn car_details"><span className="glyphicon glyphicon-eye-open"></span> {view}</a>
                                    </div>
                    </div>
        </>
    )
}

export default LatestCar;
