import React from 'react';
import FormationCard from '../FormationCard';

const FormationList = ({ formationList = [] }) => (
  <div className="FormationList">
    { formationList.map((data) => {
      if (data) {
        return (
          <FormationCard
            key={data.id}
            formation={data}
          />
        );
      }
      return null;
    })}
  </div>
);

export default FormationList;
