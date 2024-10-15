import React from "react";

import "./ComicsCard.scss";
import { Link } from "react-router-dom";

const ComicsCard = ({ comics }) => {
  return (
    <Link to={`/comics/${comics?.id}`}>
      <div className="ComicsCard">
        <img
          className="ComicsCard__icon"
          src={`${comics?.thumbnail?.path}.${comics?.thumbnail?.extension}`}
        />
        <p className="ComicsCard__name">{comics?.title?.toUpperCase()}</p>
        <p className="ComicsCard__price">{comics?.prices?.[0]?.price} $</p>
      </div>
    </Link>
  );
};

export default ComicsCard;
