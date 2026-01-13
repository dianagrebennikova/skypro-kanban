import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";
import { useTasks } from "../context/useTasks";
import { Wrapper, LoadingText } from "./MainPage.styled";

function MainPage() {
  const { tasks, isLoading, error } = useTasks();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  const handleAddTask = () => {
    navigate("/add-task");
  };

  return (
    <div className="wrapper">
      <Header onAddTask={handleAddTask} />
      <Wrapper>
        {isLoading && <LoadingText>Данные загружаются...</LoadingText>}
        {error && <LoadingText>{error}</LoadingText>}
        {!isLoading && !error && <Main cards={tasks} onCardClick={handleCardClick} />}
      </Wrapper>
      <Outlet /> 
    </div>
  );
}

export default MainPage;
