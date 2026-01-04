import "../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";

import { getTasks } from "../services/kanban.js";
import { Wrapper, LoadingText } from "./MainPage.styled";

function MainPage({ setIsAuth }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const tasks = await getTasks();
        setCards(tasks);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="wrapper">
      <Header setIsAuth={setIsAuth} />

      <Wrapper>
        {isLoading && <LoadingText>Данные загружаются...</LoadingText>}

        {error && <LoadingText>{error}</LoadingText>}

        {!isLoading && !error && <Main cards={cards} />}
      </Wrapper>

      <Outlet />
    </div>
  );
}

export default MainPage;
