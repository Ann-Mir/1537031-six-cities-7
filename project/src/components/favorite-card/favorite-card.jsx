import React from 'react';
import {capitalizeFirstLetter, getRating} from '../../utils/render';
import offerPropTypes from '../offer.prop';

function FavoriteCard(props) {
  const { price, rating, title, type } = props.offer;
  const ratingWidth = getRating(rating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-small-03.jpg" style={{width: '150', height: '110'}}
               alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button">
            <svg className="place-card__bookmark-icon" style={{width: '18', height: '19'}}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

FavoriteCard.propTypes = {
  offer: offerPropTypes,
};

export default FavoriteCard;
