import React from 'react';
import './style.scss';

const FormationList = ({ formationList = [] }) => (
  <div className="FormationList">
    { formationList.map((data) => {
      if (data) {
        return (
          <div key={data.id}>
            <h1>{data.title}</h1>
          </div>
        );
      }
      return null;
    })}
  </div>
);

export default FormationList;
