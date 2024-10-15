import React, { useEffect, useState } from "react";

import image from "../../assets/Avengers.png";
import Logo from "../../assets/Avengers logo.png";

import { useDispatch } from "react-redux";
import { SAVE_COMICS } from "../../store/constants";

import ComicsList from "../Comics/ComicsList/ComicsList";
import "./Comics.scss";

const Comics = () => {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const handleLoadMore = () => {
    setOffset(offset + 8);
  };

  const fetchCharacters = async () => {
    try {
      const res = await fetch(
        `https://gateway.marvel.com/v1/public/comics?limit=8&offset=${offset}&apikey=1c9cf65b61735976e916305bad81565d`
      );

      const data = await res.json();
      console.log("ddddd", data);

      dispatch({
        type: SAVE_COMICS,
        payload: data.data.results,
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchCharacters();
    console.log(1);
  }, [offset]);

  return (
    <div className="comics">
      <div className="character__top">
        <img className="character__top-avengers" src={image} />
        <div className="character__top-text">
          New comics every week! Stay tuned!
        </div>
        <img className="character__top-logo" src={Logo} />
      </div>
      <ComicsList handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default Comics;
