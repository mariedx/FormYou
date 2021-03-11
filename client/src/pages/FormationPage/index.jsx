import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../api';

const FormationPage = () => {
  const { formationId } = useParams();
  const [dispalyedFormation, setDisplayedFormation] = useState();

  const fetchFormationData = async () => {
    fetch(`${API_BASE_URL}formations/${formationId}`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        setDisplayedFormation(data);
      });
  };

  useEffect(() => { fetchFormationData(); }, []);

  return (
    <div className="FormationPage">
      <h1>
        {dispalyedFormation.title}
        {' '}
      </h1>
      <p>{dispalyedFormation.description}</p>
    </div>
  );
};

export default FormationPage;
