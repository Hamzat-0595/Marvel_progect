import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Character.scss";

import image from "../../assets/Avengers.png";
import Logo from "../../assets/Avengers logo.png";

const Character = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    try {
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=1c9cf65b61735976e916305bad81565d`
      );

      const data = await res.json();

      console.log("получить ", data.data.results[0]);
      setCharacter(data.data.results[0]);
    } catch (err) {
      console.log("Запрос чарактера не прошел");
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  console.log(character);

  return (
    <div className="character">
      <div className="character__top">
        <img className="character__top-avengers" src={image} />
        <div className="character__top-text">
          New comics every week! Stay tuned!
        </div>
        <img className="character__top-logo" src={Logo} />
      </div>
      <div className="character__bottom">
        <img
          className="character__bottom-icon"
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        />
        <div className="character__bottom-content">
          <div className="character__bottom-name">{character?.name}</div>
          <div className="character__bottom-text">{character?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Character;
