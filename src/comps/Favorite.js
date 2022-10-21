import React, { useContext } from "react";
import "./CSS/Favorite.css";
import black from "../assets/black_heart.svg";
import white from "../assets/white_heart.svg";
import { UserContext } from "../UserContext";
import FavItem from "./FavItem";

function Favorite({ removeItem }) {
  const { addToCart, cart, setCart } = useContext(UserContext);

  return (
    <div className="fav">
      <div className="fav-container">
        <div className="fav-title">Favorites</div>
        <div className="fav-content">
          {cart.length > 0 ? (
            cart.map((item, index) => {
              return <FavItem key={index} {...item} removeItem={removeItem} />;
            })
          ) : (
            <div className="empty">Cart Empty</div>
          )}
          {}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
