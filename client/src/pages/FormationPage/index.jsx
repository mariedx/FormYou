/* eslint-disable max-len */
/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../api';
import './style.scss';

const FormationPage = () => {
  const { formationId } = useParams();
  const [dispalyedFormation, setDisplayedFormation] = useState({});
  console.log(dispalyedFormation);

  const fetchFormationData = () => {
    fetch(`${API_BASE_URL}formations/${formationId}`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        setDisplayedFormation(data);
      });
  };

  useEffect(() => { fetchFormationData(); }, []);

  const [coursesList, setCoursesList] = useState([]);
  console.log(coursesList);

  const getCoursesList = () => {
    fetch(`${API_BASE_URL}courses`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        setCoursesList(data.filter((course) => course.formation_id !== formationId));
      });
  };

  useEffect(() => { getCoursesList(); }, []);

  return (
    <div className="FormationPage">
      <h1>{dispalyedFormation.title}</h1>
      <p>{dispalyedFormation.description}</p>

      <h2>Nos prochaines sessions : </h2>
      <ul>{coursesList.map((course) => `➡️ ${course.date}`)}</ul>
    </div>
  );
};

export default FormationPage;
