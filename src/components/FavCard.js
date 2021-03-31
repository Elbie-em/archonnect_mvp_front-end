import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FavCard = ({
  id, imgUrl, name, price,
}) => (
  <div className="fav-card rounded shadow">
    <img className="fav-card-th rounded-top" src={imgUrl} alt="img" />
    <div className="d-flex flex-column p-3">
      <div className="plan-info">
        <h6 className="custom-font-a">{name}</h6>
        <h6 className="al-right custom-font-a">
          $
          {price}
        </h6>
      </div>
      <div className="plan-info">
        <Link className="btn fav-btn text-white rounded-pill custom-font-a" to={`/houseplans/${id}`}>View</Link>
        <h6 className="al-right custom-font-b xs-font">current bid</h6>
      </div>
    </div>
  </div>
);

FavCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FavCard;
