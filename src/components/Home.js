import React, { useState } from 'react'
import Header from './Header'
import Card from "./Card"
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Footer from './Footer';
const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <div>
        <Header/>
        <div className='mt-5 row me-0' style={{background: "rgba(0, 0, 0, 0.25)"}}>
        <div className='col ps-5 ms-4 mt-4'>
          <p className='fs-2 ' style={{fontWeight: "500"}}>At <span className="lettyAiColor" >LettyAI,</span><br/>We're changing the way<br/>the world works,<br/>and it's just the beginning.</p>
          <p className='fs-2 ' style={{fontWeight: "500"}}>Join us on our journey!</p>
          <button className='rounded border text-white border-0 px-4 py-2 mb-5 mt-4' style={{background: "#6E3FF2"}}>GET STARTED</button>
          </div>
          <div className='col text-center m-auto'>
         <img src='./images/ai logo.png' />
         </div>
        </div>
        <div className='feature' style={{padding: "0 32px", paddingBottom: "10px"}}>
        <div className='position-relative ' style={{marginBottom: "60px"}}>
            <p className='fw-bold text-center' style={{fontSize: "48px", paddingTop: "70px"}}>FEATURES</p>
            { !hover ?<img src="./images/circle.png" className='hower position-absolute top-0 end-0   me-3' style={{marginTop: "2.2em"}} onMouseEnter={()=>setHover(!hover)}/>
              :
            <img src="./images/colorCircle.png" className='hower position-absolute top-0 end-0   me-3' style={{marginTop: "2.2em"}} onMouseLeave={()=>setHover(!hover)}/>}
            <img src="./images/call.png" className='position-absolute top-0 end-0 ' style={{marginTop: "3.3em", marginRight: "1.8em"}} onMouseEnter={()=>setHover(true)}  />
        </div>
        <div className='d-flex gap-3 justify-content-center'>
          <Card imageSrc="./images/bulb.png"/>
          <Card imageSrc="./images/documentIcon1.png"/>
          <Card imageSrc="./images/documentIcon2.png"/>
        </div>
        </div>
        <Pricing />
        <Testimonial />
        <Footer/>
    </div>
    
  )
}

export default Home


