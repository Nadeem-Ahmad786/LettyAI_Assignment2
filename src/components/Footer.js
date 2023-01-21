import React from "react";

function Footer(){
    return(
        <div className="footer d-flex flex-row justify-content-between pt-5 pb-5 px-5">
            <div className="ps-2">
                <h1 className="fw-bold" style={{fontSize: "3.5em"}}><span className="foot-letty">Letty</span>AI</h1>
            </div>
            <div className="text-start fw-bold">
                <p style={{fontSize: "1.8em"}}>@ 2022 Letty, Inc. All rights reserved.</p>
                <p style={{fontSize: "1.8em"}}>Contact : hello@letty.ai</p>
                <p style={{fontSize: "1em", color: "#3263E1"}}>TERMS OF SERVICE</p>
                <p style={{fontSize: "1em", color: "#3263E1"}}>PRIVACY POLICY</p>
            </div>
            <div className="pe-3">
                <div className="d-flex flex-row pb-4">
                    <img className="pe-4" src='images/ig.png' alt=""/>
                    <img className="" src='images/discord.png' alt=""/>
                </div>
                <div className="d-flex flex-row pb-4">
                    <img className="pe-4" src='images/linkedin.png' alt=""/>
                    <img className="" src='images/fb.png' alt=""/>
                </div>
            </div>
        </div>
    )
        
}
    

export default Footer;