import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

import black from "../assets/black_heart.svg";

function FavItem({ id, src, price, name }) {
  const { removeItem } = useContext(UserContext);
  return (
    <div className="fav-item" key={id}>
      <img src={`https://testbackend.nc-one.com${src}`} alt="prod" />
      <div className="fav-description">
        <h3>{name}</h3>
        <div className="fav-details">
          <p>$ {price}</p>
          <img
            className="heart"
            onClick={() => removeItem(id)}
            src={black}
            alt="heart"
          />
        </div>
      </div>
    </div>
  );
}

export default FavItem;
