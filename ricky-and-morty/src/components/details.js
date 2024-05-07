import React from "react";
import CharacterCardList from "./card";


const CharacterDetails = ({ characters }) => {
    return (
      <div className="card-details">
        {characters.map(character => (
          <CharacterCardList
            key={character.name}
            name={character.name}
            status={character.status}
            species={character.species}
            location={character.location.name}
            episode={character.episode[0].name}
          />
        ))}
      </div>
    );
  };

export default CharacterDetails 