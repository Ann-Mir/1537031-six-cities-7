import React from 'react';
import PropTypes from 'prop-types';
import {capitalizeFirstLetter, getRating} from '../../utils/render';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import generatePath from 'react-router/modules/generatePath';
import offerPropTypes from '../offer.prop';
import {CARD_SETTINGS, CardTypes} from '../../settings';
import {useDispatch} from 'react-redux';
import {setActiveOffer} from '../../store/action';


function PlaceCard({ offer, cardType }) {
  const {
    id,
    previewImage,
    price,
    title,
    type,
    isFavorite,
    isPremium,
    rating } = offer;
  const ratingWidth = getRating(rating);

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(setActiveOffer(+id));
  };

  const handleMouseLeave = () => {
    dispatch(setActiveOffer(null));
  }

  return (
    <article
      className={`${CARD_SETTINGS[cardType].CLASS_MIX} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`place-card__mark ${isPremium ? '' : 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className={`${CARD_SETTINGS[cardType].IMAGE_WRAPPER_CLASS} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            style={{width: CARD_SETTINGS[cardType].CARD_WIDTH, height: CARD_SETTINGS[cardType].CARD_HEIGHT}}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${CARD_SETTINGS[cardType].CARD_INFO_CLASS} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" style={{width: '18', height: '19'}}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={{ pathname: generatePath(AppRoute.ROOM, { id })}}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}


PlaceCard.propTypes = {
  offer: offerPropTypes,
  cardType: PropTypes.oneOf(Object.keys(CardTypes)).isRequired,
};

export default PlaceCard;
