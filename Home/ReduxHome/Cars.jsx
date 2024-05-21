import React from "react";
import Data from './data.js';
import LatestCar from './LatestCar.jsx';
import { Container,Row,Col } from "reactstrap";

const Cars = ()=>{
    return(
        <>
        
                <Container>
                    <center><h3 className="car_arrivals">new arrivals</h3></center>
                    <center><h1 className="car_check">let's check latest <span className="car_check1">cars</span></h1></center>
                    <center> <div className='About__fourL'></div></center>
                    <Row style={{margin:"0"}}>
                        {
                            Data.map((car,index)=>(
                                <Col lg='3' md="3" sm='12' xs='12'>
                                    <div className="inventory_img">
                                        <LatestCar key={index} img={car.img} name={car.name} review={car.review} drive={car.drive} km={car.km} model={car.model}
                                        fuel={car.fuel} price={car.price} view={car.view}/>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
                        <br/><br/>
                    <center><a href="#" className="btn car_load">load more <span className="glyphicon glyphicon-repeat"></span></a></center>
                    
            <br/>
            <br/>
        </>
    )
}

export default Cars;