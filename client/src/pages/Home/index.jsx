import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.scss';
import FormationList from 'components/FormationList';
import SearchBar from 'components/SearchBar';
import API_BASE_URL from '../../api';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [formationListDefault, setFormationListDefault] = useState();
  const [formationList, setFormationList] = useState();

  const fetchData = async () => {
    fetch(`${API_BASE_URL}formations`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormationList(data);
        setFormationListDefault(data);
      });
  };

  const updateInput = (input) => {
    setSearchInput(input);
  };

  const filterFormations = () => {
    if (searchInput === '') return;
    const filtered = formationListDefault.filter((formation) => (
      formation.title.toLowerCase().includes(searchInput.toLowerCase())));
    setFormationList(filtered);
  };

  useEffect(() => { filterFormations(); }, [searchInput]);
  useEffect(() => { fetchData(); }, []);

  return (

    <div className="Home">
      <div className="jumbotron">
        <Jumbotron>
          <div className="jumbotron-text">
            <h1>Rechercher une formation</h1>
            <SearchBar
              keyword={searchInput}
              handleChange={updateInput}
            />
          </div>
        </Jumbotron>
      </div>
      <FormationList formationList={formationList} />
    </div>
  );
};

export default Home;
