import "./App.css";
import { useState, useEffect } from "react";

import PopUser from "./components/popups/popUser.jsx";
import PopNewCard from "./components/popups/popNewCard.jsx";
import PopBrowse from "./components/popups/popBrowse.jsx";
import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";

import { cardsData } from "../data.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="wrapper">
      {/* pop-up start */}
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      {/* pop-up end */}

      <Header />

      {isLoading ? (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Данные загружаются...
        </h2>
      ) : (
        <Main cards={cards} />
      )}
    </div>
  );
}

export default App;
