import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
// Referência para usar os cards das missões: https://react-bootstrap.github.io/components/cards/

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="Missions-Container col-12">
        <Title headline="Missões" />
        <Row md={ 2 } className="g-5 col-10 m-auto">
          { missions.map((mission, index) => (
            <MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />)) }
        </Row>
      </div>
    );
  }
}

export default Missions;
