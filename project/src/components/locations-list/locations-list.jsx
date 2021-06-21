import React from 'react';
import LocationsOption from '../locations-option/locations-option';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action';


function LocationsList ({ locations, city, setCity }) {

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    if (city === textContent) {
      return;
    }
    setCity(textContent);
  }

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => <LocationsOption
        key={location.name}
        name={location.name}
        isActive={location.name === city}
        onClick={handleClick}
      />)}
    </ul>
  );
}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired),
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

const mapStateToProps = ({ city }) => ({
  city: city,
});


export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
