import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ComicPage.scss";

import image from "../../../assets/Avengers.png";
import Logo from "../../../assets/Avengers logo.png";

const ComicsPage = () => {
  const { id } = useParams();

  const [comics, setComics] = useState(null);

  const fetchComics = async () => {
    try {
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=1c9cf65b61735976e916305bad81565d`
      );

      const data = await res.json();

      console.log("получить ", data.data.results[0]);
      setComics(data.data.results[0]);
    } catch (err) {}
  };

  useEffect(() => {
    fetchComics();
  }, []);

  if (!comics) {
    return null;
  }

  return (
    <div>
      <div className="character">
        <div className="character__top">
          <img className="character__top-avengers" src={image} />
          <div className="character__top-text">
            New comics every week! Stay tuned!
          </div>
          <img className="character__top-logo" src={Logo} />
        </div>
      </div>
      <div className="comicsPage">
        <div className="comics__bottom">
          <img
            className="comics__bottom-icon"
            src={`${comics?.thumbnail?.path}.${comics?.thumbnail?.extension}`}
          />
          <div className="comics__bottom-content">
            <p className="comics__name">{comics?.title?.toUpperCase()}</p>
            <p className="comics__text">{comics?.description}</p>
            <p className="comics__pageCount">{comics?.pageCount} pages </p>
            <p className="comics__Language">
              language: {comics?.textObjects?.[0]?.language}
            </p>
            <p className="comics__price">{comics?.prices?.[0]?.price} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsPage;
