import React from "react";

import CharacterCard from "./components/CharacterCard/CharacterCard";
import Button from "../../../../components/Button/Button";
import SelectedCharacter from "../SelectedCharacter/SelectedCharacter";

import { useSelector, useDispatch } from "react-redux";
import { SELECT_CHARATER } from "../../../../store/constants";

import "./CharactersList.scss";

const CharactersList = ({ handleLoadMore }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const character = useSelector((state) => state.selectedCharacter);

  console.log(character);

  const handleClick = (character) => {
    dispatch({
      type: SELECT_CHARATER,
      payload: character,
    });
  };

  return (
    <div className="CharactersList">
      <div className="CharactersList__container">
        {characters.map((character) => (
          <div className="container" onClick={() => handleClick(character)}>
            <CharacterCard character={character} />
          </div>
        ))}

        <Button
          onClick={handleLoadMore}
          className="CharactersList__btn"
          content={"LOAD MORE"}
          color={"red"}
        />
      </div>
      <SelectedCharacter />
    </div>
  );
};

export default CharactersList;
