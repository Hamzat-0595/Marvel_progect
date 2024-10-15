import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <div className="CharacterCard">
      <img
        className="CharacterCard__icon"
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
      />
      <p className="CharacterCard__name">{character?.name?.toUpperCase()}</p>
    </div>
  );
};

export default CharacterCard;
