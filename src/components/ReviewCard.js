import React from 'react'

const ReviewCard = ({img_url,title,name,comment}) => {
  return (
    <>
      <div className="shadow-lg review-card rounded">
        <img className="rc-img rounded-circle" src={img_url} alt="img_url"/>
        <h5 className="custom-font-a">{name}</h5>
        <p className="text-muted custom-font-b xs-font">{title}</p>
        <p className="text-muted custom-font-b xs-font">{comment}</p>
      </div>
    </>
  )
}

export default ReviewCard
