import React from 'react'
import { Link } from 'react-router-dom'


const FavCard = ({id,img_url, name, price}) => {
  return (
    <div className="fav-card rounded shadow">
      <img className="fav-card-th rounded-top" src={img_url} alt="img" />
      <div className="d-flex flex-column p-3">
        <div className="plan-info">
          <h6 className="custom-font-a">{name}</h6>
          <h6 className="al-right custom-font-a">${price}</h6>
        </div>
        <div className="plan-info">
          <Link className="btn fav-btn text-white rounded-pill custom-font-a" to={`/houseplans/${id}`}>View</Link>
          <h6 className="al-right custom-font-b xs-font">current bid</h6>
        </div>
      </div>
    </div>
  )
}

export default FavCard
