import React from "react";
import Carbody_01 from '../Assets/png/car_body01.png';
import Carbody_02 from '../Assets/png/car_body02.png';
import Carbody_03 from '../Assets/png/car_body03.png';
import Carbody_04 from '../Assets/png/car_body04.png';
import Carbody_05 from '../Assets/png/car_body05.png';
import Carbody_06 from '../Assets/png/car_body06.png';
import Carbody_07 from '../Assets/png/car_body07.png';
import Carbody_08 from '../Assets/png/car_body08.png';
import Carbody_09 from '../Assets/png/car_body09.png';
import Carbody_10 from '../Assets/png/car_body10.png';
import Carbody_11 from '../Assets/png/car_body11.png';
import Carbody_12 from '../Assets/png/car_body12.png';

function CarBody(){
    return(
        <>
            <div className="carbody_color">
                <div className="container">
                        <center><h3 className="carbody_heading">car category</h3></center>
                        <center><h1 className="carbody_heading2">car by body <span className="carbody_heading3">types</span></h1></center>
                        <center><div className="car_space"></div></center>
                        <div className="row" style={{margin:"0"}}>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_01} alt="seden" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">sedan</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_02} alt="compact" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">compact</h5> </center>
                            </div>

                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_03} alt="convertible" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">convertible</h5> </center>
                            </div>

                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_04} alt="suv" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">suv</h5> </center>
                            </div>

                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_05} alt="crossover" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">crossover</h5> </center>
                            </div>

                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_06} alt="wagon" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">wagon</h5> </center>
                            </div>
                        </div>
                        <div className="row" style={{margin:"0"}}>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_07} alt="sport" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">sport</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_08} alt="pickup" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">pickup</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_09} alt="family mpv" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">family MPV</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_10} alt="coupe" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">coupe</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_11} alt="electic" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">electric</h5> </center>
                            </div>
                            <div className="col-lg-2 col-xs-6 carbody_style">
                                <a href="#"><img src={Carbody_12} alt="luxury" className="img-responsive"/> </a>
                                <center> <h5 className="carbody_name">luxury</h5> </center>
                            </div>
                        </div>
                    </div>
                <hr/>
            </div>

        </>
    )
}

export default CarBody;