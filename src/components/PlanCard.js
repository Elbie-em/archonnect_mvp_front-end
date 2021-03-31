import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlanCard = ({
  id, imgUrl, name, price,
}) => (
  <div className="shadow rounded plan-card">
    <img className="plan-design rounded-top" src={imgUrl} alt={imgUrl} />
    <div className="d-flex flex-column p-3">
      <div className="plan-info">
        <h6 className="custom-font-a">{name}</h6>
        <h6 className="al-right custom-font-a">
          $
          {price}
        </h6>
      </div>
      <div className="plan-info">
        <Link className="btn btn-start rounded-pill xs-font text-white" to={`/houseplans/${id}`}>View</Link>
        <h6 className="al-right custom-font-b xs-font">current bid</h6>
      </div>
    </div>
  </div>
);

PlanCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PlanCard;
