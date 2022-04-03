import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="Planets-Container m-auto col-10">
          { planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
