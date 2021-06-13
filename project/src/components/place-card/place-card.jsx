import React from 'react';
import {capitalizeFirstLetter, getRating} from '../../utils/render';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import generatePath from "react-router/modules/generatePath";

function PlaceCard(props) {
  const {
    id,
    previewImage,
    price,
    description,
    type,
    isFavorite,
    isPremium,
    rating } = props.offer;
  const setActiveOffer = props.setActiveOffer;
  const ratingWidth = getRating(rating);

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => setActiveOffer(id)}
      onMouseLeave={() => setActiveOffer(null)}
    >
      <div className={`place-card__mark ${isPremium ? '' : 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} style={{width: '260', height: '200'}}
               alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
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
          <Link to={{ pathname: generatePath(AppRoute.ROOM, { id })}}>
            {description}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
