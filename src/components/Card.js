import React from 'react'

const Card = (props) => {
  return (
    <div className='card cards text-center pb-5' style={{background: "#191919"}}>
    <div className='my-5 text-center'>
      <img src={props.imageSrc}/>
    </div>
      <p className="ps-3 pe-4" style={{fontSize: "32px", fontWeight: "500",lineHeight: "43.65px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  )
}

export default Card