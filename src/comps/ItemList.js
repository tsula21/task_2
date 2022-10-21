import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/ItemList.css";
import { UserContext } from "../UserContext";
// IMG
import white from "../assets/white_heart.svg";
import black from "../assets/black_heart.svg";
import RenderItem from "./RenderItem";

function ItemList() {
  const { array, addToCart, add, removeItem } = useContext(UserContext);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  if (!array) return null;
  return (
    <div className="items">
      {array.map((elem, index) => {
        return <RenderItem key={index} {...elem} element={elem} />;
      })}
    </div>
  );
}

export default ItemList;
