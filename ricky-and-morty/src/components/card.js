import React, { useState, useEffect } from "react";

function CharacterCard({ character }) {
  const { name, status, species, location, episode, image } = character;


  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />
      <div className="card-content">
        <p className="character-name">Name: {name}</p>
        <p>{status} - {species}</p>
        <p>Last known location: {location.name}</p>
        <p>First seen in: {episode[0].name}</p>
      </div>
    </div>
  );
}

function CharacterCardList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let allCharacters = [];
      let page = 1;
      let totalPages = 1;

      do {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        totalPages = data.info.pages;
        page++;
      } while (page <= totalPages);

      setCharacters(allCharacters);
    };

    fetchData();
  }, []);

  return (
    <div className="card-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterCardList;

