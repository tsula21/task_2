import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";
// PAGES
import Header from "./comps/Header";
import Favorite from "./comps/Favorite";
import ItemList from "./comps/ItemList";
import SingleItem from "./comps/SingleItem";

function App() {
  const baseURL = "https://testbackend.nc-one.com/image";
  const [array, setArray] = useState(null);
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/`).then((resp) => {
      setArray(resp.data);
    });
  }, []);

  function addToCart(koko) {
    console.log(koko, "koko");
    setCart([...cart, koko]);
  }

  function removeItem(id) {
    let item = cart.filter((elem) => elem.id !== id);
    setCart(item);
    setCart((current) =>
      current.map((obj) => {
        return obj;
      })
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <UserContext.Provider
      value={{
        array,
        active,
        setActive,
        addToCart,
        cart,
        setCart,
        removeItem,
      }}
    >
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Favorite removeItem={removeItem} />
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/:productId" element={<SingleItem />} />
              <Route path="*" element={<>Error</>} />
            </Routes>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
