import React from "react";
import QualitySer_01 from '../Assets/png/quality_ser01.png';

const qualityService = ()=>{
    return(
        <>
            <div className="quality_ser_style">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <br/><br/>
                            <h3 className="quality_ser_heading">why choose us </h3>
                            <h1 className="quality_ser_heading2">we are dedicated <span className="quality_ser_heading3">to provide</span> quality service</h1>
                            <p className="quality_ser_para">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                            <img src={QualitySer_01} alt="Tucson" className="img-responsive"/>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="row">
                                <div className="col-lg-6 col-xs-12">
                                    <div className="quality_ser_01">
                                        <span className="quality_ser_num">01</span>
                                        <h3 className="quality_ser_name">best quality cars</h3>
                                        <p className="quality_ser_name2">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xs-12">
                                    <div className="quality_ser_01">
                                        <span className="quality_ser_num">
                                            02
                                        </span>
                                        <h3 className="quality_ser_name">reasonable price</h3>
                                        <p className="quality_ser_name2">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-xs-12">
                                    <div className="quality_ser_01">
                                        <span className="quality_ser_num">
                                            03
                                        </span>
                                        <h3 className="quality_ser_name">popular brands</h3>
                                        <p className="quality_ser_name2">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xs-12">
                                    <div className="quality_ser_01">
                                        <span className="quality_ser_num">
                                            04
                                        </span>
                                        <h3 className="quality_ser_name">certified mechanics</h3>
                                        <p className="quality_ser_name2">There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <br/><br/>
        </>
    )
}

export default qualityService;