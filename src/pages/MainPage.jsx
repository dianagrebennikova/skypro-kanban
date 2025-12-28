import "../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";

import { cardsData } from "../../data.js";
import { Wrapper, LoadingText } from "./MainPage.styled";

function MainPage({ setIsAuth }) {
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
      <Header setIsAuth={setIsAuth} />

      <Wrapper>
        {isLoading ? <LoadingText>Данные загружаются...</LoadingText> : <Main cards={cards} />}
      </Wrapper>
      <Outlet />
    </div>
  );
}

export default MainPage;
