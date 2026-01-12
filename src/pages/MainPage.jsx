import "../App.css";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";
import { useTasks } from "../context/useTasks";

import { Wrapper, LoadingText } from "./MainPage.styled";

function MainPage() {
  const { cards, isLoading, error } = useTasks();

  return (
    <div className="wrapper">
      <Header />

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
