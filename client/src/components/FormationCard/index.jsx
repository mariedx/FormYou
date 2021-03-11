import React from 'react';
import './style.scss';

const FormationCard = () => (
  <div className="FormationCard">
    <div className="formation-card">
      <h3 className="formation-title">JavaScript Debutant</h3>
      <div className="formation-text">
        <p>
          Devenez un monstre en JavaScript et maitriser des sujets qui font peur tels,
          que l&apos;Astrologie avec Marie et Clem, l&apos;ophtalmologie avec Coline.
          Mais aussi des sujets mashallah tel que l&apos;annif des 5ans
          entre Max le goat et sa chérie *_*.
        </p>
      </div>
      <button className="btn" type="submit">En savoir plus</button>
    </div>
  </div>
);

export default FormationCard;
