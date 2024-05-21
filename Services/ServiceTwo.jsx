
import { Container, Row, Col } from 'reactstrap'; // Import Reactstrap grid components
import React from 'react';
import DB from "./Data.js";
import Base from './Base.jsx';
const ServicesTwo=()=>{

    return(
    <>
      <div className='CommonBG'>
        <h1 className='CommonBG__title'>services</h1>
          <h4> 
            <a href="/">home</a> 
            // 
            <span>services</span> 
          </h4>              
      </div>   
      
      
        <div className='container Service__Heading'>
            <div className='Service__twoH'>
              <h4>services</h4>
              <h1>what we <span>offer</span></h1>
              <div className='Service__threeL'></div>  
            </div>
        </div>    
                             

      
                        
    <Container> 
      <Row>
      {
      DB.map((project)=>(
          <Col key={project.url} lg='4' md='4' sm='12' xs='12'>
            <Base key={project.url}  url={project.url} name={project.name} content={project.content} button={project.button}/>
          </Col> 
      ))
      }
      </Row>
    </Container>  
  </>
  );    
}
export default ServicesTwo;