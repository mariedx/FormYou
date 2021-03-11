import React from 'react';
import './style.scss';

const FormationCard = ({ formation }) => (
  <div className="FormationCard">
    <div className="formation-card">
      <h3 className="formation-title">{formation.title}</h3>
      <div className="formation-text">
        <p>{formation.description}</p>
      </div>
      <button className="btn" type="submit">En savoir plus</button>
    </div>
  </div>
);

export default FormationCard;
