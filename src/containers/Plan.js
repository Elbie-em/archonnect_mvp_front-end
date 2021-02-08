import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
  return (
    <div className="sp-bg">
      <div className="d-flex justify-content-between p-2 w-100 shadow-sm">
        <Link to={"/houseplans"}><i className="fas fa-angle-left fa-2x"></i></Link>
        <h1 className="custom-font-a">Plan X</h1>
        <Link to={"/"}><i className="fas fa-sign-out-alt fa-2x"></i></Link>
      </div>
      <section className="blueprints">
        <img className="blueprint" src="https://i.ibb.co/C78qz5q/lst-a-1.jpg" />
        <img className="blueprint" src="https://i.ibb.co/C78qz5q/lst-a-1.jpg" />
        <img className="blueprint" src="https://i.ibb.co/C78qz5q/lst-a-1.jpg" />
      </section>
      <section className="blueprint-info">
        <div className="plan-info">
          <h6 className="custom-font-a">Designer</h6>
          <h6 className="al-right custom-font-a">$0000</h6>
        </div>
        <div className="plan-info">
          <h6 className="custom-font-a">Rating</h6>
          <h6 className="al-right custom-font-b xs-font">current bid</h6>
        </div>
      </section>
      <section className="blueprint-details p-3">
        <article className="custom-font-b">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </article>
      </section>
      <div className="btn-bid p-3">
        <h4 className="text-white custom-font-a">BID</h4>
      </div>
    </div>
  )
}

export default Plan
