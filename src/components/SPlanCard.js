import React from 'react'
import { Link } from 'react-router-dom'

const SPlanCard = ({ name, details, architect, rating, price, imgF, imgS, imgT,createFavourite }) => {

  const printStars = (ratings) => {
    const stars = []
    for(let i = 0; i < ratings; i++){
      stars.push(<i key={i} className="fas fa-star text-warning"></i>)
    }

    return stars
  }

  return (
    <>
      <div className="d-flex justify-content-between p-2 w-100 shadow-sm">
        <Link to={"/houseplans"}><i className="fas fa-angle-left fa-2x"></i></Link>
        <h1 className="custom-font-a">{name}</h1>
        <Link to={"/houseplans"}><i className="fas fa-search fa-2x"></i></Link>
      </div>
      <section className="blueprints">
        <img className="blueprint" src={imgF} />
        <img className="blueprint" src={imgS} />
        <img className="blueprint" src={imgT} />
      </section>
      <section className="blueprint-info">
        <div className="plan-info">
          <h6 className="custom-font-a">Designed by: {architect}</h6>
          <p className="al-right"><span className="al-right custom-font-b xs-font">current bid</span>&nbsp;<span className="al-right custom-font-a">${price}</span></p>
        </div>
        <div className="plan-info">
          <h6 className="custom-font-a">{printStars(rating)}</h6>
          <p className="al-right"><button className="btn fav-btn text-white rounded-pill custom-font-a" onClick={createFavourite}>Add to favourites</button></p>
        </div>
      </section>
      <section className="blueprint-details p-3">
        <article className="custom-font-b">
          <h3 className="custom-font-a"><u>Details</u></h3>
          {details}
        </article>
      </section>
      <div className="btn-bid p-3">
        <h4 className="text-white custom-font-a">BID</h4>
      </div>
    </>
  )
}

export default SPlanCard
