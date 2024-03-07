import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const CharacterCards = ({ characterDetails, onCharacterSelect }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {characterDetails.map((character, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4" onClick={() => onCharacterSelect(character)}>
            <div className="card" style={{cursor: 'pointer'}}>
              {character.image && (
                <img src={character.image} className="card-img-top" alt={character.name} />
              )}
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species} - {character.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCards;

