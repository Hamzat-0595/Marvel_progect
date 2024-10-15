import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CharactersList from "./components/CharactersList/CharactersList";
import { SAVE_CHARATERS } from "../../store/constants";
import RandomCard from "./components/RandomCard/RandomCard";

import "./Characters.scss";

const Characters = () => {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const handleLoadMore = () => {
    setOffset(offset + 9);
  };

  const fetchCharacters = async () => {
    try {
      const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters?limit=9&offset=${offset}&apikey=1c9cf65b61735976e916305bad81565d`
      );

      const data = await res.json();

      dispatch({
        type: SAVE_CHARATERS,
        payload: data.data.results,
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchCharacters();
  }, [offset]);

  return (
    <div className="Characters">
      <RandomCard />
      <CharactersList handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default Characters;
