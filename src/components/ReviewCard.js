import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({
  imgUrl, title, name, comment,
}) => (
  <>
    <div className="shadow review-card rounded">
      <img className="rc-img rounded-circle" src={imgUrl} alt="img_url" />
      <h5 className="custom-font-a">{name}</h5>
      <p className="text-muted custom-font-b xs-font">{title}</p>
      <p className="text-muted custom-font-b xs-font">{comment}</p>
    </div>
  </>
);

ReviewCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewCard;
