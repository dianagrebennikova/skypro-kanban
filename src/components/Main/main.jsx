import Column from "../Column/Column";

const Main = ({ cards }) => {
  const cardsWithoutStatus = cards.filter((c) => c.status === "Без статуса");
  const cardsToDo = cards.filter((c) => c.status === "Нужно сделать");
  const cardsInProgress = cards.filter((c) => c.status === "В работе");
  const cardsTesting = cards.filter((c) => c.status === "Тестирование");
  const cardsDone = cards.filter((c) => c.status === "Готово");

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса" cards={cardsWithoutStatus} />
            <Column title="Нужно сделать" cards={cardsToDo} />
            <Column title="В работе" cards={cardsInProgress} />
            <Column title="Тестирование" cards={cardsTesting} />
            <Column title="Готово" cards={cardsDone} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
