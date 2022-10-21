import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./CSS/SingleItem.css";
// IMG
import zoom from "../assets/zoom.svg";
import white from "../assets/white_heart.svg";
import black from "../assets/black_heart.svg";

function SingleItem() {
  const { array, active, setActive, addToCart, removeItem } =
    useContext(UserContext);
  const { productId } = useParams();
  let prod = array.find((item) => item.id == productId);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="single">
      <div className="single-item">
        <div className="left">
          <div
            className={`prod-img ${active ? "active" : ""}`}
            onClick={() => setActive(false)}
          >
            <img
              className={`product ${active ? "active" : ""}`}
              src={`https://testbackend.nc-one.com${prod.src}`}
              alt=""
            />
          </div>
          <img
            className="zoom"
            onClick={() => setActive(true)}
            src={zoom}
            alt="zoom"
          />
        </div>
        <div className="right">
          <div className="single-title">{truncate(`${prod.name}`, 30)}</div>
          <div className="single-details">
            <h2>${prod.price}</h2>
            {showInfo ? (
              <img
                className="item-heart"
                src={black}
                alt="heart"
                onClick={function (event) {
                  setShowInfo(!showInfo);
                  removeItem(prod.id);
                }}
              />
            ) : (
              <img
                className="item-heart"
                src={white}
                alt="heart"
                // onClick={() => addToCart(element)}
                onClick={function (event) {
                  setShowInfo(!showInfo);
                  addToCart(prod);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;

// <img src={`https://testbackend.nc-one.com${prod.src}`} alt="" />
//   <Link to="/products">
//     <button>Go Back</button>
//   </Link>
