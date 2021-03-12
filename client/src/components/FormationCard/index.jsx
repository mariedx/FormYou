import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const FormationCard = ({ formation }) => (
  <div className="FormationCard">
    <div className="formation-card">
      <h3 className="formation-title">{formation.title}</h3>
      <div className="formation-text">
        <p>{formation.description}</p>
      </div>
      <Link to={`/formations/${formation.id}`} className="btn">En savoir plus</Link>
    </div>
  </div>
);

export default FormationCard;
