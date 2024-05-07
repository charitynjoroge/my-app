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
      try {
        const response = await fetch("http://localhost:9000/results");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
