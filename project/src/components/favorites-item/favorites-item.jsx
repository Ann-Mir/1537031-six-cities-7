import React, {memo} from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../offer.prop';
import FavoritesCityList from '../favorites-city-list/favorites-city-list';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCity} from '../../store/action';

function FavoritesItem({ favoriteOffersByCity, city }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.ROOT} onClick={handleClick}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesCityList favoriteOffersByCity={favoriteOffersByCity} />
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteOffersByCity: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

export default memo(FavoritesItem);
