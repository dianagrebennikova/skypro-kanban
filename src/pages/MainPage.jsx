import "../App.css";
import { useState, useEffect } from "react";

import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";

import { cardsData } from "../../data.js";

import { useParams, useNavigate } from "react-router-dom";
import CardPage from "./CardPage";
import ExitPage from "./ExitPage";
import { Wrapper, LoadingText } from "./MainPage.styled";

function MainPage({ setIsAuth }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleCloseCard = () => navigate("/");

  return (
    <div className="wrapper">
      <Header setIsAuth={setIsAuth} openExit={() => setIsExitOpen(true)} />

      <Wrapper>
        {isLoading ? (
          <LoadingText>Данные загружаются...</LoadingText>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>

      {!isLoading && id && <CardPage cardId={id} onClose={handleCloseCard} />}

      {isExitOpen && (
        <ExitPage setIsAuth={setIsAuth} onClose={() => setIsExitOpen(false)} />
      )}
    </div>
  );
}

export default MainPage;
