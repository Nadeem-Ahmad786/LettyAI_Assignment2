import React from "react";

function Pricing(){
    return(
        <div className="text-center pricing pt-4">
            <h1 className="py-5 fw-bold" style={{fontSize: "3em"}}>PRICING</h1>
            <p className="pt-1 pb-5 fs-1">Access all that Letty Al has to offer for next to nothing</p>
            <div className="d-flex flex-row justify-content-center gap-5 pt-4">
                <div class="card fs-2" style={{width: "26rem"}}>
                    <div class="card-body">
                        <h5 class="card-title fs-2 pt-4 pb-4">Letty - Full Access</h5>
                        <p class="card-text pb-3 fs-2">$100/yr</p>
                        <ul class="text-start pt-1 pb-2 ps-5 fs-3">
                            <li class="">Unlimited Text Generation</li>
                            <li class="">Plagiarism Free Content</li>
                            <li class="">Article Creation</li>
                            <li class="">SEO Optimization</li>
                            <li class="">Countless Use-Cases</li>
                        </ul>
                    </div> 
                    <div className="pt-3 pb-1 fs-4 rounded-bottom" style={{backgroundColor: "#6E3FF2"}}><p>BUY NOW</p></div>  
                </div>
                <div class="card fs-2" style={{width: "28rem"}}>
                    <div class="card-body">
                        <h5 class="card-title fs-2 pt-4 pb-4">Letty - Full Access</h5>
                        <p class="card-text pb-3 fs-2">$100/yr</p>
                        <ul class="text-start pt-1 pb-2 ps-5 fs-3">
                            <li class="">Unlimited Text Generation</li>
                            <li class="">Plagiarism Free Content</li>
                            <li class="">Article Creation</li>
                            <li class="">SEO Optimization</li>
                            <li class="">Countless Use-Cases</li>
                        </ul>
                    </div> 
                    <div className="pt-3 pb-1 fs-4 rounded-bottom" style={{backgroundColor: "#6E3FF2"}}><p>BUY NOW</p></div>  
                </div>
            </div>  
        </div>
    )
}

export default Pricing;