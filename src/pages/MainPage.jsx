import "../App.css";
import { Outlet, useNavigate, Link, useLocation  } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/header.jsx";
import Main from "../components/Main/main.jsx";
import { useTasks } from "../context/useTasks";
import { Wrapper, NoTasksText } from "./MainPage.styled";
import { useAuth } from "../context/useAuth";
import { MobileCreateButton } from "../components/Header/header.styled";


function MainPage({ isDark, toggleTheme }) {
  const { tasks, isLoading, error, editTask, removeTask } = useTasks();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showSkeleton, setShowSkeleton] = useState(false);
  const skeletonShownRef = useRef(false);

  const location = useLocation();
const hideButton = location.pathname.includes("add-task") || 
location.pathname.includes("card");


  const storageKey = `kanban-order-${user?._id || "guest"}`;

  const loadOrderMap = () =>
    JSON.parse(localStorage.getItem(storageKey)) || {};

  const saveOrderMap = (map) =>
    localStorage.setItem(storageKey, JSON.stringify(map));


  const orderMap = loadOrderMap();

  const normalizedCards = [];

  const grouped = {};

  tasks.forEach((t) => {
    const status = t.status || "Без статуса";
    if (!grouped[status]) grouped[status] = [];
    grouped[status].push(t);
  });

  Object.entries(grouped).forEach(([status, list]) => {
    const saved = orderMap[status];

    if (saved) {
      list.sort((a, b) => saved.indexOf(a._id) - saved.indexOf(b._id));
    }

    list.forEach((t) =>
      normalizedCards.push({
        id: t._id,
        _id: t._id,
        topic: t.topic,
        title: t.title,
        date: t.date,
        status,
        description: t.description,
      })
    );
  });


  useEffect(() => {
    if (!isLoading && tasks.length > 0 && !skeletonShownRef.current) {
      skeletonShownRef.current = true;

      setTimeout(() => {
        setShowSkeleton(true);
        setTimeout(() => setShowSkeleton(false), 500);
      }, 0);
    }
  }, [isLoading, tasks]);


  const handleAddTask = () => navigate("/add-task");

  const handleDeleteCard = async (id) => {
    await removeTask(id);

    const map = loadOrderMap();

    Object.keys(map).forEach((status) => {
      map[status] = map[status].filter((x) => x !== id);
    });

    saveOrderMap(map);
  };

  const handleUpdateCard = async (updated) => {
    await editTask(updated._id, {
      title: updated.title,
      topic: updated.topic,
      status: updated.status,
      description: updated.description,
      date: updated.date,
    });
  };

  const handleSaveOrder = (cards) => {
    const map = {};

    cards.forEach((c) => {
      if (!map[c.status]) map[c.status] = [];
      map[c.status].push(c._id);
    });

    saveOrderMap(map);
  };


  return (
    <div className="wrapper">
      <Header
        onAddTask={handleAddTask}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <Wrapper>
        {error && <NoTasksText>{error}</NoTasksText>}
        {!isLoading && !error && tasks.length === 0 && (
          <NoTasksText>Новых задач нет</NoTasksText>
        )}

        {!error && tasks.length > 0 && (
          <Main
            cards={normalizedCards}
            isLoading={showSkeleton}
            onDeleteCard={handleDeleteCard}
            onUpdateCard={handleUpdateCard}
            onOrderChange={handleSaveOrder}
          />
        )}
      </Wrapper>

      <Outlet />
      {!hideButton && (
  <MobileCreateButton>
    <Link to="/add-task">Создать новую задачу</Link>
  </MobileCreateButton>
)}

    </div>
  );
}

export default MainPage;
