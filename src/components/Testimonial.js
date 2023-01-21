import React from "react";

function Testimonial(){
    return(
        <div className="testimonial d-flex flex-row align-items-center pb-3 my-5">
            <img className="ellipse-image" src='images/ellipse.svg' alt="" width= "1000px" height= "auto"/>
            <div className="test-img ">
                <img className="testimonial-image ms-4 pe-5" src='images/testimonial.svg' alt="" width= "550px" height= "auto"/>
            </div>
            <div className="test-content px-5 mx-5 mt-5 pt-5">
                <h1 className="fw-bold pb-5" style={{fontSize: "2.5em"}}>lorem ipsum</h1>
                <p style={{fontSize: "1.6em"}}>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem<br />Ipsum has been the industry's standard<br /> dummy text ever since the 1500s,</p>
            </div>
        </div>
    )
}

export default Testimonial;