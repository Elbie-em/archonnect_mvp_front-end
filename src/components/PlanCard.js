import React from 'react'
import {Link} from 'react-router-dom'

const PlanCard = ({id,img_url, name, price }) => {
  return (
    <div className="shadow-lg rounded plan-card">
      <img className="plan-design" src={img_url} alt={img_url} />
      <div className="d-flex flex-column p-3">
        <div className="plan-info">
          <h6 className="custom-font-a">{name}</h6>
          <h6 className="al-right custom-font-a">${price}</h6>
        </div>
        <div className="plan-info">
          <Link className="btn btn-start rounded-pill xs-font text-white" to={`/houseplans/${id}`}>View</Link>
          <h6 className="al-right custom-font-b xs-font">current bid</h6>
        </div>
      </div>
    </div>
  )
}

export default PlanCard
