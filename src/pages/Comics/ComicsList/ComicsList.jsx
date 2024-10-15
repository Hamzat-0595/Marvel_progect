import React from "react";

import { useSelector } from "react-redux";

import ComicsCard from "../ComicsCard/ComicsCard";
import Button from "../../../components/Button/Button";

import "./ComicsList.scss";

const ComicsList = ({ handleLoadMore }) => {
  const comics = useSelector((state) => state.comics);

  return (
    <div className="ComicsList">
      <div className="ComicsList__wrapper">
        <div className="ComicsList__container">
          {comics.map((comics) => (
            <ComicsCard comics={comics} />
          ))}
        </div>
        <div className="ComicsList__btn-wrapper">
          <Button
            onClick={handleLoadMore}
            className="ComicsList__btn"
            content={"LOAD MORE"}
            color={"red"}
          />
        </div>
      </div>
    </div>
  );
};

export default ComicsList;
