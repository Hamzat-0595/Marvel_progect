import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Contentloader from "react-content-loader";

import Button from "../../../../components/Button/Button";

import "./SelectedCharacter.scss";
import Sceleton from "./Sceleton";

const Selectedcharacter = () => {
  const character = useSelector((state) => state.selectedCharacter);

  if (!character) {
    return <Sceleton />;
  }

  return (
    <div className="SelectedCharacter">
      <div className="SelectedCharacter__top">
        <div className="SelectedCharacter__left">
          <img
            className="SelectedCharacter__icon"
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          />
        </div>

        <div className="SelectedCharacter__right">
          <div className="SelectedCharacter__name">
            {character?.name?.toUpperCase()}
          </div>

          <div className="SelectedCharacter__btn">
            <Link to={`/character/${character?.id}`}>
              <Button
                className="SelectedCharacter__btn-red"
                color={"red"}
                content={"HOMEPAGE"}
              />
            </Link>
            <Link to={character?.urls?.[1]?.url}>
              <Button
                className="SelectedCharacter__btn-grey"
                color={"grey"}
                content={"WIKI"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="SelectedCharacter__text">{character?.description}</div>
    </div>
  );
};

export default Selectedcharacter;
