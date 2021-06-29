import React from "react";
import PlacesWrapper from "../places-wrapper/places-wrapper";
import MainEmpty from "../main-empty/main-empty";
import PropTypes from "prop-types";
import offerPropTypes from "../offer.prop";
import { connect } from "react-redux";


function Cities({ currentOffers, city, activeSortType }) {
  return (
    <div className="cities">
      {currentOffers.length > 0
      && <PlacesWrapper
        currentOffers={currentOffers}
        city={city}
        activeSortType={activeSortType}
      />
      || <MainEmpty city={city}/>}
    </div>
  );
}


Cities.propTypes = {
  currentOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
};


export default Cities;
