import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="Planet-Card m-auto mb-4 col-3">
        <h3 data-testid="planet-name" className="mt-3">
          { planetName }
        </h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="col-12" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
