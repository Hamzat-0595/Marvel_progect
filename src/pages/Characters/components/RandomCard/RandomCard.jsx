import React, { useState } from "react";
import "./RandomCard.scss";
import Button from "../../../../components/Button/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomCard = () => {
  const characters = useSelector((state) => state.characters);

  const [randomIndex, setRandomIndex] = useState(0);

  const randomCard = characters[randomIndex];

  const handleSelectRandomCard = () => {
    setRandomIndex(getRandomInt(0, characters.length - 1));
  };

  return (
    <div className="RandomCard">
      <div className="RandomCard__left">
        <img
          className="RandomCard__left-icons"
          src={`${randomCard?.thumbnail?.path}.${randomCard?.thumbnail?.extension}`}
        />
        <div className="RandomCard__left-content">
          <div className="RandomCard__name">{randomCard?.name}</div>
          <div className="RandomCard__text">
            {randomCard?.description?.length > 160
              ? randomCard?.description.substring(0, 160) + "..."
              : randomCard?.description}
          </div>
          <div className="RandomCard__btn">
            <Link to={`/character/${randomCard?.id}`}>
              <Button
                className="RandomCard__btn-red"
                color={"red"}
                content={"HOMEPAGE"}
              />
            </Link>
            <Link to={randomCard?.urls?.[1]?.url}>
              <Button
                className="RandomCard__btn-grey"
                color={"grey"}
                content={"WIKI"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="RandomCard__right">
        <div className="RandomCard__right-text">
          Random character for today!
          <br /> Do you want to get to know him better?
          <br />
          <br />
          Or choose another one
        </div>

        <Button
          className="RandomCard__right-btn"
          color={"red"}
          content={"TRY IT"}
          onClick={handleSelectRandomCard}
        />
      </div>
    </div>
  );
};

export default RandomCard;
