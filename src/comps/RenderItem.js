import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import white from "../assets/white_heart.svg";
import black from "../assets/black_heart.svg";

function RenderItem({ id, src, name, price, element }) {
  const { array, addToCart, add, removeItem } = useContext(UserContext);

  const [showInfo, setShowInfo] = useState(false);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="item">
      <div className="item-container">
        <div className="item-content">
          <div className="item-img">
            <div className="item-image">
              <Link to={`/${id}`}>
                <img src={`https://testbackend.nc-one.com${src}`} alt="item" />
              </Link>
            </div>
            <div className="item-description">
              <div className="item-title">
                <Link to={`/${id}`}>{truncate(`${name}`, 17)}</Link>
              </div>
              <div className="item-details">
                <div className="item-price">$ {price}</div>
                {showInfo ? (
                  <img
                    className="item-heart"
                    src={black}
                    alt="heart"
                    onClick={function (event) {
                      setShowInfo(!showInfo);
                      removeItem(id);
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
                      addToCart(element);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderItem;
