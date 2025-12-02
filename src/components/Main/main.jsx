import Column from "../Column/Column";

const Main = () => {
  const cardsWithoutStatus = [
    { id: 1, theme: "_orange", title: "Название задачи", date: "30.10.23" },
    { id: 2, theme: "_green", title: "Название задачи", date: "30.10.23" },
    { id: 3, theme: "_orange", title: "Название задачи", date: "30.10.23" },
    { id: 4, theme: "_purple", title: "Название задачи", date: "30.10.23" },
  ];

  const cardsToDo = [
    { id: 5, theme: "_green", title: "Название задачи", date: "30.10.23" },
  ];

  const cardsInProgress = [
    { id: 6, theme: "_green", title: "Название задачи", date: "30.10.23" },
    { id: 7, theme: "_purple", title: "Название задачи", date: "30.10.23" },
    { id: 8, theme: "_orange", title: "Название задачи", date: "30.10.23" },
  ];

  const cardsTesting = [
    { id: 9, theme: "_green", title: "Название задачи", date: "30.10.23" },
  ];

  const cardsDone = [
    { id: 10, theme: "_green", title: "Название задачи", date: "30.10.23" },
  ];

  return (
    <main className="main">
      {" "}
      <div className="container">
        {" "}
        <div className="main__block">
          {" "}
          <div className="main__content">
            {" "}
            <Column title="Без статуса" cards={cardsWithoutStatus} />{" "}
            <Column title="Нужно сделать" cards={cardsToDo} />{" "}
            <Column title="В работе" cards={cardsInProgress} />{" "}
            <Column title="Тестирование" cards={cardsTesting} />{" "}
            <Column title="Готово" cards={cardsDone} />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default Main;
