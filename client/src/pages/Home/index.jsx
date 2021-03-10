import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import SearchBar from 'components/SearchBar';
import './style.scss';
import FormationList from 'components/FormationList';

const Home = () => (
  <div className="Home">
    <div className="jumbotron">
      <Jumbotron>
        <div className="jumbotron-text">
          <h1>Rechercher une formation</h1>
          <SearchBar />
        </div>
      </Jumbotron>
    </div>
    <FormationList />
  </div>
);

export default Home;
